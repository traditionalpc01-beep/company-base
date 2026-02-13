import React from 'react';
import { Users, Building, Landmark, Leaf, Plane, Cpu, ArrowRight, Handshake } from 'lucide-react';
import VTLink from '../../components/VTLink';

const Partners: React.FC = () => {
  const partnerCategories = [
    {
      id: 'government',
      title: '政府与事业单位',
      icon: <Landmark size={28} />,
      description: '与各级林业、自然保护地管理部门深度合作',
      partners: [
        '国家林草局', '广西林业局', '云南林草局', 
        '海南林业局', '广东林业局', '四川林草局',
      ],
    },
    {
      id: 'protected-areas',
      title: '自然保护地',
      icon: <Leaf size={28} />,
      description: '服务全国80+自然保护地，覆盖12个省份',
      partners: [
        '崇左白头叶猴保护区', '弄岗国家级保护区', '猫儿山保护区',
        '十万大山保护区', '大明山保护区', '雅长兰科保护区',
      ],
    },
    {
      id: 'industry',
      title: '行业合作伙伴',
      icon: <Building size={28} />,
      description: '与大疆等行业领先企业建立战略合作',
      partners: [
        '大疆行业应用', '中国电子北海产业园', '广西科学院',
        '广西大学', '北京林业大学', '中科院植物所',
      ],
    },
    {
      id: 'tech',
      title: '技术合作伙伴',
      icon: <Cpu size={28} />,
      description: '联合研发，共同推动技术创新',
      partners: [
        '华为云', '阿里云', '腾讯云',
        '中国移动', '中国电信', '北斗导航',
      ],
    },
  ];

  const cooperationTypes = [
    {
      icon: <Handshake size={32} />,
      title: '项目合作',
      description: '共同承接自然保护地信息化建设项目',
    },
    {
      icon: <Plane size={32} />,
      title: '技术合作',
      description: '无人机技术、AI算法、大数据分析等领域合作',
    },
    {
      icon: <Users size={32} />,
      title: '人才培养',
      description: '联合培养无人机飞手、自然保护专业人才',
    },
    {
      icon: <Leaf size={32} />,
      title: '科研合作',
      description: '生物多样性监测、生态研究等科研项目合作',
    },
  ];

  const testimonials = [
    {
      quote: '翼界科技的无人机巡检系统大大提升了我们的巡护效率，让我们能够更及时地发现和处理问题。',
      author: '某国家级保护区负责人',
    },
    {
      quote: '翼查记平台帮助我们建立了完善的科研监测数据管理体系，为保护决策提供了有力支撑。',
      author: '某省级林业部门领导',
    },
    {
      quote: '感谢翼界科技在绿水青山的路上，与我们携手同行，共同守护自然生态。',
      author: '某自然保护地管理站站长',
    },
  ];

  return (
    <div className="min-h-screen bg-surface">
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-warm/5 to-transparent pointer-events-none" />
      
      <section className="relative pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-warm/25 mb-6">
              <Users size={16} className="text-warm" />
              <span className="text-sm text-muted/80">合作伙伴</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-ink">携手</span>
              <span className="text-gradient">共创未来</span>
            </h1>
            <p className="text-lg md:text-xl text-muted/75 max-w-3xl mx-auto leading-relaxed">
              感谢在绿水青山的路上，有您们的合作与支持！我们期待与更多志同道合的伙伴携手前行。
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mb-12 staggered-grid">
            {cooperationTypes.map((type, index) => (
              <div
                key={index}
                className="glass-card p-5 text-center group hover:border-warm/30 transition-all motion-fade-up"
              >
                <div className="w-14 h-14 rounded-2xl bg-warm/10 flex items-center justify-center mx-auto mb-4 text-warm group-hover:shadow-glow transition-shadow motion-float">
                  {type.icon}
                </div>
                <h3 className="text-lg font-semibold text-ink mb-2">{type.title}</h3>
                <p className="text-sm text-muted/70">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-surface-2">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              合作伙伴
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-brand-primary to-transparent mx-auto mb-4" />
            <p className="text-muted/75 max-w-2xl mx-auto">
              与政府、保护地、企业、科研机构建立广泛合作
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 staggered-grid">
            {partnerCategories.map((category) => (
              <div
                key={category.id}
                className="glass-card p-6 md:p-7 group hover:border-brand-primary/30 transition-all motion-sheen"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary flex-shrink-0 motion-float">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-ink mb-1">{category.title}</h3>
                    <p className="text-sm text-muted/70">{category.description}</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.partners.map((partner, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 text-sm rounded-lg bg-surface-2 text-muted/80 border border-border hover:border-brand-primary/30 transition-colors"
                    >
                      {partner}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              客户评价
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-brand-accent to-transparent mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-5 staggered-grid">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="glass-card p-6 md:p-7 relative group hover:border-brand-accent/30 transition-all motion-sheen"
              >
                <div className="absolute top-6 left-6 text-brand-primary/20">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                
                <div className="pt-10">
                  <p className="text-muted/80 text-sm leading-relaxed mb-6">
                    {item.quote}
                  </p>
                  <div className="text-sm text-muted/60">
                    —— {item.author}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-surface-2">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <Handshake size={48} className="text-warm mx-auto mb-6 opacity-60 motion-float" />
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6">
            期待与您合作
          </h2>
          <p className="text-muted/75 text-lg mb-8 max-w-2xl mx-auto">
            无论您是政府机构、保护地管理单位、企业还是科研机构，我们都期待与您携手，共同守护绿水青山。
          </p>
          <VTLink to="/contact" className="btn-primary inline-flex items-center gap-2">
            <span>联系我们</span>
            <ArrowRight size={18} />
          </VTLink>
        </div>
      </section>
    </div>
  );
};

export default Partners;
