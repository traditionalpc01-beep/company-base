import React from 'react';
import { BadgeCheck, ArrowRight, ShieldCheck } from 'lucide-react';
import VTLink from '../../../components/VTLink';
import { honorCertificates } from '../../../assets/ejdrone/honors';

const Certification = () => {
  const focus = honorCertificates.filter((x) =>
    ['uav-business-license', 'iso-env-zh', 'iso-ohs-zh', 'iso-ohs-en', 'software-product-certificate'].includes(x.id),
  );

  return (
    <div className="min-h-screen bg-surface">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-pattern opacity-40" />
      <section className="relative pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-brand-primary/25 mb-6">
              <BadgeCheck size={16} className="text-brand-primary" />
              <span className="text-sm text-muted/80">档案中心 · 企业认证</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-ink mb-5">
              <span className="text-ink/85">权威</span>
              <span className="eco-gradient-text">认证</span>
              <span className="text-ink/85">与合规保障</span>
            </h1>
            <p className="text-muted/75 text-lg max-w-3xl mx-auto leading-relaxed">
              以合规为基础开展无人机运营、信息化建设与数据服务，保障项目交付的可靠性与可持续性。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 staggered-grid">
            {[
              { title: '无人机经营资质', desc: '民航局经营许可证与相关资质支撑合规运营。' },
              { title: '体系认证', desc: 'ISO 管理体系认证，强化流程与风险控制。' },
              { title: '软件产品认证', desc: '软件产品证书与软著等能力沉淀。' },
            ].map((x) => (
              <div key={x.title} className="feature-card motion-sheen">
                <div className="flex items-start gap-4">
                  <div className="icon-box text-brand-accent">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <div className="text-base font-semibold text-ink/90">{x.title}</div>
                    <div className="text-sm text-muted/70 mt-2 leading-relaxed">{x.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 staggered-grid">
            {focus.map((cert) => (
              <div key={cert.id} className="glass-card overflow-hidden hover:border-brand-primary/40 transition-colors motion-sheen">
                <div className="relative aspect-[4/3] bg-surface-2">
                  <img
                    src={cert.image900}
                    srcSet={`${cert.image900} 900w, ${cert.image1400} 1400w`}
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    alt={cert.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-lg font-semibold text-ink">{cert.title}</div>
                  <div className="text-sm text-muted/70 mt-2 leading-relaxed">{cert.description}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <VTLink to="/archives/honor" className="btn-outline inline-flex items-center gap-2">
              <span>查看全部荣誉资质</span>
              <ArrowRight size={18} />
            </VTLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certification;
