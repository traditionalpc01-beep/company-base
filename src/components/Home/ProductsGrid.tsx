import React from 'react';
import { ArrowRight, Mic2, Radio, LayoutGrid, MapPinned } from 'lucide-react';
import VTLink from '../VTLink';

const ProductsGrid: React.FC = () => {
  const items = [
    {
      title: '声物圈',
      desc: '一个公众参与的全国自然声音数据采集平台',
      icon: <Mic2 size={22} />,
      to: '/archives/sheng-wu-quan',
      tone: 'bg-warm/14 text-warm',
      ring: 'hover:border-warm/35',
    },
    {
      title: '司风数据回收管理系统',
      desc: '微基站数据回收管理系统，适配复杂地形与弱网场景',
      icon: <Radio size={22} />,
      to: '/archives/sifeng',
      tone: 'bg-brand-primary/14 text-brand-primary',
      ring: 'hover:border-brand-primary/35',
    },
    {
      title: '网格化无人机巡检系统',
      desc: '无人机巡检全流程治理的综合管理系统',
      icon: <LayoutGrid size={22} />,
      to: '/archives/grid',
      tone: 'bg-brand-accent/14 text-brand-accent',
      ring: 'hover:border-brand-accent/35',
    },
    {
      title: '翼查记与翼地巡',
      desc: '科研监测与巡护调查的野外生产力工具',
      icon: <MapPinned size={22} />,
      to: '/archives',
      tone: 'bg-surface-3 text-ink/80',
      ring: 'hover:border-border/50',
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-surface">
      <div className="absolute inset-0 grid-pattern opacity-25" />
      <div className="absolute inset-0 bg-noise opacity-[0.025]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-7">
            <h2 className="section-title text-ink">
              <span className="eco-gradient-text">产品档案</span>
              <span className="text-ink/80">与系统能力</span>
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-brand-primary via-brand-accent to-transparent rounded-full mt-4" />
          </div>
          <div className="md:col-span-5">
            <p className="text-muted/75 leading-relaxed">
              从空地协同到信息化平台，从数据回收到公众参与式监测，形成可复制、可规模化的保护地精细化管理能力栈。
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {items.map((item, idx) => (
            <VTLink
              key={item.title}
              to={item.to}
              className={`group feature-card block ${item.ring} ${
                idx === 0
                  ? 'md:col-span-5'
                  : idx === 1
                    ? 'md:col-span-4 md:col-start-7'
                    : idx === 2
                      ? 'md:col-span-5 md:col-start-3'
                      : 'md:col-span-4 md:col-start-9'
              }`}
            >
              <div className="flex items-start justify-between gap-6">
                <div className="min-w-0">
                  <div className="text-xl font-semibold text-ink/90">{item.title}</div>
                  <div className="text-sm text-muted/70 mt-2 leading-relaxed">{item.desc}</div>
                </div>
                <div className={`shrink-0 w-12 h-12 rounded-2xl border border-border flex items-center justify-center ${item.tone}`}>
                  {item.icon}
                </div>
              </div>

              <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink/80">
                <span>了解更多</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </div>
            </VTLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;
