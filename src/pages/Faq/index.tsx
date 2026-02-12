import React from 'react';
import { HelpCircle, Mail, Phone, ShieldCheck, Plane, GraduationCap, Wrench, ArrowRight } from 'lucide-react';
import VTLink from '../../components/VTLink';
import { siteContent } from '../../content';

const Faq = () => {
  const faqs = [
    {
      q: '翼界科技主要提供哪些解决方案？',
      a: '围绕自然保护地精细化管理，提供基于空地协同的无人机巡检解决方案、自然保护地宣教体系建设解决方案，以及自然保护地信息化系统建设与定制开发服务。',
      icon: <ShieldCheck size={18} />,
    },
    {
      q: '无人机巡检包含哪些典型应用场景？',
      a: '包括视频巡检、遥感监测、数据中继等应用场景，并结合无人机数据收集回收与云端物联网能力，提升保护地管理智慧化水平。',
      icon: <Plane size={18} />,
    },
    {
      q: '是否提供培训与外业支持？',
      a: '提供持证培训，并可协助空域申请与设备部署；外业队伍专业可靠，作业流程标准化，同时提供无人机设备保养与配套服务。',
      icon: <GraduationCap size={18} />,
    },
    {
      q: '如何获取更多资料或联系合作？',
      a: `可通过电话 ${siteContent.contact.phone} 或邮箱 ${siteContent.contact.email} 联系我们，我们将根据需求提供方案与资料。`,
      icon: <Phone size={18} />,
    },
  ];

  return (
    <div className="min-h-screen bg-surface">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-pattern opacity-40" />
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-brand-primary/25 mb-6">
              <HelpCircle size={16} className="text-brand-primary" />
              <span className="text-sm text-muted/80">常见问题</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-ink mb-5">
              <span className="text-ink/85">你可能关心的</span>
              <span className="eco-gradient-text">问题</span>
            </h1>
            <p className="text-muted/75 text-lg max-w-2xl mx-auto leading-relaxed">
              围绕服务能力、交付方式与合作流程整理的高频问题。若未覆盖你的场景，欢迎直接联系我们。
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((x) => (
              <details key={x.q} className="glass-card p-6 group open:border-brand-primary/30 transition-colors">
                <summary className="cursor-pointer list-none flex items-start gap-3">
                  <div className="icon-box text-brand-primary shrink-0">{x.icon}</div>
                  <div className="min-w-0">
                    <div className="text-base font-semibold text-ink/90">{x.q}</div>
                    <div className="text-sm text-muted/70 mt-2 leading-relaxed">{x.a}</div>
                  </div>
                </summary>
              </details>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href={`tel:${siteContent.contact.phone}`} className="feature-card hover:border-brand-accent/30">
              <div className="flex items-center gap-3">
                <div className="icon-box text-brand-accent">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-sm text-muted/70">电话</div>
                  <div className="text-base font-semibold text-ink/90">{siteContent.contact.phone}</div>
                </div>
              </div>
            </a>
            <a href={`mailto:${siteContent.contact.email}`} className="feature-card hover:border-warm/30">
              <div className="flex items-center gap-3">
                <div className="icon-box text-warm">
                  <Mail size={18} />
                </div>
                <div className="min-w-0">
                  <div className="text-sm text-muted/70">邮箱</div>
                  <div className="text-base font-semibold text-ink/90 truncate">{siteContent.contact.email}</div>
                </div>
              </div>
            </a>
          </div>

          <div className="mt-10 text-center">
            <VTLink to="/contact" className="btn-outline inline-flex items-center gap-2">
              <Wrench size={18} />
              <span>提交需求</span>
              <ArrowRight size={18} />
            </VTLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
