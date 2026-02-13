import React from 'react';
import { Plane, TrendingUp, Leaf, Cpu, Database, Brain, Sparkles } from 'lucide-react';
import VTLink from '../VTLink';
import airGroundImg from '../../assets/ejdrone/optimized/ejdrone_9eabfef6736b_900w.webp';
import economyImg from '../../assets/ejdrone/optimized/ejdrone_93bbce147373_900w.webp';
import educationImg from '../../assets/ejdrone/optimized/ejdrone_ceb789288bb8_900w.webp';

const Services: React.FC = () => {
  const services = [
    {
      title: '空地协同',
      subtitle: 'Air-Ground Coordination',
      description: '打造智能分析的高效巡检体系，替代传统人工巡检模式',
      icon: <Plane size={32} />,
      features: [
        { text: '智能分析算法', icon: <Brain size={16} /> },
        { text: '无人值守感知', icon: <Cpu size={16} /> },
        { text: '实时数据传输', icon: <Database size={16} /> },
      ],
      image: airGroundImg,
      accent: 'text-brand-primary',
      badge: 'bg-brand-primary/12',
      line: 'bg-brand-primary/40',
      link: '/drone_service',
      cta: '查看无人机服务',
    },
    {
      title: '低空经济服务',
      subtitle: 'Low-Altitude Economy',
      description: '多样性的技术解决方案，强大的运营运维团队',
      icon: <TrendingUp size={32} />,
      features: [
        { text: '大疆行业合作', icon: <Sparkles size={16} /> },
        { text: '全天候支持', icon: <Database size={16} /> },
        { text: '定制化方案', icon: <Cpu size={16} /> },
      ],
      image: economyImg,
      accent: 'text-brand-accent',
      badge: 'bg-brand-accent/12',
      line: 'bg-brand-accent/40',
      link: '/drone_service',
      cta: '了解低空经济服务',
    },
    {
      title: '自然教育',
      subtitle: 'Nature Education',
      description: '提升保护地影响力，构建全面丰富的解说体系',
      icon: <Leaf size={32} />,
      features: [
        { text: '内容策划', icon: <Brain size={16} /> },
        { text: '场域打造', icon: <Database size={16} /> },
        { text: '平台支撑', icon: <Cpu size={16} /> },
      ],
      image: educationImg,
      accent: 'text-warm',
      badge: 'bg-warm/12',
      line: 'bg-warm/40',
      link: '/archives/sheng-wu-quan',
      cta: '进入自然教育体系',
    },
  ];

  return (
    <section id="services" className="py-16 relative overflow-hidden bg-cyber-darker">
      <div className="absolute inset-0 grid-pattern opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-brand-primary/25 mb-6">
              <Sparkles size={16} className="text-brand-primary" />
              <span className="text-sm text-muted/80">核心服务</span>
            </div>
            
            <h2 className="section-title text-ink">
              <span className="text-ink/80">科技</span>
              <span className="tech-gradient-text">赋能</span>
              <span className="text-ink/80">自然保护</span>
            </h2>
            <div className="w-24 h-px bg-brand-primary/40 rounded-full mb-4"></div>
          </div>
          <div className="md:col-span-5 md:pb-2">
            <p className="text-muted/75 leading-relaxed">
              我们提供全方位的技术支持与服务，覆盖巡护、数据与宣教三个方向，让保护地从"能看见"走向"能治理"。 
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 staggered-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative motion-fade-up"
            >
              <VTLink to={service.link} className="feature-card h-full relative overflow-hidden block motion-sheen">
                <div className={`absolute top-0 left-0 right-0 h-1 ${service.line}`}></div>

                <div className="relative z-10">
                  <div className="relative mb-6 overflow-hidden rounded-2xl border border-ink/10">
                    <img src={service.image} alt="" className="h-40 w-full object-cover" loading="lazy" />
                    <div className="absolute inset-x-0 top-0 h-40 bg-cyber-darker/15" />
                  </div>

                  <div className={`inline-flex p-4 rounded-2xl ${service.badge} mb-6 motion-float`}>
                    <span className={service.accent}>{service.icon}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-ink mb-1 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-muted/60 mb-4 font-english tracking-wider">{service.subtitle}</p>
                  
                  <p className="text-muted/75 text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-ink/80">
                        <span className={service.accent}>{feature.icon}</span>
                        <span className="text-sm">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-ink/85">
                    <span>{service.cta}</span>
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-px bg-ink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </VTLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
