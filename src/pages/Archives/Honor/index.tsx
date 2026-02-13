import React, { useEffect, useMemo, useState } from 'react';
import { Award, FileText, Shield, CheckCircle } from 'lucide-react';
import { honorCertificates } from '../../../assets/ejdrone/honors';

type HonorCert = (typeof honorCertificates)[number];

const CertificateThumb: React.FC<{ cert: HonorCert }> = ({ cert }) => {
  const [fallback, setFallback] = useState(false);

  return (
    <div className="relative aspect-[3/4] overflow-hidden bg-ink/5">
      <img
        src={fallback ? cert.sourceUrl : cert.image900}
        srcSet={
          fallback
            ? undefined
            : `${cert.image900} 900w, ${cert.image1400} 1400w`
        }
        sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
        alt={cert.title}
        loading="lazy"
        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"
        onError={() => setFallback(true)}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/80 via-cyber-dark/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
        <span className="text-ink font-medium">查看大图</span>
      </div>
    </div>
  );
};

const Honor = () => {
  const stats = [
    { label: '累计申请专利', value: '33', unit: '项', icon: FileText },
    { label: '获得软件著作权', value: '12', unit: '项', icon: Award },
    { label: '注册商标', value: '21', unit: '项', icon: Shield },
    { label: '知识产权总计', value: '61', unit: '项', icon: CheckCircle },
  ];

  const [activeId, setActiveId] = useState<string | null>(null);

  const activeIndex = useMemo(() => {
    if (!activeId) return -1;
    return honorCertificates.findIndex((x) => x.id === activeId);
  }, [activeId]);

  const active = activeIndex >= 0 ? honorCertificates[activeIndex] : null;

  useEffect(() => {
    const hash = window.location.hash ? window.location.hash.slice(1) : '';
    if (!hash) return;
    const exists = honorCertificates.some((x) => x.id === hash);
    if (exists) setActiveId(hash);
  }, []);

  useEffect(() => {
    if (!active) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveId(null);
        return;
      }
      if (e.key === 'ArrowRight') {
        const next = honorCertificates[(activeIndex + 1) % honorCertificates.length];
        setActiveId(next.id);
      }
      if (e.key === 'ArrowLeft') {
        const prev = honorCertificates[(activeIndex - 1 + honorCertificates.length) % honorCertificates.length];
        setActiveId(prev.id);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [active, activeIndex]);

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen bg-cyber-dark text-ink">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">荣誉资质</span>
          </h1>
          <p className="text-lg text-muted max-w-3xl mx-auto leading-relaxed">
            心有翼，境无界。翼界科技依托科技创新与跨领域合作，在自然保护地精细化管理领域深耕细作，
            荣获多项国家级与省级权威认证。
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="glass-card p-6 text-center hover:bg-ink/5 transition-colors duration-300 group">
              <div className="w-12 h-12 mx-auto bg-brand-primary/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-6 h-6 text-brand-primary" />
              </div>
              <div className="text-3xl font-bold text-ink mb-1">
                {stat.value}<span className="text-sm font-normal text-muted ml-1">{stat.unit}</span>
              </div>
              <div className="text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {honorCertificates.map((cert) => (
            <button
              key={cert.id}
              type="button"
              onClick={() => setActiveId(cert.id)}
              className="glass-card overflow-hidden group hover:border-brand-primary/50 transition-all duration-500 text-left"
              aria-label={`查看证书：${cert.title}`}
            >
              <CertificateThumb cert={cert} />
              <div className="p-6">
                <h3 className="text-xl font-bold text-ink mb-2 group-hover:text-brand-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`证书预览：${active.title}`}
          onClick={() => setActiveId(null)}
        >
          <div
            className="w-full max-w-6xl max-h-[90vh] glass-card overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-ink/10">
              <div className="min-w-0">
                <div className="text-sm font-semibold text-ink truncate">{active.title}</div>
                <div className="text-xs text-muted/70 truncate">{active.description}</div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="btn-outline px-4 py-2"
                  onClick={() => setActiveId(honorCertificates[(activeIndex - 1 + honorCertificates.length) % honorCertificates.length].id)}
                >
                  上一张
                </button>
                <button
                  type="button"
                  className="btn-outline px-4 py-2"
                  onClick={() => setActiveId(honorCertificates[(activeIndex + 1) % honorCertificates.length].id)}
                >
                  下一张
                </button>
                <button type="button" className="btn-primary px-4 py-2" onClick={() => setActiveId(null)}>
                  关闭
                </button>
              </div>
            </div>

            <div className="bg-ink/5 p-4 overflow-auto max-h-[calc(90vh-64px)]">
              <img
                src={active.image1400}
                alt={active.title}
                className="w-full h-auto rounded-2xl border border-ink/10 shadow-[var(--shadow-2)]"
              />
              <a
                href={active.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 block text-xs text-muted/60 hover:text-muted/80 transition-colors"
              >
                来源：{active.sourceUrl}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Honor;
