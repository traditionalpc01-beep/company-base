import React from 'react';
import { ArrowRight, Newspaper, Sparkles } from 'lucide-react';
import VTLink from '../../components/VTLink';

const News = () => {
  const items = [
    {
      title: '保护区信息化管理系统',
      desc: '构建保护地生物多样性、空间数据和社区数据等多源数据中心，有效利用红外相机、无人机等监测设备，支撑保护地开展各项业务工作。',
      tag: '客户案例',
    },
    {
      title: '翼查记和翼地巡',
      desc: '满足野外快速巡护调查，智能统计分析保护地的实际巡护成效和覆盖范围。',
      tag: '产品动态',
    },
    {
      title: '自然脉搏',
      desc: '以小程序平台为载体，建成自然保护地自然教育导赏、公众参与式监测、导赏员管理等功能于一体的管理和解说体系。',
      tag: '自然教育',
    },
  ];

  return (
    <div className="min-h-screen bg-surface">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-pattern opacity-40" />
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-brand-accent/25 mb-6">
              <Newspaper size={16} className="text-brand-accent" />
              <span className="text-sm text-muted/80">最新动态</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-ink mb-5">
              <span className="text-ink/85">资讯与</span>
              <span className="tech-gradient-text">案例</span>
            </h1>
            <p className="text-muted/75 text-lg max-w-3xl mx-auto leading-relaxed">
              记录我们在自然保护地精细化管理、空地协同巡检、信息化建设与自然教育中的最新进展与案例。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {items.map((x) => (
              <div key={x.title} className="feature-card">
                <div className="flex items-center justify-between gap-4">
                  <div className="text-xs text-muted/60 px-3 py-1 rounded-full bg-surface-2 border border-border">
                    {x.tag}
                  </div>
                  <Sparkles size={16} className="text-warm/80" />
                </div>
                <div className="mt-4 text-lg font-semibold text-ink/90 leading-snug">{x.title}</div>
                <div className="mt-3 text-sm text-muted/75 leading-relaxed">{x.desc}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <VTLink to="/contact" className="btn-primary inline-flex items-center gap-2">
              <span>获取最新资料</span>
              <ArrowRight size={18} />
            </VTLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
