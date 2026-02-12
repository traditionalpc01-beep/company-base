import React from 'react';
import { Leaf, Target, Eye, Heart, Users, Award, MapPin, ArrowRight, Plane, Cpu, Shield, Sprout, Bird, Globe } from 'lucide-react';
import VTLink from '../../components/VTLink';
import { siteContent } from '../../content';

const About: React.FC = () => {
  const values = [
    {
      icon: <Leaf size={28} />,
      title: '生态优先',
      description: '以自然生态保护为核心使命，用科技守护绿水青山',
      color: 'plant',
    },
    {
      icon: <Cpu size={28} />,
      title: '科技创新',
      description: '持续投入研发，用技术驱动自然保护方式变革',
      color: 'tech',
    },
    {
      icon: <Users size={28} />,
      title: '合作共赢',
      description: '与政府、保护地、企业携手，共建生态保护生态圈',
      color: 'wildlife',
    },
    {
      icon: <Heart size={28} />,
      title: '专业服务',
      description: '以客户需求为导向，提供精细化、专业化服务',
      color: 'brand',
    },
  ];

  const milestones = [
    { year: '2018', title: '公司成立', description: '翼界科技在广西南宁正式成立' },
    { year: '2019', title: '高新技术企业', description: '获得国家高新技术企业认定' },
    { year: '2020', title: '产品发布', description: '翼查记、翼地巡等产品上线运营' },
    { year: '2021', title: '规模扩展', description: '服务保护地突破50个，覆盖8省份' },
    { year: '2022', title: '战略合作', description: '与大疆行业应用建立战略合作关系' },
    { year: '2023', title: '持续发展', description: '服务保护地突破80个，覆盖12省份' },
    { year: '2024', title: '资质升级', description: '获得测绘资质乙级认证，服务突破100个保护地' },
    { year: '2025', title: 'AI创新', description: '无人机AI识别专利获授权，知识产权达61项' },
  ];

  const team = [
    {
      title: '研发团队',
      count: '60+',
      icon: <Cpu size={24} />,
      description: '无人机、软件、AI算法研发',
      color: 'tech',
    },
    {
      title: '外业团队',
      count: '30+',
      icon: <Plane size={24} />,
      description: '持证飞手，专业巡检服务',
      color: 'wildlife',
    },
    {
      title: '服务团队',
      count: '20+',
      icon: <Users size={24} />,
      description: '客户服务、技术支持',
      color: 'plant',
    },
  ];

  const stats = [
    { value: '100+', label: '服务保护地', icon: <Globe size={20} /> },
    { value: '14', label: '覆盖省份', icon: <MapPin size={20} /> },
    { value: '61', label: '知识产权', icon: <Award size={20} /> },
    { value: '110+', label: '专业团队', icon: <Users size={20} /> },
  ];

  const businessAreas = [
    {
      icon: <Bird size={32} />,
      title: '动物保护',
      subtitle: 'Wildlife Conservation',
      description: '运用无人机技术开展野生动物监测、栖息地调查、迁徙路线追踪，为珍稀濒危物种保护提供科学数据支撑',
      color: 'wildlife',
      features: ['野生动物监测', '栖息地评估', '迁徙路线追踪', '种群数量调查'],
    },
    {
      icon: <Sprout size={32} />,
      title: '植物保护',
      subtitle: 'Plant Protection',
      description: '通过遥感监测和AI识别技术，开展植被覆盖监测、珍稀植物调查、生态系统健康评估',
      color: 'plant',
      features: ['植被覆盖监测', '珍稀植物调查', '生态系统评估', '林业资源调查'],
    },
    {
      icon: <Cpu size={32} />,
      title: '智慧保护地',
      subtitle: 'Smart Protected Area',
      description: '构建空天地一体化监测网络，实现保护地数字化、智能化管理，提升保护效能',
      color: 'tech',
      features: ['空天地监测', '智能巡护', '数据分析', '指挥调度'],
    },
  ];

  const getColorClasses = (color: string) => {
    const classes: Record<string, { bg: string; text: string; border: string; shadow: string }> = {
      brand: {
        bg: 'bg-brand-primary/10',
        text: 'text-brand-primary',
        border: 'border-brand-primary/30',
        shadow: 'shadow-glow',
      },
      wildlife: {
        bg: 'bg-wildlife/10',
        text: 'text-wildlife',
        border: 'border-wildlife/30',
        shadow: 'shadow-glow-wildlife',
      },
      plant: {
        bg: 'bg-plant/10',
        text: 'text-plant',
        border: 'border-plant/30',
        shadow: 'shadow-glow-plant',
      },
      tech: {
        bg: 'bg-brand-accent/10',
        text: 'text-brand-accent',
        border: 'border-brand-accent/30',
        shadow: 'shadow-glow-accent',
      },
    };
    return classes[color] || classes.brand;
  };

  return (
    <div className="min-h-screen bg-cyber-dark">
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-brand-primary/5 to-transparent pointer-events-none" />
      
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-brand-primary/25 mb-6">
                <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                <span className="text-sm text-muted/80">关于我们</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="eco-gradient-text">心有翼</span>
                <span className="text-white">，</span>
                <span className="tech-gradient-text">境无界</span>
              </h1>
              <p className="text-lg md:text-xl text-muted/75 max-w-2xl leading-relaxed mb-8">
                依托科技创新与跨领域合作，提供自然保护地创新性和精细化管理解决方案，
                让自然生态更美好，做客户最值得信赖的保护地精细化管理服务提供商。
              </p>
              <p className="text-base text-muted/70 max-w-2xl leading-relaxed">
                让自然保护成为最酷的工作。
              </p>
            </div>
            
            <div className="md:col-span-5">
              <div className="glass-card p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-brand-primary/10 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <div className="text-sm text-muted/70 mb-4">公司数据</div>
                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center p-3 rounded-xl bg-white/5">
                        <div className={`${getColorClasses(['brand', 'wildlife', 'plant', 'tech'][index]).text} mb-2 flex justify-center`}>
                          {stat.icon}
                        </div>
                        <div className="text-2xl md:text-3xl font-bold text-gradient">
                          {stat.value}
                        </div>
                        <div className="text-xs text-muted/60 mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-cyber-darker">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              业务领域
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-brand-primary to-transparent mx-auto mb-4" />
            <p className="text-muted/75 max-w-2xl mx-auto">
              覆盖动保、植保、智慧保护地三大核心业务领域
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {businessAreas.map((area, index) => {
              const colors = getColorClasses(area.color);
              return (
                <div
                  key={index}
                  className={`glass-card p-6 md:p-8 group hover:${colors.border} transition-all`}
                >
                  <div className={`w-16 h-16 rounded-2xl ${colors.bg} flex items-center justify-center mb-6 ${colors.text} group-hover:${colors.shadow} transition-shadow`}>
                    {area.icon}
                  </div>
                  <div className="text-xs text-muted/60 mb-1">{area.subtitle}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{area.title}</h3>
                  <p className="text-sm text-muted/75 leading-relaxed mb-6">
                    {area.description}
                  </p>
                  <ul className="space-y-2">
                    {area.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 text-sm text-muted/70">
                        <span className={`w-1.5 h-1.5 rounded-full ${colors.text.replace('text-', 'bg-')}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                企业愿景
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary flex-shrink-0">
                    <Eye size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">愿景</h3>
                    <p className="text-muted/75 leading-relaxed">
                      让自然生态更美好，做客户最值得信赖的保护地精细化管理服务提供商。
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent flex-shrink-0">
                    <Target size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">使命</h3>
                    <p className="text-muted/75 leading-relaxed">
                      依托科技创新与跨领域合作，提供自然保护地创新性和精细化管理解决方案。
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-warm/10 flex items-center justify-center text-warm flex-shrink-0">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">价值观</h3>
                    <p className="text-muted/75 leading-relaxed">
                      科技创新、生态优先、合作共赢、专业服务。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="glass-card p-8 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-accent/10 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <Leaf size={48} className="text-brand-primary mb-6 opacity-60" />
                  <blockquote className="text-xl md:text-2xl text-white font-light leading-relaxed mb-4">
                    "心有翼，境无界"
                  </blockquote>
                  <p className="text-muted/70">
                    我们相信，科技可以让自然保护变得更高效、更智能、更有趣。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-cyber-darker">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              核心价值观
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-brand-primary to-transparent mx-auto" />
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const colors = getColorClasses(value.color);
              return (
                <div
                  key={index}
                  className={`glass-card p-6 text-center group hover:${colors.border} transition-all`}
                >
                  <div className={`w-14 h-14 rounded-2xl ${colors.bg} flex items-center justify-center mx-auto mb-4 ${colors.text} group-hover:${colors.shadow} transition-shadow`}>
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-sm text-muted/70">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              核心团队
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-brand-accent to-transparent mx-auto mb-4" />
            <p className="text-muted/75 max-w-2xl mx-auto">
              专业、敬业、创新的团队，是翼界科技最宝贵的资产
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {team.map((item, index) => {
              const colors = getColorClasses(item.color);
              return (
                <div
                  key={index}
                  className={`glass-card p-6 md:p-8 text-center group hover:${colors.border} transition-all`}
                >
                  <div className={`w-16 h-16 rounded-2xl ${colors.bg} flex items-center justify-center mx-auto mb-4 ${colors.text} group-hover:${colors.shadow} transition-shadow`}>
                    {item.icon}
                  </div>
                  <div className={`text-4xl font-bold ${colors.text} mb-2`}>{item.count}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-muted/70">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-cyber-darker">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              发展历程
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-warm to-transparent mx-auto" />
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-brand-primary/30 via-brand-accent/30 to-wildlife/30 -translate-y-1/2" />
            
            <div className="grid grid-cols-2 md:grid-cols-8 gap-4">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  <div className="glass-card p-4 md:p-6 text-center relative z-10 group hover:border-warm/30 transition-all h-full">
                    <div className="text-2xl font-bold text-warm mb-2">{milestone.year}</div>
                    <h3 className="text-sm font-semibold text-white mb-1">{milestone.title}</h3>
                    <p className="text-xs text-muted/60 hidden md:block">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              办公地点
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-brand-primary to-transparent mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {siteContent.contact.addresses.map((address, index) => (
              <div
                key={index}
                className="glass-card p-6 group hover:border-brand-primary/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                    <MapPin size={20} />
                  </div>
                  <span className="text-lg font-semibold text-white">{address.label}</span>
                </div>
                <p className="text-sm text-muted/75">{address.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-cyber-darker">
        <div className="max-w-4xl mx-auto text-center">
          <Award size={48} className="text-warm mx-auto mb-6 opacity-60" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            加入我们
          </h2>
          <p className="text-muted/75 text-lg mb-8 max-w-2xl mx-auto">
            如果您热爱自然、热爱科技，欢迎加入翼界科技，让我们一起守护绿水青山。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <VTLink to="/contact" className="btn-primary inline-flex items-center gap-2">
              <span>联系我们</span>
              <ArrowRight size={18} />
            </VTLink>
            <VTLink to="/developing" className="btn-secondary inline-flex items-center gap-2">
              <span>了解更多</span>
            </VTLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
