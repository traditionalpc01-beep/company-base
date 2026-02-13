import React from 'react';
import { Handshake, ArrowRight } from 'lucide-react';
import VTLink from '../VTLink';

const PartnersPreview: React.FC = () => {
  const partners = [
    '广西忻城乐滩国家湿地公园',
    '崇左白头叶猴保护区',
    '弄岗国家级保护区',
    '猫儿山保护区',
    '十万大山保护区',
    '大明山保护区',
  ];

  return (
    <section className="relative py-16 overflow-hidden bg-surface">
      <div className="absolute inset-0 grid-pattern opacity-25" />
      <div className="absolute -bottom-24 left-1/2 h-80 w-[900px] -translate-x-1/2 rounded-full bg-warm/10 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-brand-primary/25 mb-6">
              <Handshake size={16} className="text-brand-primary" />
              <span className="text-sm text-muted/80">合作伙伴</span>
            </div>
            <h2 className="section-title text-ink">
              <span className="text-ink/85">在绿水青山的路上</span>
              <span className="eco-gradient-text">同行</span>
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-brand-primary via-warm to-transparent rounded-full mt-4" />
          </div>
          <div className="md:col-span-5">
            <p className="text-muted/75 leading-relaxed">
              感谢在绿水青山的路上，有您们的合作与支持！我们期待与更多伙伴携手前行，共同守护自然生态。
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {partners.map((name) => (
            <div
              key={name}
              className="px-4 py-2 rounded-full border border-border bg-surface-2 text-sm text-muted/80 hover:border-brand-primary/30 hover:text-ink transition-colors motion-fade-up"
            >
              {name}
            </div>
          ))}
        </div>

        <div className="mt-8">
          <VTLink to="/partners" className="btn-outline inline-flex items-center gap-2">
            <span>查看合作伙伴</span>
            <ArrowRight size={18} />
          </VTLink>
        </div>
      </div>
    </section>
  );
};

export default PartnersPreview;
