import React from 'react';
import { Plane, Database, MapPin, Smartphone, Award, FileCheck, ArrowRight, Cpu, Leaf, Radio } from 'lucide-react';
import VTLink from '../../components/VTLink';
import ScrollCarousel from '../../components/ui/ScrollCarousel';

const Archives: React.FC = () => {
  const products = [
    {
      id: 'xi-niao',
      icon: <Plane size={32} />,
      title: '犀鸟Ⅱ复合翼无人机',
      subtitle: 'Hornbill II VTOL',
      description: '垂直起降、长航时、大载重的复合翼无人机，专为自然保护地巡检设计，适应复杂地形环境。',
      features: ['垂直起降', '长航时飞行', '大载重能力', '智能航线规划'],
      gradient: 'from-brand-primary to-brand-accent',
      link: '/archives/grid',
    },
    {
      id: 'zai-he',
      icon: <Cpu size={32} />,
      title: '任务载荷',
      subtitle: 'Mission Payload',
      description: '多类型任务载荷设备，包括高清相机、红外传感器、多光谱仪等，满足多样化监测需求。',
      features: ['高清相机', '红外传感器', '多光谱仪', '实时传输'],
      gradient: 'from-brand-accent to-tech-blue',
      link: '/archives/grid',
    },
    {
      id: 'tuo-kong',
      icon: <Radio size={32} />,
      title: '妥空地面站',
      subtitle: 'Tuokong Ground Station',
      description: '智能地面控制系统，实现无人机自动起降、航线规划、数据传输一体化管理。',
      features: ['自动起降', '航线规划', '数据传输', '远程监控'],
      gradient: 'from-warm to-brand-primary',
      link: '/archives/sifeng',
    },
  ];

  const software = [
    {
      id: 'yi-cha-ji',
      icon: <MapPin size={28} />,
      title: '翼查记',
      subtitle: 'YiChaJi',
      description: '服务于科研监测、综合考察的专业平台，地图类型丰富、定制性强，助力保护地科学管理。',
      features: ['科研监测', '综合考察', '地图定制', '数据分析'],
      toneBg: 'bg-brand-primary/15',
      toneText: 'text-brand-primary',
      dotBg: 'bg-brand-primary',
      link: '/archives/sheng-wu-quan',
    },
    {
      id: 'yi-di-xun',
      icon: <Database size={28} />,
      title: '翼地巡',
      subtitle: 'YiDiXun',
      description: '服务于巡护监测的网格管理系统，自动分析巡护成效和覆盖范围，提升巡护效率。',
      features: ['巡护监测', '网格管理', '自动分析', '事件回报'],
      toneBg: 'bg-brand-accent/15',
      toneText: 'text-brand-accent',
      dotBg: 'bg-brand-accent',
      link: '/archives/grid',
    },
    {
      id: 'zi-ran-mai-bo',
      icon: <Smartphone size={28} />,
      title: '自然脉搏',
      subtitle: 'Nature Pulse',
      description: '服务于线上导览、自然教育的小程序平台，串联社区与公众，提升保护地影响力。',
      features: ['线上导览', '自然教育', '社区联动', '公众参与'],
      toneBg: 'bg-warm/15',
      toneText: 'text-warm',
      dotBg: 'bg-warm',
      link: '/archives/sheng-wu-quan',
    },
  ];

  const honors = [
    { title: '国家高新技术企业', year: '2019' },
    { title: '双软企业', year: '2020' },
    { title: '守合同重信用企业', year: '2020' },
    { title: '自治区知识产权优势企业培育单位', year: '2021' },
  ];

  const certifications = [
    { title: '民用无人机驾驶员训练机构', icon: <Plane size={24} /> },
    { title: '大疆行业合作伙伴', icon: <Cpu size={24} /> },
    { title: 'ISO质量管理体系认证', icon: <FileCheck size={24} /> },
    { title: '信息安全管理体系认证', icon: <Award size={24} /> },
  ];

  const certificates = [
    {
      title: '国家高新技术企业',
      description: '国家级科技企业认证，证明企业具备核心自主知识产权',
      icon: Award,
      badge: '企业荣誉',
      badgeIcon: Award,
      badgeColor: 'text-brand-primary',
      gradient: 'from-brand-primary to-brand-accent',
      year: '2019',
      image: null,
    },
    {
      title: '双软企业',
      description: '软件企业和软件产品认证，技术实力获得权威认可',
      icon: Award,
      badge: '企业荣誉',
      badgeIcon: Award,
      badgeColor: 'text-brand-primary',
      gradient: 'from-brand-accent to-tech-blue',
      year: '2020',
      image: null,
    },
    {
      title: '守合同重信用企业',
      description: '诚信经营典范，企业信用评级优秀',
      icon: Award,
      badge: '企业荣誉',
      badgeIcon: Award,
      badgeColor: 'text-warm',
      gradient: 'from-warm to-brand-primary',
      year: '2020',
      image: null,
    },
    {
      title: '民用无人机驾驶员训练机构',
      description: '官方认证的无人机驾驶员培训机构',
      icon: Plane,
      badge: '资质认证',
      badgeIcon: FileCheck,
      badgeColor: 'text-brand-accent',
      gradient: 'from-brand-primary to-wildlife',
      year: null,
      image: null,
    },
    {
      title: '大疆行业合作伙伴',
      description: 'DJI行业生态合作伙伴，共同推动无人机技术应用',
      icon: Cpu,
      badge: '合作伙伴',
      badgeIcon: Award,
      badgeColor: 'text-tech-blue',
      gradient: 'from-tech-blue to-brand-accent',
      year: null,
      image: null,
    },
    {
      title: 'ISO质量管理体系认证',
      description: '国际标准化组织认证，管理体系达到国际标准',
      icon: FileCheck,
      badge: '资质认证',
      badgeIcon: FileCheck,
      badgeColor: 'text-brand-accent',
      gradient: 'from-brand-accent to-brand-primary',
      year: null,
      image: null,
    },
    {
      title: '信息安全管理体系认证',
      description: '信息安全管理体系认证，保障客户数据安全',
      icon: FileCheck,
      badge: '资质认证',
      badgeIcon: Award,
      badgeColor: 'text-wildlife',
      gradient: 'from-wildlife to-brand-primary',
      year: null,
      image: null,
    },
    {
      title: '自治区知识产权优势企业',
      description: '区域知识产权培育重点单位，创新能力获得认可',
      icon: Award,
      badge: '企业荣誉',
      badgeIcon: Award,
      badgeColor: 'text-brand-primary',
      gradient: 'from-brand-primary to-warm',
      year: '2021',
      image: null,
    },
  ];

  const ipStats = [
    { value: '33', label: '申请专利', suffix: '项' },
    { value: '14', label: '授权专利', suffix: '项' },
    { value: '12', label: '软件著作权', suffix: '项' },
    { value: '21', label: '注册商标', suffix: '项' },
  ];

  return (
    <div className="min-h-screen bg-surface">
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-brand-accent/5 to-transparent pointer-events-none" />
      
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-brand-accent/25 mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
              <span className="text-sm text-muted/80">档案中心</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-ink">产品与</span>
              <span className="tech-gradient-text">技术档案</span>
            </h1>
            <p className="text-lg md:text-xl text-muted/75 max-w-3xl mx-auto leading-relaxed">
              翼界科技自主研发的无人机产品、软件系统与荣誉资质，持续创新赋能自然保护。
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-ink mb-4 flex items-center gap-3">
              <Plane size={28} className="text-brand-primary" />
              产品档案
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-brand-primary via-brand-accent to-transparent rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {products.map((product) => (
              <VTLink
                key={product.id}
                to={product.link}
                className="glass-card-hover p-6 md:p-8 relative group block"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${product.gradient}`} />
                <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${product.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`} />
                
                <div className="relative z-10">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${product.gradient} mb-5 shadow-glow-sm`}>
                    <span className="text-ink">{product.icon}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-ink mb-1">
                    {product.title}
                  </h3>
                  <p className="text-xs text-muted/60 mb-4 font-english tracking-wider">{product.subtitle}</p>
                  
                  <p className="text-muted/75 text-sm leading-relaxed mb-5">
                    {product.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs rounded-full bg-surface-2 text-muted/80 border border-border"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-2 text-brand-primary text-sm font-medium">
                    <span>了解更多</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </VTLink>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-surface-2">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-ink mb-4 flex items-center gap-3">
              <Database size={28} className="text-brand-accent" />
              软件产品
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-brand-accent via-warm to-transparent rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {software.map((sw) => (
              <VTLink
                key={sw.id}
                to={sw.link}
                className="glass-card p-6 md:p-8 relative group hover:border-brand-primary/30 transition-all duration-300 block"
              >
                <div className={`inline-flex p-3 rounded-xl ${sw.toneBg} ${sw.toneText} mb-5`}>
                  {sw.icon}
                </div>
                
                <h3 className="text-xl font-bold text-ink mb-1">
                  {sw.title}
                </h3>
                <p className="text-xs text-muted/60 mb-4 font-english tracking-wider">{sw.subtitle}</p>
                
                <p className="text-muted/75 text-sm leading-relaxed mb-5">
                  {sw.description}
                </p>
                
                <div className="space-y-2">
                  {sw.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-muted/80">
                      <div className={`w-1.5 h-1.5 rounded-full ${sw.dotBg}`} />
                      {feature}
                    </div>
                  ))}
                </div>
              </VTLink>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-ink mb-4 flex items-center gap-3">
              <Award size={28} className="text-warm" />
              荣誉资质
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-warm via-brand-primary to-transparent rounded-full" />
          </div>

          <ScrollCarousel itemWidth={288} gap={24} showIndicators={true}>
            {certificates.map((cert, index) => (
              <div 
                key={index}
                className="flex-shrink-0 snap-center"
                style={{ width: '288px' }}
              >
                <div className="glass-card p-4 group cursor-pointer relative overflow-hidden h-full">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.gradient}`} />
                  <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${cert.gradient} opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className="h-40 rounded-lg bg-gradient-to-br from-surface-2 to-surface-3 flex items-center justify-center mb-4 overflow-hidden border border-border group-hover:border-warm/30 transition-colors">
                      {cert.image ? (
                        <img src={cert.image} alt={cert.title} className="w-full h-full object-cover" />
                      ) : (
                        <cert.icon size={48} className="text-warm/50" />
                      )}
                    </div>
                    
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <cert.badgeIcon size={14} className={cert.badgeColor} />
                          <span className="text-xs text-muted/60">{cert.badge}</span>
                        </div>
                        <h3 className="text-base font-semibold text-ink/90 truncate">{cert.title}</h3>
                        <p className="text-xs text-muted/70 mt-1 line-clamp-2">{cert.description}</p>
                      </div>
                    </div>
                    
                    {cert.year && (
                      <div className="mt-3 pt-3 border-t border-border/50">
                        <span className="text-xs text-muted/60">{cert.year}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </ScrollCarousel>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-ink mb-6 flex items-center gap-2">
                <Award size={20} className="text-brand-primary" />
                企业荣誉
              </h3>
              <div className="space-y-4">
                {honors.map((honor, index) => (
                  <div
                    key={index}
                    className="glass-card p-4 flex items-center justify-between group hover:border-brand-primary/30 transition-all"
                  >
                    <span className="text-ink/90 font-medium">{honor.title}</span>
                    <span className="text-sm text-muted/60">{honor.year}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-ink mb-6 flex items-center gap-2">
                <FileCheck size={20} className="text-brand-accent" />
                资质认证
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="glass-card p-4 flex items-center gap-3 group hover:border-brand-accent/30 transition-all"
                  >
                    <div className="text-brand-accent">{cert.icon}</div>
                    <span className="text-ink/90 font-medium">{cert.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-surface-2">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-ink mb-4 flex items-center gap-3">
              <Leaf size={28} className="text-brand-primary" />
              知识产权
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-brand-primary via-brand-accent to-transparent rounded-full" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {ipStats.map((stat, index) => (
              <div
                key={index}
                className="glass-card p-6 text-center group hover:border-brand-primary/30 transition-all"
              >
                <div className="text-3xl md:text-4xl font-bold text-brand-primary mb-2">
                  {stat.value}
                  <span className="text-lg">{stat.suffix}</span>
                </div>
                <div className="text-sm text-muted/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6">
            探索更多
          </h2>
          <p className="text-muted/75 text-lg mb-8 max-w-2xl mx-auto">
            了解翼界科技的完整产品体系与技术能力，发现适合您保护地的解决方案。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <VTLink to="/solutions" className="btn-primary inline-flex items-center gap-2">
              <span>解决方案</span>
              <ArrowRight size={18} />
            </VTLink>
            <VTLink to="/drone_service" className="btn-secondary inline-flex items-center gap-2">
              <Plane size={18} />
              <span>无人机服务</span>
            </VTLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Archives;
