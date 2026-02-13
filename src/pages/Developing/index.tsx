import React from 'react';
import { Calendar, Award, Users, Plane, Leaf, Cpu, ArrowRight, Rocket, Target, Trophy, Map, Sprout, Bird } from 'lucide-react';
import VTLink from '../../components/VTLink';
import ScrollCarousel from '../../components/ui/ScrollCarousel';

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
  const yearGroupEntries = Object.entries(yearGroups);
  const yearScrollEntries = yearGroupEntries.length > 4 ? yearGroupEntries : [...yearGroupEntries, ...yearGroupEntries];

  const stats = [
    { value: '8', label: '发展年限', suffix: '年' },
    { value: '100+', label: '服务保护地', suffix: '' },
    { value: '14', label: '覆盖省份', suffix: '' },
    { value: '61', label: '知识产权', suffix: '项' },
  ];

  const getTypeStyle = (type: string) => {
    const styles: Record<string, { icon: string; tag: string }> = {
      founding: { icon: 'bg-brand-primary/10 text-brand-primary border-brand-primary/30', tag: 'bg-brand-primary/10 text-brand-primary border-brand-primary/30' },
      project: { icon: 'bg-brand-accent/10 text-brand-accent border-brand-accent/30', tag: 'bg-brand-accent/10 text-brand-accent border-brand-accent/30' },
      honor: { icon: 'bg-wildlife/10 text-wildlife border-wildlife/30', tag: 'bg-wildlife/10 text-wildlife border-wildlife/30' },
      business: { icon: 'bg-tech/10 text-tech border-tech/30', tag: 'bg-tech/10 text-tech border-tech/30' },
      product: { icon: 'bg-warm/10 text-warm border-warm/30', tag: 'bg-warm/10 text-warm border-warm/30' },
      milestone: { icon: 'bg-plant/10 text-plant border-plant/30', tag: 'bg-plant/10 text-plant border-plant/30' },
      partnership: { icon: 'bg-brand-primary/10 text-brand-primary border-brand-primary/30', tag: 'bg-brand-primary/10 text-brand-primary border-brand-primary/30' },
    };
    return styles[type] || { icon: 'bg-brand-primary/10 text-brand-primary border-brand-primary/30', tag: 'bg-brand-primary/10 text-brand-primary border-brand-primary/30' };
  };

  const timelineTracks = [
    { title: '技术演进', desc: '从基础巡检到智能识别与自动化调度', color: 'from-brand-primary/20 to-brand-accent/10' },
    { title: '行业落地', desc: '覆盖自然保护地、林草、测绘与生态监管', color: 'from-warm/20 to-wildlife/10' },
    { title: '生态协作', desc: '政产学研协同，形成可复制的管理方法论', color: 'from-plant/20 to-tech/10' },
    { title: '数据资产', desc: '沉淀多源数据与模型能力，持续迭代产品', color: 'from-tech/20 to-brand-primary/10' },
    { title: '品牌影响', desc: '行业认可度与服务规模持续提升', color: 'from-wildlife/20 to-brand-accent/10' },
    { title: '未来布局', desc: '低空经济与自然教育双引擎驱动', color: 'from-brand-accent/20 to-warm/10' },
  ];
  const trackScrollItems = timelineTracks.length > 6 ? timelineTracks : [...timelineTracks, ...timelineTracks];

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
      
      <section className="relative pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 staggered-grid">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass-card p-5 text-center group hover:border-wildlife/30 transition-all motion-fade-up"
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

      {/* 横向年份时间线 */}
      <section className="relative py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-ink mb-3">
              发展时间线
            </h2>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-brand-primary to-transparent mx-auto" />
          </div>

          <div className="relative">
            <ScrollCarousel
              itemWidth={320}
              gap={20}
              autoPlayMode="continuous"
              autoPlaySpeed={22}
              showIndicators={false}
              showArrows={true}
              showProgress={false}
            >
              {yearScrollEntries.map(([year, events], index) => (
                <div 
                  key={`${year}-${index}`}
                  className="flex-shrink-0 w-80"
                >
                  <div className="glass-card p-5 h-full relative overflow-hidden motion-sheen">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-primary via-brand-accent to-wildlife" />
                    
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center text-white font-bold text-xl shadow-glow-sm motion-float">
                        {year}
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-muted/60">{events.length} 个事件</div>
                        <div className="text-sm font-medium text-ink/80">年度里程碑</div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {events.map((event, eventIndex) => {
                        const style = getTypeStyle(event.type);
                        return (
                          <div
                            key={`${year}-${eventIndex}`}
                            className="p-3 rounded-lg bg-surface-2/60 border border-border/50 group hover:border-brand-primary/30 hover:bg-surface-2 transition-all motion-fade-up"
                          >
                            <div className="flex items-start gap-3">
                              <div className={`w-8 h-8 rounded-lg border flex items-center justify-center flex-shrink-0 shadow-sm ${style.icon}`}>
                                {event.icon}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="text-xs font-medium text-muted/70">{event.quarter}</span>
                                  <span className={`text-xs px-2 py-0.5 rounded-full border ${style.tag}`}>
                                    {getTypeLabel(event.type)}
                                  </span>
                                </div>
                                <h3 className="text-sm font-semibold text-ink truncate">{event.title}</h3>
                                <p className="text-xs text-muted/70 mt-1 line-clamp-2 leading-relaxed">
                                  {event.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </ScrollCarousel>
            
            <div className="absolute left-0 top-0 bottom-8 w-16 bg-gradient-to-r from-surface to-transparent pointer-events-none z-10" />
            <div className="absolute right-0 top-0 bottom-8 w-16 bg-gradient-to-l from-surface to-transparent pointer-events-none z-10" />
          </div>
          
          <div className="mt-8">
            <ScrollCarousel
              itemWidth={280}
              gap={16}
              autoPlayMode="continuous"
              autoPlaySpeed={18}
              showIndicators={false}
              showArrows={false}
              showProgress={false}
            >
              {trackScrollItems.map((track, index) => (
                <div key={`${track.title}-${index}`} className="flex-shrink-0 w-[280px]">
                  <div className={`glass-card p-4 border border-border/60 bg-gradient-to-br ${track.color} motion-sheen`}>
                    <div className="text-sm font-semibold text-ink mb-2">{track.title}</div>
                    <p className="text-xs text-muted/70 leading-relaxed">{track.desc}</p>
                  </div>
                </div>
              ))}
            </ScrollCarousel>
          </div>

          <div className="text-center mt-4">
            <p className="text-sm text-muted/60">自动滚动，可左右拖动查看更多年份</p>
          </div>
        </div>
      </section>

      <section className="relative py-14 px-4 sm:px-6 lg:px-8 bg-surface-2">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              发展里程碑
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-brand-accent to-transparent mx-auto mb-4" />
          </div>

          <div className="grid md:grid-cols-3 gap-5 staggered-grid">
            <div className="glass-card p-6 md:p-7 group hover:border-wildlife/30 transition-all motion-sheen">
              <div className="w-14 h-14 rounded-2xl bg-wildlife/10 flex items-center justify-center mb-4 text-wildlife group-hover:shadow-glow-wildlife transition-shadow motion-float">
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
            
            <div className="glass-card p-6 md:p-7 group hover:border-brand-accent/30 transition-all motion-sheen">
              <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 flex items-center justify-center mb-4 text-brand-accent group-hover:shadow-glow-accent transition-shadow motion-float">
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
            
            <div className="glass-card p-6 md:p-7 group hover:border-brand-primary/30 transition-all motion-sheen">
              <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-4 text-brand-primary group-hover:shadow-glow transition-shadow motion-float">
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

      <section className="relative py-14 px-4 sm:px-6 lg:px-8">
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
