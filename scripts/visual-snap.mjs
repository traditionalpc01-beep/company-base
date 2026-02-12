import fs from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright';

function parseArgs(argv) {
  const args = { base: 'http://127.0.0.1:4173', out: '.trae/documents/visual' };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--base') args.base = argv[++i] ?? args.base;
    if (a === '--out') args.out = argv[++i] ?? args.out;
  }
  return args;
}

async function ensureDir(p) {
  await fs.mkdir(p, { recursive: true });
}

async function snapPage(page, url, filePath) {
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(350);
  await page.screenshot({ path: filePath, fullPage: true });
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const outDir = path.resolve(process.cwd(), args.out);
  await ensureDir(outDir);

  const targets = [
    { name: 'home', path: '/' },
    { name: 'honor', path: '/archives/honor' },
  ];

  const viewports = [
    { name: 'desktop', width: 1440, height: 900 },
    { name: 'tablet', width: 834, height: 1112 },
    { name: 'mobile', width: 390, height: 844 },
  ];

  const browser = await chromium.launch();
  try {
    for (const vp of viewports) {
      const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
      const page = await context.newPage();
      for (const t of targets) {
        const url = new URL(t.path, args.base).toString();
        const fileName = `${t.name}_${vp.name}.png`;
        await snapPage(page, url, path.join(outDir, fileName));
      }
      await context.close();
    }
  } finally {
    await browser.close();
  }

  process.stdout.write(`Screenshots saved to: ${outDir}\n`);
}

await main();
