import React from 'react';
import { LayoutGrid, ArrowRight, Video, Satellite, Repeat, ShieldCheck } from 'lucide-react';
import VTLink from '../../../components/VTLink';
import hero1400 from '../../../assets/ejdrone/optimized/ejdrone_f3662cfd1dfc_1400w.webp';

const GridInspection = () => {
  return (
    <div className="min-h-screen bg-surface">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-pattern opacity-40" />

      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero1400} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface/90 to-surface" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-brand-accent/25 mb-6">
            <LayoutGrid size={16} className="text-brand-accent" />
            <span className="text-sm text-muted/80">档案中心 · 系统</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-5">
            <span className="text-ink/85">网格化无人机巡检系统</span>
          </h1>

          <p className="text-muted/75 text-lg md:text-xl max-w-4xl leading-relaxed">
            一款综合性的无人机巡检全流程治理管理系统，面向自然保护地巡护监测任务，支持网格化管理、自动分析与事件回报，形成巡护闭环。
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: <Video size={20} />, title: '视频巡检', desc: '高频巡检与现场回传。' },
              { icon: <Satellite size={20} />, title: '遥感监测', desc: '多源遥感与影像成果产出。' },
              { icon: <Repeat size={20} />, title: '数据中继', desc: '任务数据收集、回收与中继。' },
              { icon: <ShieldCheck size={20} />, title: '治理闭环', desc: '事件上报、处置、复盘可追溯。' },
            ].map((x) => (
              <div key={x.title} className="feature-card">
                <div className="flex items-start gap-4">
                  <div className="icon-box text-brand-accent">{x.icon}</div>
                  <div>
                    <div className="text-base font-semibold text-ink/90">{x.title}</div>
                    <div className="text-sm text-muted/70 mt-2 leading-relaxed">{x.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <VTLink to="/contact" className="btn-primary inline-flex items-center gap-2">
              <span>咨询方案与试用</span>
              <ArrowRight size={18} />
            </VTLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GridInspection;
