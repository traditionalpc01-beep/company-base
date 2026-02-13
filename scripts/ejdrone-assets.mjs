import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import https from 'node:https';
import { chromium } from 'playwright';
import axios from 'axios';

const DEFAULT_URLS = ['https://www.ejdrone.com/', 'https://www.ejdrone.cn/'];

function parseArgs(argv) {
  const args = { urls: [], out: 'src/assets/ejdrone', download: true, optimize: true, max: 500, include: null, insecure: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--urls') {
      while (argv[i + 1] && !argv[i + 1].startsWith('--')) {
        args.urls.push(argv[++i]);
      }
      continue;
    }
    if (a === '--out') {
      args.out = argv[++i];
      continue;
    }
    if (a === '--no-download') args.download = false;
    if (a === '--no-optimize') args.optimize = false;
    if (a === '--max') args.max = Number(argv[++i] ?? args.max);
    if (a === '--include') args.include = argv[++i] ?? null;
    if (a === '--insecure') args.insecure = true;
  }
  if (!args.urls.length) args.urls = DEFAULT_URLS;
  return args;
}

function extractCssUrls(backgroundImage) {
  if (!backgroundImage || backgroundImage === 'none') return [];
  const urls = [];
  const re = /url\((['"]?)(.*?)\1\)/g;
  let m;
  while ((m = re.exec(backgroundImage))) {
    const u = m[2]?.trim();
    if (u) urls.push(u);
  }
  return urls;
}

function toAbsolute(u, base) {
  try {
    return new URL(u, base).toString();
  } catch {
    return null;
  }
}

function isHttpUrl(u) {
  return typeof u === 'string' && (u.startsWith('http://') || u.startsWith('https://'));
}

function hashId(input) {
  return crypto.createHash('sha1').update(input).digest('hex').slice(0, 12);
}

function guessExt(urlStr, contentType) {
  const ct = (contentType ?? '').toLowerCase();
  if (ct.includes('image/svg')) return 'svg';
  if (ct.includes('image/webp')) return 'webp';
  if (ct.includes('image/avif')) return 'avif';
  if (ct.includes('image/png')) return 'png';
  if (ct.includes('image/jpeg') || ct.includes('image/jpg')) return 'jpg';
  if (ct.includes('image/gif')) return 'gif';
  if (ct.includes('image/x-icon') || ct.includes('image/vnd.microsoft.icon')) return 'ico';

  try {
    const ext = path.extname(new URL(urlStr).pathname).replace('.', '').toLowerCase();
    if (ext) return ext;
  } catch {
    return 'bin';
  }
  return 'bin';
}

async function ensureDir(p) {
  await fs.mkdir(p, { recursive: true });
}

async function crawlUrls(urls, max, insecure) {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, ignoreHTTPSErrors: insecure });

  const found = new Map();

  for (const url of urls) {
    const page = await context.newPage();
    page.setDefaultTimeout(60_000);

    page.on('response', (res) => {
      try {
        const ct = res.headers()['content-type'] || '';
        if (!ct.toLowerCase().startsWith('image/')) return;
        const u = res.url();
        if (!isHttpUrl(u)) return;
        if (found.size >= max) return;
        found.set(u, {
          url: u,
          foundAt: url,
          via: 'response',
          contentType: ct,
        });
      } catch {
        return;
      }
    });

    await page.goto(url, { waitUntil: 'networkidle' });
    await page.waitForTimeout(600);

    await page.evaluate(async () => {
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const maxScrolls = 24;
      for (let i = 0; i < maxScrolls; i++) {
        window.scrollBy(0, Math.max(700, window.innerHeight * 0.85));
        await sleep(180);
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(600);

    const domUrls = await page.evaluate(() => {
      const results = [];
      const imgs = Array.from(document.images || []);
      for (const img of imgs) {
        if (img.currentSrc) results.push({ u: img.currentSrc, via: 'img.currentSrc' });
        if (img.src) results.push({ u: img.src, via: 'img.src' });
        const extras = ['data-src', 'data-original', 'data-lazy', 'data-bg', 'data-background'];
        for (const k of extras) {
          const v = img.getAttribute(k);
          if (v) results.push({ u: v, via: `img.${k}` });
        }
        const srcset = img.getAttribute('srcset');
        if (srcset) {
          for (const part of srcset.split(',')) {
            const p = part.trim().split(/\s+/)[0];
            if (p) results.push({ u: p, via: 'img.srcset' });
          }
        }
      }

      const sources = Array.from(document.querySelectorAll('source[srcset]'));
      for (const s of sources) {
        const ss = s.getAttribute('srcset');
        if (!ss) continue;
        for (const part of ss.split(',')) {
          const p = part.trim().split(/\s+/)[0];
          if (p) results.push({ u: p, via: 'source.srcset' });
        }
      }

      const nodes = Array.from(document.querySelectorAll('*'));
      for (const el of nodes) {
        const bg = getComputedStyle(el).backgroundImage;
        if (bg && bg !== 'none') results.push({ u: bg, via: 'css.backgroundImage' });
      }

      return results;
    });

    for (const entry of domUrls) {
      if (found.size >= max) break;
      if (!entry?.u) continue;
      if (entry.via === 'css.backgroundImage') {
        const urlsInCss = extractCssUrls(entry.u);
        for (const maybe of urlsInCss) {
          if (found.size >= max) break;
          const abs = toAbsolute(maybe, url);
          if (!abs || !isHttpUrl(abs)) continue;
          if (!found.has(abs)) found.set(abs, { url: abs, foundAt: url, via: 'css' });
        }
        continue;
      }

      const abs = toAbsolute(entry.u, url);
      if (!abs || !isHttpUrl(abs)) continue;
      if (!found.has(abs)) found.set(abs, { url: abs, foundAt: url, via: entry.via });
    }

    await page.close();
  }

  await context.close();
  await browser.close();

  return Array.from(found.values());
}

async function downloadAll(entries, rawDir, insecure) {
  const httpsAgent = insecure ? new https.Agent({ rejectUnauthorized: false }) : undefined;
  const downloaded = [];
  for (const e of entries) {
    const id = hashId(e.url);
    const safeBase = `ejdrone_${id}`;

    let resp;
    try {
      resp = await axios.get(e.url, {
        responseType: 'arraybuffer',
        timeout: 60_000,
        httpsAgent,
        headers: {
          'User-Agent': 'Mozilla/5.0',
          Referer: e.foundAt,
        },
      });
    } catch {
      continue;
    }

    const contentType = resp.headers['content-type'] || e.contentType || '';
    const ext = guessExt(e.url, contentType);
    const fileName = `${safeBase}.${ext}`;
    const filePath = path.join(rawDir, fileName);

    try {
      await fs.writeFile(filePath, Buffer.from(resp.data));
    } catch {
      continue;
    }

    downloaded.push({
      ...e,
      id,
      fileName,
      filePath,
      contentType,
      bytes: resp.data?.byteLength ?? resp.data?.length ?? null,
    });
  }
  return downloaded;
}

async function optimizeAll(downloaded, outDir) {
  let sharp;
  try {
    const mod = await import('sharp');
    sharp = mod.default ?? mod;
  } catch {
    return downloaded.map((d) => ({ ...d, optimized: [] }));
  }

  const optimized = [];
  for (const d of downloaded) {
    const ext = path.extname(d.fileName).slice(1).toLowerCase();
    const isRaster = ['png', 'jpg', 'jpeg', 'webp', 'avif'].includes(ext);
    if (!isRaster) {
      optimized.push({ ...d, optimized: [] });
      continue;
    }

    const variants = [];
    const base = d.fileName.replace(/\.[^.]+$/, '');
    const input = d.filePath;

    for (const width of [900, 1400]) {
      const outName = `${base}_${width}w.webp`;
      const outPath = path.join(outDir, outName);
      try {
        const img = sharp(input);
        const meta = await img.metadata();
        const resized = meta.width && meta.width > width ? img.resize({ width, withoutEnlargement: true }) : img;
        await resized.webp({ quality: 82 }).toFile(outPath);
        variants.push({ fileName: outName, width, format: 'webp' });
      } catch {
        continue;
      }
    }

    optimized.push({ ...d, optimized: variants });
  }
  return optimized;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const outRoot = path.resolve(process.cwd(), args.out);
  const rawDir = path.join(outRoot, 'raw');
  const optDir = path.join(outRoot, 'optimized');

  await ensureDir(outRoot);
  await ensureDir(rawDir);
  await ensureDir(optDir);

  const crawled = await crawlUrls(args.urls, args.max, args.insecure);
  const includeRe = args.include ? new RegExp(args.include) : null;
  const filtered = includeRe ? crawled.filter((x) => includeRe.test(x.url)) : crawled;

  let downloaded = [];
  if (args.download) {
    downloaded = await downloadAll(filtered, rawDir, args.insecure);
  }

  let optimized = [];
  if (args.download && args.optimize) {
    optimized = await optimizeAll(downloaded, optDir);
  }

  const manifest = {
    generatedAt: new Date().toISOString(),
    urls: args.urls,
    max: args.max,
    found: filtered.length,
    foundItems: filtered,
    downloaded: downloaded.length,
    optimized: optimized.length,
    items: optimized.length ? optimized : downloaded,
  };

  await fs.writeFile(path.join(outRoot, 'manifest.json'), JSON.stringify(manifest, null, 2), 'utf8');
  process.stdout.write(
    `Found ${crawled.length} images, downloaded ${downloaded.length}, optimized ${optimized.length}. Manifest: ${path.join(outRoot, 'manifest.json')}\n`,
  );
}

await main();

