import React from 'react';
import { Map, ExternalLink } from 'lucide-react';
import VTLink from '../../components/VTLink';
import { siteContent } from '../../content';

const Sitemap = () => {
  const sections = [
    {
      title: '站点导航',
      items: siteContent.nav.map((x) => ({ label: x.label, to: x.to })),
    },
    {
      title: '档案中心',
      items: [
        { label: '档案中心首页', to: '/archives' },
        { label: '荣誉资质', to: '/archives/honor' },
        { label: '企业认证', to: '/archives/certification' },
        { label: '声物圈', to: '/archives/sheng-wu-quan' },
        { label: '司风系统', to: '/archives/sifeng' },
        { label: '网格巡检系统', to: '/archives/grid' },
        { label: '地块宝', to: '/archives/dikuaibao' },
      ],
    },
    {
      title: '法律与信息',
      items: [
        { label: '隐私政策', to: '/privacy' },
        { label: '使用条款', to: '/terms' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-surface">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-pattern opacity-40" />
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-brand-primary/25 mb-6">
              <Map size={16} className="text-brand-primary" />
              <span className="text-sm text-muted/80">网站地图</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-ink mb-5">
              <span className="text-ink/85">快速</span>
              <span className="text-gradient">导航</span>
            </h1>
            <p className="text-muted/75 text-lg max-w-2xl mx-auto leading-relaxed">
              站点主要页面入口汇总，便于快速定位所需内容。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sections.map((s) => (
              <div key={s.title} className="feature-card">
                <div className="text-lg font-semibold text-ink/90">{s.title}</div>
                <div className="mt-4 space-y-2">
                  {s.items.map((it) => (
                    <VTLink
                      key={`${s.title}-${it.to}`}
                      to={it.to}
                      className="flex items-center justify-between gap-3 px-3 py-2 rounded-xl border border-border bg-surface-2 hover:border-brand-primary/25 hover:bg-surface-3 transition-colors"
                    >
                      <span className="text-sm text-ink/80">{it.label}</span>
                      <ExternalLink size={14} className="text-muted/60" />
                    </VTLink>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sitemap;
