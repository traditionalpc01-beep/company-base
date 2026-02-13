import React from 'react';
import { ArrowRight, Newspaper, CalendarDays } from 'lucide-react';
import VTLink from '../VTLink';

const NewsTeaser: React.FC = () => {
  const items = [
    { title: '自然保护地信息化管理系统客户案例更新', date: '更新中', tag: '客户案例' },
    { title: '翼查记与翼地巡能力迭代与外业流程优化', date: '更新中', tag: '产品动态' },
    { title: '空地协同巡检解决方案：视频巡检与遥感监测', date: '更新中', tag: '解决方案' },
  ];

  return (
    <section className="relative py-16 overflow-hidden bg-surface">
      <div className="absolute inset-0 grid-pattern opacity-25" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-brand-accent/25 mb-6">
              <Newspaper size={16} className="text-brand-accent" />
              <span className="text-sm text-muted/80">最新动态</span>
            </div>
            <h2 className="section-title text-ink">
              <span className="text-ink/85">新闻与</span>
              <span className="tech-gradient-text">发布</span>
            </h2>
          </div>

          <VTLink to="/news" className="btn-outline inline-flex items-center gap-2 w-fit">
            <span>查看更多</span>
            <ArrowRight size={18} />
          </VTLink>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 staggered-grid">
          {items.map((x) => (
            <VTLink key={x.title} to="/news" className="feature-card block hover:border-brand-accent/35 group motion-sheen">
              <div className="flex items-center justify-between gap-4">
                <div className="text-xs text-muted/60 px-3 py-1 rounded-full bg-surface-2 border border-border">
                  {x.tag}
                </div>
                <div className="flex items-center gap-2 text-xs text-muted/60 motion-float">
                  <CalendarDays size={14} />
                  {x.date}
                </div>
              </div>
              <div className="mt-4 text-lg font-semibold text-ink/90 leading-snug">
                {x.title}
              </div>
            </VTLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsTeaser;
