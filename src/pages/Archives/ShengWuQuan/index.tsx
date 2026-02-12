import React from 'react';
import { Mic2, ArrowRight, Waves, MapPinned, Users } from 'lucide-react';
import VTLink from '../../../components/VTLink';
import hero1400 from '../../../assets/ejdrone/optimized/ejdrone_713c50d88180_1400w.webp';

const ShengWuQuan = () => {
  return (
    <div className="min-h-screen bg-surface">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-pattern opacity-40" />

      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero1400} alt="" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface/90 to-surface" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-warm/25 mb-6">
            <Mic2 size={16} className="text-warm" />
            <span className="text-sm text-muted/80">档案中心 · 产品</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-5">
            <span className="text-ink/85">声物圈</span>
          </h1>
          <p className="text-muted/75 text-lg md:text-xl max-w-3xl leading-relaxed">
            一个公众参与的全国自然声音数据采集平台
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Users size={20} />, title: '公众参与', desc: '面向公众开放参与式采集与共创。' },
              { icon: <Waves size={20} />, title: '声音数据', desc: '结构化采集与管理自然声音数据。' },
              { icon: <MapPinned size={20} />, title: '在地记录', desc: '结合位置与场景，沉淀可复用的样本资产。' },
            ].map((x) => (
              <div key={x.title} className="feature-card">
                <div className="flex items-start gap-4">
                  <div className="icon-box text-warm">{x.icon}</div>
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
              <span>获取演示与资料</span>
              <ArrowRight size={18} />
            </VTLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShengWuQuan;
