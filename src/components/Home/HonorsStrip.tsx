import React from 'react';
import { Award, ArrowRight, BadgeCheck, Building2, ShieldCheck, FileText, TrendingUp } from 'lucide-react';
import VTLink from '../VTLink';

const HonorsStrip: React.FC = () => {
  // 与Honor页面一致的统计数据
  const stats = [
    { k: '33', v: '累计申请专利', icon: FileText },
    { k: '14', v: '授权专利', icon: BadgeCheck },
    { k: '12', v: '软件著作权', icon: FileText },
    { k: '21', v: '注册商标', icon: ShieldCheck },
  ];

  // 与Honor页面关联的荣誉列表
  const highlights = [
    { 
      icon: <BadgeCheck size={20} />, 
      title: '国家高新技术企业', 
      desc: '国家级高新技术企业认定',
      certId: 'high-tech-enterprise'
    },
    { 
      icon: <Building2 size={20} />, 
      title: '双软企业', 
      desc: '软件产品与软件企业双认证',
      certId: 'software-enterprise'
    },
    { 
      icon: <ShieldCheck size={20} />, 
      title: '守合同重信用企业', 
      desc: '诚信经营与规范管理',
      certId: 'credit-enterprise'
    },
    { 
      icon: <Award size={20} />, 
      title: '知识产权优势企业', 
      desc: '自治区知识产权优势企业培育单位',
      certId: 'ip-advantage'
    },
  ];

  return (
    <section className="relative py-16 overflow-hidden bg-surface">
      <div className="absolute inset-0 grid-pattern opacity-25" />
      <div className="absolute -top-24 left-1/2 h-80 w-[900px] -translate-x-1/2 rounded-full bg-brand-primary/12 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* 标题区域 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-8">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-warm/25 mb-6">
              <Award size={16} className="text-warm" />
              <span className="text-sm text-muted/80">荣誉资质</span>
            </div>
            <h2 className="section-title text-ink">
              <span className="text-ink/85">权威</span>
              <span className="text-gradient">认证</span>
              <span className="text-ink/85">与可信合规</span>
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-warm via-brand-primary to-transparent rounded-full mt-4" />
          </div>
          <div className="lg:col-span-5">
            <p className="text-muted/75 leading-relaxed">
              先后认定为科技型中小企业、国家高新技术企业、双软企业和"守合同重信用"企业等，并获民航局颁发的《民用无人驾驶航空器经营许可证》。
            </p>
          </div>
        </div>

        {/* 内容区域 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* 左侧荣誉列表 */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full staggered-grid">
              {highlights.map((item) => (
                <VTLink 
                  key={item.title} 
                  to={`/archives/honor#${item.certId}`}
                  className="feature-card h-full group cursor-pointer motion-sheen"
                >
                  <div className="flex items-start gap-4">
                    <div className="icon-box text-brand-primary flex-shrink-0 group-hover:shadow-glow transition-shadow motion-float">
                      {item.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-lg font-semibold text-ink/90 group-hover:text-brand-primary transition-colors">
                        {item.title}
                      </div>
                      <div className="text-sm text-muted/70 mt-1">{item.desc}</div>
                    </div>
                  </div>
                </VTLink>
              ))}
            </div>
          </div>

          {/* 右侧知识产权概览 - 修复亮色模式配色 */}
          <div className="lg:col-span-4">
            <div className="feature-card h-full flex flex-col motion-sheen">
              <div className="flex items-center gap-2 mb-5">
                <TrendingUp size={18} className="text-brand-accent" />
                <span className="text-sm font-medium text-ink/85">知识产权概览</span>
              </div>
              
              <div className="flex-grow">
                <div className="grid grid-cols-2 gap-3">
                  {stats.map((x) => (
                    <div 
                      key={x.v} 
                      className="rounded-xl border border-border bg-surface-2/80 px-4 py-4 hover:border-brand-primary/30 hover:shadow-glow-sm transition-all group motion-fade-up"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary motion-float">
                          <x.icon size={14} />
                        </div>
                        <div className="text-xl font-bold tech-gradient-text">{x.k}</div>
                      </div>
                      <div className="text-xs text-muted/70">{x.v}</div>
                    </div>
                  ))}
                </div>
              </div>

              <VTLink
                to="/archives/honor"
                className="mt-6 inline-flex items-center justify-center gap-2 btn-primary group"
              >
                <span>查看全部荣誉资质</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </VTLink>
            </div>
          </div>
        </div>

        {/* 底部快速统计 - 与Honor页面保持一致 */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 staggered-grid">
          {[
            { label: '累计申请专利', value: '33', unit: '项' },
            { label: '获得软件著作权', value: '12', unit: '项' },
            { label: '注册商标', value: '21', unit: '项' },
            { label: '知识产权总计', value: '61', unit: '项' },
          ].map((stat, index) => (
            <div 
              key={index} 
              className="glass-card p-4 text-center hover:border-brand-primary/30 transition-all group motion-fade-up"
            >
              <div className="text-2xl font-bold text-ink mb-1 group-hover:text-brand-primary transition-colors">
                {stat.value}
                <span className="text-xs font-normal text-muted ml-1">{stat.unit}</span>
              </div>
              <div className="text-xs text-muted/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HonorsStrip;
