import React from 'react';
import { ArrowRight, Send } from 'lucide-react';
import VTLink from '../VTLink';
import { siteContent } from '../../content';

const ContactCTA: React.FC = () => {
  return (
    <section className="relative py-16 overflow-hidden bg-cyber-darker">
      <div className="absolute inset-0 grid-pattern opacity-25" />
      <div className="absolute inset-0 bg-noise opacity-[0.03]" />
      <div className="absolute -top-20 right-1/3 w-72 h-72 rounded-full bg-brand-primary/12 blur-3xl" />
      <div className="absolute -bottom-24 left-1/4 w-96 h-96 rounded-full bg-brand-accent/10 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="feature-card max-w-5xl mx-auto motion-sheen">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="min-w-0">
              <div className="inline-flex items-center gap-2 text-sm text-muted/70">
                <Send size={16} className="text-brand-primary motion-float" />
                合作咨询
              </div>
              <div className="mt-3 text-3xl md:text-4xl font-semibold text-ink/90 tracking-tight">
                把自然保护变成更酷的工作
              </div>
              <div className="mt-4 text-muted/75 leading-relaxed max-w-2xl">
                电话 {siteContent.contact.phone}，邮箱 {siteContent.contact.email}。我们支持空地协同巡检、宣教体系建设与保护地信息化系统定制开发。
              </div>
            </div>

            <div className="shrink-0 flex gap-3">
              <VTLink to="/contact" className="btn-primary inline-flex items-center gap-2">
                <span>联系我们</span>
                <ArrowRight size={18} />
              </VTLink>
              <VTLink to="/solutions" className="btn-outline inline-flex items-center gap-2">
                <span>查看方案</span>
                <ArrowRight size={18} />
              </VTLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;

