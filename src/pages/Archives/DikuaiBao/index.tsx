import React from 'react';
import { Map, ArrowRight, LayoutDashboard, Layers, FileSpreadsheet } from 'lucide-react';
import VTLink from '../../../components/VTLink';
import hero1400 from '../../../assets/ejdrone/optimized/ejdrone_6f3d473b8444_1400w.webp';

const DikuaiBao = () => {
  return (
    <div className="min-h-screen bg-surface">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-pattern opacity-40" />

      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero1400} alt="" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface/90 to-surface" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-brand-accent/25 mb-6">
            <Map size={16} className="text-brand-accent" />
            <span className="text-sm text-muted/80">档案中心 · 工具</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-5">
            <span className="text-ink/85">地块宝</span>
          </h1>
          <p className="text-muted/75 text-lg md:text-xl max-w-3xl leading-relaxed">
            智能农地管理工具，面向地块与空间数据的快速记录、汇总与管理，支持外业协作与数据沉淀。
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Layers size={20} />, title: '地块管理', desc: '面向地块边界、属性与状态的统一管理。' },
              { icon: <LayoutDashboard size={20} />, title: '协同作业', desc: '支持外业记录与团队协作的作业流程。' },
              { icon: <FileSpreadsheet size={20} />, title: '成果汇总', desc: '产出标准化表格与可用数据资产。' },
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
              <span>咨询与试用</span>
              <ArrowRight size={18} />
            </VTLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DikuaiBao;
