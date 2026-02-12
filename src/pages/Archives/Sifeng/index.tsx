import React from 'react';
import { Radio, ArrowRight, WifiOff, Database, ShieldCheck } from 'lucide-react';
import VTLink from '../../../components/VTLink';
import hero1400 from '../../../assets/ejdrone/optimized/ejdrone_98629acd31cb_1400w.webp';

const Sifeng = () => {
  return (
    <div className="min-h-screen bg-surface">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-pattern opacity-40" />

      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero1400} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface/90 to-surface" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-brand-primary/25 mb-6">
            <Radio size={16} className="text-brand-primary" />
            <span className="text-sm text-muted/80">档案中心 · 系统</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-5">
            <span className="text-ink/85">司风数据回收管理系统</span>
          </h1>

          <p className="text-muted/75 text-lg md:text-xl max-w-4xl leading-relaxed">
            面向复杂地形与弱网盲区场景的数据回收系统。在传统生态监测领域，地形复杂、网络覆盖盲区多、基站建设难度大等问题长期存在，数据回收常因网络中断而面临丢失或效率低下的挑战。
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <WifiOff size={20} />, title: '弱网可用', desc: '适配弱网/无网环境的数据暂存与回收。' },
              { icon: <Database size={20} />, title: '数据闭环', desc: '回收、校验、归档与可追溯管理。' },
              { icon: <ShieldCheck size={20} />, title: '可靠运行', desc: '提升外业数据回收的稳定性与安全性。' },
            ].map((x) => (
              <div key={x.title} className="feature-card">
                <div className="flex items-start gap-4">
                  <div className="icon-box text-brand-primary">{x.icon}</div>
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
              <span>咨询部署与试用</span>
              <ArrowRight size={18} />
            </VTLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sifeng;
