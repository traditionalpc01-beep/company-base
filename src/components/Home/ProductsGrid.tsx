import React from 'react';
import { Mic2, Radio, LayoutGrid, MapPinned } from 'lucide-react';
import VTLink from '../VTLink';
import ScrollCarousel from '../ui/ScrollCarousel';
import shengwuImg from '../../assets/ejdrone/optimized/ejdrone_6e1b9064cc60_900w.webp';
import sifengImg from '../../assets/ejdrone/optimized/ejdrone_7e4dc17efac3_900w.webp';
import gridImg from '../../assets/ejdrone/optimized/ejdrone_027a307929de_900w.webp';
import toolsImg from '../../assets/ejdrone/optimized/ejdrone_3b8ff1f9c436_900w.webp';

const ProductsGrid: React.FC = () => {
  const items = [
    {
      title: '声物圈',
      desc: '一个公众参与的全国自然声音数据采集平台',
      icon: <Mic2 size={22} />,
      to: '/archives/sheng-wu-quan',
      tone: 'bg-warm/14 text-warm',
      ring: 'hover:border-warm/35',
      image: shengwuImg,
    },
    {
      title: '司风数据回收管理系统',
      desc: '微基站数据回收管理系统，适配复杂地形与弱网场景',
      icon: <Radio size={22} />,
      to: '/archives/sifeng',
      tone: 'bg-brand-primary/14 text-brand-primary',
      ring: 'hover:border-brand-primary/35',
      image: sifengImg,
    },
    {
      title: '网格化无人机巡检系统',
      desc: '无人机巡检全流程治理的综合管理系统',
      icon: <LayoutGrid size={22} />,
      to: '/archives/grid',
      tone: 'bg-brand-accent/14 text-brand-accent',
      ring: 'hover:border-brand-accent/35',
      image: gridImg,
    },
    {
      title: '翼查记与翼地巡',
      desc: '科研监测与巡护调查的野外生产力工具',
      icon: <MapPinned size={22} />,
      to: '/archives',
      tone: 'bg-surface-3 text-ink/80',
      ring: 'hover:border-border/50',
      image: toolsImg,
    },
  ];
  const scrollItems = items.length > 6 ? items : [...items, ...items];

  return (
    <section className="relative py-16 overflow-hidden bg-surface">
      <div className="absolute inset-0 grid-pattern opacity-25" />
      <div className="absolute inset-0 bg-noise opacity-[0.025]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
          <div className="md:col-span-7">
            <h2 className="section-title text-ink">
              <span className="eco-gradient-text">产品档案</span>
              <span className="text-ink/80">与系统能力</span>
            </h2>
            <div className="w-24 h-px bg-brand-primary/40 rounded-full mt-4" />
          </div>
          <div className="md:col-span-5">
            <p className="text-muted/75 leading-relaxed">
              从空地协同到信息化平台，从数据回收到公众参与式监测，形成可复制、可规模化的保护地精细化管理能力栈。
            </p>
          </div>
        </div>

        <ScrollCarousel
          itemWidth={320}
          gap={18}
          autoPlayMode="continuous"
          autoPlaySpeed={20}
          showIndicators={false}
          showArrows={false}
          showProgress={false}
        >
          {scrollItems.map((item, index) => (
            <div 
              key={`${item.title}-${index}`}
              className="flex-shrink-0"
              style={{ width: '320px' }}
            >
              <VTLink
                to={item.to}
                className={`group feature-card block ${item.ring} h-full motion-sheen`}
              >
                <div className="relative mb-5 overflow-hidden rounded-2xl border border-ink/10">
                  <img src={item.image} alt="" className="h-36 w-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-surface/10" />
                </div>
                <div className="flex items-start justify-between gap-6 mb-4">
                  <div className="min-w-0">
                    <div className="text-xl font-semibold text-ink/90">{item.title}</div>
                    <div className="text-sm text-muted/70 mt-2 leading-relaxed">{item.desc}</div>
                  </div>
                  <div className={`shrink-0 w-12 h-12 rounded-2xl border border-border flex items-center justify-center ${item.tone} motion-float`}>
                    {item.icon}
                  </div>
                </div>
              </VTLink>
            </div>
          ))}
        </ScrollCarousel>
      </div>
    </section>
  );
};

export default ProductsGrid;
