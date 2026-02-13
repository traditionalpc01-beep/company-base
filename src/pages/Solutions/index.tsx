import React from 'react';
import { Plane, BookOpen, Database, ArrowRight, CheckCircle, Cpu, MapPin, Users, Sprout, Bird, TreePine } from 'lucide-react';
import VTLink from '../../components/VTLink';

const Solutions: React.FC = () => {
  const solutions = [
    {
      id: 'air-ground',
      icon: <Plane size={40} />,
      title: '空地协同无人机巡检解决方案',
      subtitle: 'Air-Ground Coordination',
      description: '基于空地协同的自然保护地无人机巡检解决方案，打造空天地一体化监测网络体系，实现无人机数据收集回收与云端物联网融合。',
      features: [
        '无人机自动起降，免维护智能网关',
        '实时数据传输与智能分析',
        '标准化作业流程，外业队伍专业可靠',
        '多类成果产出，报告制作规范完整',
      ],
      gradient: 'from-brand-primary to-brand-accent',
      bgGradient: 'from-brand-primary/10 to-brand-accent/5',
      buttonText: '咨询无人机巡检',
      buttonLink: '/drone_service',
      highlight: '无人机巡检',
      stat: '60km²/日',
      statLabel: '日处理能力',
    },
    {
      id: 'education',
      icon: <BookOpen size={40} />,
      title: '自然保护地宣教体系建设解决方案',
      subtitle: 'Nature Education System',
      description: '以在地服务为目标，以当地自然资源为依托，以开展实地调查为支撑，推动保护地自然教育基地建设，提升保护地影响力。标识标牌系统是自然保护地开展宣教工作最基本也是最重要的设施，反映和体现自然保护地的宣教特色、管理水平、服务水平和专业水平。',
      features: [
        '标识标牌系统设计与建设',
        '解说体系：科学性、互动性、易懂性',
        '解说形式：印刷品、展板、数字媒体',
        '平台支撑：社区资源与社会经济调研',
      ],
      gradient: 'from-warm to-brand-primary',
      bgGradient: 'from-warm/10 to-brand-primary/5',
      buttonText: '咨询宣教建设',
      buttonLink: '/contact',
      highlight: '宣教体系',
      stat: '100+',
      statLabel: '服务案例',
    },
    {
      id: 'information',
      icon: <Database size={40} />,
      title: '信息化建设解决方案',
      subtitle: 'Digital Infrastructure',
      description: '自然保护地信息化系统建设解决方案，综合管理系统实现保护地管理智慧化，支撑保护地开展各项业务工作。构建保护地生物多样性、空间数据和社区数据等多源数据中心，有效利用红外相机、无人机等监测设备。',
      features: [
        '翼查记：科研监测、综合考察，地图类型丰富、定制性强',
        '翼地巡：巡护监测、网格管理、自动分析、事件回报',
        '自然脉搏：线上导览、自然教育平台',
        '综合管理：实现保护地管理智慧化',
      ],
      gradient: 'from-brand-accent to-tech-blue',
      bgGradient: 'from-brand-accent/10 to-tech-blue/5',
      buttonText: '咨询信息化建设',
      buttonLink: '/archives',
      highlight: '信息化平台',
      stat: '14',
      statLabel: '覆盖省份',
    },
  ];

  // 动保植保专用配色方案 - 使用自然绿色系
  const wildlifeCases = [
    {
      quote: '保护区信息化管理系统构建保护地生物多样性、空间数据和社区数据等多源数据中心，有效利用红外相机、无人机等监测设备，支撑保护地开展各项业务工作。',
      title: '保护区信息化管理系统',
      icon: <Database size={24} />,
      color: 'from-wildlife to-nature-green',
      bgColor: 'bg-wildlife/10',
      textColor: 'text-wildlife',
      borderColor: 'border-wildlife/30',
    },
    {
      quote: '翼查记和翼地巡满足野外快速巡护调查，智能统计分析保护地的实际巡护成效和覆盖范围，实现野生动物栖息地精准监测。',
      title: '野生动物巡护监测',
      icon: <Bird size={24} />,
      color: 'from-nature-green to-forest-green',
      bgColor: 'bg-nature-green/10',
      textColor: 'text-nature-green',
      borderColor: 'border-nature-green/30',
    },
    {
      quote: '自然脉搏以小程序平台为载体，建成自然保护地自然教育导赏、公众参与式监测、自然教育导赏员管理等功能于一体的管理和解说体系。',
      title: '自然教育导赏体系',
      icon: <TreePine size={24} />,
      color: 'from-forest-green to-leaf-green',
      bgColor: 'bg-forest-green/10',
      textColor: 'text-forest-green',
      borderColor: 'border-forest-green/30',
    },
  ];

  const stats = [
    { value: '80+', label: '服务保护地', icon: <MapPin size={20} /> },
    { value: '12', label: '覆盖省份', icon: <Users size={20} /> },
    { value: '100+', label: '知识产权', icon: <CheckCircle size={20} /> },
    { value: '60+', label: '研发团队', icon: <Cpu size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-surface">
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-brand-primary/5 to-transparent pointer-events-none" />
      
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-brand-primary/25 mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
              <span className="text-sm text-muted/80">解决方案</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-ink">科技赋能</span>
              <span className="eco-gradient-text">自然保护</span>
            </h1>
            <p className="text-lg md:text-xl text-muted/75 max-w-3xl mx-auto leading-relaxed">
              依托科技创新与跨领域合作，提供自然保护地创新性和精细化管理解决方案，
              让自然生态更美好，做客户最值得信赖的保护地精细化管理服务提供商。
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass-card p-6 text-center group hover:border-brand-primary/30 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-primary/10 text-brand-primary mb-3 group-hover:shadow-glow transition-shadow">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold tech-gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              核心解决方案
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-brand-primary via-brand-accent to-transparent rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {solutions.map((solution) => (
              <div
                key={solution.id}
                className="relative glass-card-hover p-6 md:p-8 overflow-hidden h-full flex flex-col"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${solution.gradient}`} />
                <div className={`absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br ${solution.bgGradient} rounded-full blur-3xl`} />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="inline-flex items-center gap-2 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${solution.gradient} text-white`}>
                      {solution.highlight}
                    </span>
                  </div>
                  
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${solution.gradient} mb-4 shadow-glow w-fit`}>
                    <span className="text-ink">{solution.icon}</span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-ink mb-1">
                    {solution.title}
                  </h3>
                  <p className="text-xs text-muted/60 mb-4 font-english tracking-wider">
                    {solution.subtitle}
                  </p>
                  
                  <p className="text-muted/75 leading-relaxed mb-4 flex-grow">
                    {solution.description}
                  </p>
                  
                  <ul className="space-y-2 mb-4">
                    {solution.features.slice(0, 2).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle size={14} className="text-brand-primary flex-shrink-0 mt-0.5" />
                        <span className="text-ink/85 text-xs">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={`mb-4 p-3 rounded-lg bg-gradient-to-r ${solution.bgGradient} border border-border/50`}>
                    <div className={`text-2xl font-bold bg-gradient-to-r ${solution.gradient} bg-clip-text text-transparent`}>
                      {solution.stat}
                    </div>
                    <div className="text-xs text-muted/70">{solution.statLabel}</div>
                  </div>
                  
                  <VTLink
                    to={solution.buttonLink}
                    className="btn-primary inline-flex items-center justify-center gap-2 group/btn w-full md:w-auto mt-auto"
                  >
                    <span>{solution.buttonText}</span>
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </VTLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 动保植保案例 - 使用自然绿色系配色 */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-surface-2">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-wildlife/25 mb-6">
              <Sprout size={16} className="text-wildlife" />
              <span className="text-sm text-muted/80">动保植保</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              生态守护案例
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-wildlife via-nature-green to-forest-green mx-auto" />
            <p className="text-muted/75 mt-4 max-w-2xl mx-auto">
              以自然绿色为基调，用科技守护野生动植物，构建人与自然和谐共生的生态文明
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {wildlifeCases.map((caseItem, index) => (
              <div
                key={index}
                className={`glass-card p-6 md:p-8 relative group hover:${caseItem.borderColor} transition-all duration-300 h-full flex flex-col`}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${caseItem.color}" 
                  style={{background: `linear-gradient(to right, var(--tw-gradient-stops))`}} 
                />
                <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${caseItem.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`} />
                
                <div className="pt-4 flex flex-col h-full">
                  <div className={`w-12 h-12 rounded-xl ${caseItem.bgColor} flex items-center justify-center ${caseItem.textColor} mb-4`}>
                    {caseItem.icon}
                  </div>
                  <h3 className="text-lg font-bold text-ink mb-3">{caseItem.title}</h3>
                  <p className="text-muted/80 text-sm leading-relaxed mb-6 flex-grow">
                    {caseItem.quote}
                  </p>
                  <div className={`inline-flex items-center gap-2 text-sm ${caseItem.textColor} font-medium mt-auto`}>
                    <span>了解详情</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6">
            让自然保护成为最酷的工作
          </h2>
          <p className="text-muted/75 text-lg mb-8 max-w-2xl mx-auto">
            我们致力于将无人机技术与自然生态保护深度融合，打造智慧保护地，让科技守护绿水青山。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <VTLink to="/contact" className="btn-primary inline-flex items-center gap-2">
              <span>联系我们</span>
              <ArrowRight size={18} />
            </VTLink>
            <VTLink to="/drone_service" className="btn-secondary inline-flex items-center gap-2">
              <Plane size={18} />
              <span>探索服务</span>
            </VTLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
