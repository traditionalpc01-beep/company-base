import React from 'react';
import { Plane, TrendingUp, Leaf, Cpu, Database, Brain, ArrowRight, Sparkles } from 'lucide-react';
import VTLink from '../VTLink';

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
      gradient: 'from-brand-primary via-brand-accent to-warm',
      link: '/drone_service',
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
      gradient: 'from-brand-accent via-warm to-brand-primary',
      link: '/drone_service',
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
      gradient: 'from-warm via-brand-primary to-brand-accent',
      link: '/archives/sheng-wu-quan',
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-cyber-darker">
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-primary/6 rounded-full blur-3xl -translate-x-1/2"></div>
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-brand-accent/6 rounded-full blur-3xl translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-brand-primary/25 mb-6">
              <Sparkles size={16} className="text-brand-primary" />
              <span className="text-sm text-muted/80">核心服务</span>
            </div>
            
            <h2 className="section-title text-white">
              <span className="text-white/80">科技</span>
              <span className="tech-gradient-text">赋能</span>
              <span className="text-white/80">自然保护</span>
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-brand-primary via-brand-accent to-transparent rounded-full mb-4"></div>
          </div>
          <div className="md:col-span-5 md:pb-2">
            <p className="text-muted/75 leading-relaxed">
              我们提供全方位的技术支持与服务，覆盖巡护、数据与宣教三个方向，让保护地从"能看见"走向"能治理"。 
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative ${
                index === 0
                  ? 'md:col-span-5'
                  : index === 1
                    ? 'md:col-span-4 md:col-start-7'
                    : 'md:col-span-5 md:col-start-3'
              }`}
            >
              <div className="feature-card h-full relative overflow-hidden">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient}`}></div>
                
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${service.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500`}></div>

                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 group-hover:shadow-glow transition-shadow duration-300`}>
                    <span className="text-white">{service.icon}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-ink transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-muted/60 mb-4 font-english tracking-wider">{service.subtitle}</p>
                  
                  <p className="text-muted/75 text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-ink/80">
                        <span className="text-brand-primary">{feature.icon}</span>
                        <span className="text-sm">{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  <VTLink
                    to={service.link}
                    className="inline-flex items-center gap-2 text-ink/85 hover:text-ink transition-colors group/btn"
                  >
                    <span className="text-sm font-medium">了解更多</span>
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </VTLink>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
