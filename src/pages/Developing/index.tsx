import React from 'react';
import { Calendar, Award, Users, Plane, Leaf, Cpu, ArrowRight, Rocket, Target, Trophy, Map, Sprout, Bird } from 'lucide-react';
import VTLink from '../../components/VTLink';

const Developing: React.FC = () => {
  const timeline = [
    {
      year: '2018',
      quarter: 'Q1',
      title: '公司成立',
      description: '翼界科技在广西南宁正式成立，专注于自然保护地信息化建设',
      icon: <Rocket size={20} />,
      type: 'founding',
    },
    {
      year: '2018',
      quarter: 'Q3',
      title: '首个项目落地',
      description: '承接首个自然保护地信息化项目，开启服务保护地征程',
      icon: <Leaf size={20} />,
      type: 'project',
    },
    {
      year: '2019',
      quarter: 'Q2',
      title: '高新技术企业认定',
      description: '获得国家高新技术企业认定，研发实力获得认可',
      icon: <Award size={20} />,
      type: 'honor',
    },
    {
      year: '2019',
      quarter: 'Q4',
      title: '无人机业务启动',
      description: '组建无人机外业团队，开展巡检服务业务',
      icon: <Plane size={20} />,
      type: 'business',
    },
    {
      year: '2020',
      quarter: 'Q1',
      title: '翼查记上线',
      description: '科研监测平台翼查记正式上线运营',
      icon: <Cpu size={20} />,
      type: 'product',
    },
    {
      year: '2020',
      quarter: 'Q3',
      title: '翼地巡发布',
      description: '巡护监测系统翼地巡发布，完善产品矩阵',
      icon: <Target size={20} />,
      type: 'product',
    },
    {
      year: '2021',
      quarter: 'Q2',
      title: '规模扩展',
      description: '服务保护地突破50个，覆盖8个省份',
      icon: <Users size={20} />,
      type: 'milestone',
    },
    {
      year: '2021',
      quarter: 'Q4',
      title: '双软企业认证',
      description: '获得双软企业认证和守合同重信用企业荣誉',
      icon: <Trophy size={20} />,
      type: 'honor',
    },
    {
      year: '2022',
      quarter: 'Q2',
      title: '大疆战略合作',
      description: '与大疆行业应用建立战略合作关系',
      icon: <Plane size={20} />,
      type: 'partnership',
    },
    {
      year: '2022',
      quarter: 'Q4',
      title: '自然脉搏上线',
      description: '自然教育小程序自然脉搏正式上线',
      icon: <Leaf size={20} />,
      type: 'product',
    },
    {
      year: '2023',
      quarter: 'Q2',
      title: '知识产权突破',
      description: '累计申请专利33项，授权14项，软著12项',
      icon: <Award size={20} />,
      type: 'milestone',
    },
    {
      year: '2023',
      quarter: 'Q4',
      title: '服务规模扩大',
      description: '服务保护地突破80个，覆盖12个省份',
      icon: <Users size={20} />,
      type: 'milestone',
    },
    {
      year: '2024',
      quarter: 'Q2',
      title: '测绘资质认证',
      description: '获得测绘资质乙级认证（工程测量、互联网地图服务）',
      icon: <Map size={20} />,
      type: 'honor',
    },
    {
      year: '2024',
      quarter: 'Q4',
      title: '业务持续增长',
      description: '服务保护地突破100个，业务覆盖14个省份',
      icon: <Sprout size={20} />,
      type: 'milestone',
    },
    {
      year: '2025',
      quarter: 'Q1',
      title: 'AI识别专利授权',
      description: '无人机甘蔗种植面积图像识别方法发明专利获授权',
      icon: <Bird size={20} />,
      type: 'honor',
    },
  ];

  const yearGroups = timeline.reduce((acc, item) => {
    if (!acc[item.year]) {
      acc[item.year] = [];
    }
    acc[item.year].push(item);
    return acc;
  }, {} as Record<string, typeof timeline>);

  const stats = [
    { value: '7', label: '发展年限', suffix: '年' },
    { value: '100+', label: '服务保护地', suffix: '' },
    { value: '14', label: '覆盖省份', suffix: '' },
    { value: '61', label: '知识产权', suffix: '项' },
  ];

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      founding: 'from-brand-primary to-brand-accent',
      project: 'from-brand-accent to-tech',
      honor: 'from-wildlife to-brand-primary',
      business: 'from-brand-primary to-wildlife',
      product: 'from-brand-accent to-wildlife',
      milestone: 'from-wildlife to-tech',
      partnership: 'from-tech to-brand-primary',
    };
    return colors[type] || 'from-brand-primary to-brand-accent';
  };

  const getTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      founding: '创立',
      project: '项目',
      honor: '荣誉',
      business: '业务',
      product: '产品',
      milestone: '里程碑',
      partnership: '合作',
    };
    return labels[type] || '其他';
  };

  return (
    <div className="min-h-screen bg-surface">
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-wildlife/5 to-transparent pointer-events-none" />
      
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-wildlife/25 mb-6">
              <Calendar size={16} className="text-wildlife" />
              <span className="text-sm text-muted/80">发展历程</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-ink">砥砺前行</span>
              <span className="text-gradient">，</span>
              <span className="text-gradient">未来可期</span>
            </h1>
            <p className="text-lg md:text-xl text-muted/75 max-w-3xl mx-auto leading-relaxed">
              从2018年成立至今，翼界科技始终专注于自然保护地信息化建设，
              用科技创新守护绿水青山。
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass-card p-6 text-center group hover:border-wildlife/30 transition-all"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                  <span className="text-xl text-wildlife ml-1">{stat.suffix}</span>
                </div>
                <div className="text-sm text-muted/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 紧凑时间线布局 */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              发展时间线
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-brand-primary to-transparent mx-auto" />
          </div>

          <div className="relative">
            {/* 中央时间线 */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-primary via-brand-accent to-wildlife md:-translate-x-1/2" />
            
            {Object.entries(yearGroups).map(([year, events]) => (
              <div key={year} className="relative mb-8 last:mb-0">
                {/* 年份标记 */}
                <div className="flex items-center justify-center mb-4">
                  <div className="relative z-10 px-4 py-1.5 rounded-full bg-gradient-to-r from-brand-primary to-brand-accent text-white font-bold text-base shadow-glow">
                    {year}
                  </div>
                </div>
                
                {/* 该年份的事件 - 使用更紧凑的网格布局 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  {events.map((event, eventIndex) => (
                    <div
                      key={`${year}-${eventIndex}`}
                      className={`relative ${eventIndex % 2 === 1 ? 'md:mt-4' : ''}`}
                    >
                      {/* 时间点 */}
                      <div className={`absolute left-6 md:left-1/2 w-2.5 h-2.5 rounded-full bg-brand-primary md:-translate-x-1/2 mt-4 shadow-glow-sm z-10`} />
                      
                      <div className={`ml-12 md:ml-0 ${eventIndex % 2 === 0 ? 'md:pr-8 md:text-right md:mr-[50%]' : 'md:pl-8 md:ml-[50%]'}`}>
                        <div className="glass-card p-4 group hover:border-brand-primary/30 transition-all">
                          <div className={`flex items-center gap-2 mb-2 ${eventIndex % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${getTypeColor(event.type)} flex items-center justify-center text-ink shadow-glow-sm flex-shrink-0`}>
                              {event.icon}
                            </div>
                            <div className={eventIndex % 2 === 0 ? 'md:text-right' : ''}>
                              <div className="text-xs text-muted/60">{event.quarter} · {getTypeLabel(event.type)}</div>
                              <h3 className="text-sm font-semibold text-ink">{event.title}</h3>
                            </div>
                          </div>
                          <p className="text-xs text-muted/75 leading-relaxed">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-surface-2">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              发展里程碑
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-brand-accent to-transparent mx-auto mb-4" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card p-6 md:p-8 group hover:border-wildlife/30 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-wildlife/10 flex items-center justify-center mb-4 text-wildlife group-hover:shadow-glow-wildlife transition-shadow">
                <Award size={28} />
              </div>
              <h3 className="text-xl font-bold text-ink mb-3">荣誉资质</h3>
              <ul className="space-y-2 text-sm text-muted/75">
                <li>• 国家高新技术企业</li>
                <li>• 双软企业认证</li>
                <li>• 守合同重信用企业</li>
                <li>• 测绘资质乙级认证</li>
                <li>• 自治区知识产权优势企业</li>
              </ul>
            </div>
            
            <div className="glass-card p-6 md:p-8 group hover:border-brand-accent/30 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 flex items-center justify-center mb-4 text-brand-accent group-hover:shadow-glow-accent transition-shadow">
                <Cpu size={28} />
              </div>
              <h3 className="text-xl font-bold text-ink mb-3">产品矩阵</h3>
              <ul className="space-y-2 text-sm text-muted/75">
                <li>• 翼查记 - 科研监测平台</li>
                <li>• 翼地巡 - 巡护监测系统</li>
                <li>• 自然脉搏 - 自然教育平台</li>
                <li>• 犀鸟Ⅱ - 复合翼无人机</li>
                <li>• 地块宝 - 自然资源调查</li>
              </ul>
            </div>
            
            <div className="glass-card p-6 md:p-8 group hover:border-brand-primary/30 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-4 text-brand-primary group-hover:shadow-glow transition-shadow">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold text-ink mb-3">服务规模</h3>
              <ul className="space-y-2 text-sm text-muted/75">
                <li>• 100+ 自然保护地</li>
                <li>• 14 省份覆盖</li>
                <li>• 10000+ 飞行架次</li>
                <li>• 60+ 研发团队</li>
                <li>• 61 项知识产权</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Rocket size={48} className="text-brand-primary mx-auto mb-6 opacity-60" />
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6">
            未来展望
          </h2>
          <p className="text-muted/75 text-lg mb-8 max-w-2xl mx-auto">
            翼界科技将继续深耕自然保护地信息化领域，以科技创新驱动业务发展，
            让更多保护地享受到智慧化管理的便利，共同守护绿水青山。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <VTLink to="/contact" className="btn-primary inline-flex items-center gap-2">
              <span>合作咨询</span>
              <ArrowRight size={18} />
            </VTLink>
            <VTLink to="/about" className="btn-secondary inline-flex items-center gap-2">
              <span>了解我们</span>
            </VTLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Developing;
