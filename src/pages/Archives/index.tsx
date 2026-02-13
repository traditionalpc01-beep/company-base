import React from 'react';
import { Plane, Database, MapPin, Smartphone, Award, FileCheck, ArrowRight, Cpu, Leaf, Radio } from 'lucide-react';
import VTLink from '../../components/VTLink';
import droneFlight900 from '../../assets/ejdrone/optimized/ejdrone_98629acd31cb_900w.webp';
import droneFlight1400 from '../../assets/ejdrone/optimized/ejdrone_98629acd31cb_1400w.webp';
import fieldKit900 from '../../assets/ejdrone/optimized/ejdrone_4ff8bfda3ad1_900w.webp';
import fieldKit1400 from '../../assets/ejdrone/optimized/ejdrone_4ff8bfda3ad1_1400w.webp';
import groundStation900 from '../../assets/ejdrone/optimized/ejdrone_93bbce147373_900w.webp';
import groundStation1400 from '../../assets/ejdrone/optimized/ejdrone_93bbce147373_1400w.webp';
import shengwu900 from '../../assets/ejdrone/optimized/ejdrone_6e1b9064cc60_900w.webp';
import shengwu1400 from '../../assets/ejdrone/optimized/ejdrone_6e1b9064cc60_1400w.webp';
import grid900 from '../../assets/ejdrone/optimized/ejdrone_027a307929de_900w.webp';
import grid1400 from '../../assets/ejdrone/optimized/ejdrone_027a307929de_1400w.webp';
import pulse900 from '../../assets/ejdrone/optimized/ejdrone_713c50d88180_900w.webp';
import pulse1400 from '../../assets/ejdrone/optimized/ejdrone_713c50d88180_1400w.webp';
import { honorCertificates } from '../../assets/ejdrone/honors';

const Archives: React.FC = () => {
  const products = [
    {
      id: 'xi-niao',
      icon: <Plane size={32} />,
      title: '犀鸟Ⅱ复合翼无人机',
      subtitle: 'Hornbill II VTOL',
      description: '垂直起降、长航时、大载重的复合翼无人机，专为自然保护地巡检设计，适应复杂地形环境。',
      features: ['垂直起降', '长航时飞行', '大载重能力', '智能航线规划'],
      useCases: ['全域巡检', '应急快速抵达'],
      deliverables: ['巡检视频', '航线与轨迹数据'],
      gradient: 'from-brand-primary to-brand-accent',
      image: {
        src: droneFlight1400,
        srcSet: `${droneFlight900} 900w, ${droneFlight1400} 1400w`,
        sizes: '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw',
        alt: '复合翼无人机飞行作业',
      },
      link: '/archives/grid',
    },
    {
      id: 'zai-he',
      icon: <Cpu size={32} />,
      title: '任务载荷',
      subtitle: 'Mission Payload',
      description: '多类型任务载荷设备，包括高清相机、红外传感器、多光谱仪等，满足多样化监测需求。',
      features: ['高清相机', '红外传感器', '多光谱仪', '实时传输'],
      useCases: ['火情巡检', '植被指数分析'],
      deliverables: ['多源影像', '分析图件与报告'],
      gradient: 'from-brand-accent to-tech-blue',
      image: {
        src: fieldKit1400,
        srcSet: `${fieldKit900} 900w, ${fieldKit1400} 1400w`,
        sizes: '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw',
        alt: '外业设备与载荷组件',
      },
      link: '/archives/grid',
    },
    {
      id: 'tuo-kong',
      icon: <Radio size={32} />,
      title: '妥空地面站',
      subtitle: 'Tuokong Ground Station',
      description: '智能地面控制系统，实现无人机自动起降、航线规划、数据传输一体化管理。',
      features: ['自动起降', '航线规划', '数据传输', '远程监控'],
      useCases: ['无人值守', '弱网数据回收'],
      deliverables: ['任务日志', '回收归档记录'],
      gradient: 'from-warm to-brand-primary',
      image: {
        src: groundStation1400,
        srcSet: `${groundStation900} 900w, ${groundStation1400} 1400w`,
        sizes: '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw',
        alt: '地面站与控制系统',
      },
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
      useCases: ['样线调查', '红外相机数据整理'],
      deliverables: ['数据导出', '图表与报告'],
      toneBg: 'bg-brand-primary/15',
      toneText: 'text-brand-primary',
      dotBg: 'bg-brand-primary',
      image: {
        src: shengwu1400,
        srcSet: `${shengwu900} 900w, ${shengwu1400} 1400w`,
        sizes: '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw',
        alt: '科研监测与数据采集',
      },
      link: '/archives/sheng-wu-quan',
    },
    {
      id: 'yi-di-xun',
      icon: <Database size={28} />,
      title: '翼地巡',
      subtitle: 'YiDiXun',
      description: '服务于巡护监测的网格管理系统，自动分析巡护成效和覆盖范围，提升巡护效率。',
      features: ['巡护监测', '网格管理', '自动分析', '事件回报'],
      useCases: ['巡护排班', '事件闭环处置'],
      deliverables: ['任务台账', '成效统计'],
      toneBg: 'bg-brand-accent/15',
      toneText: 'text-brand-accent',
      dotBg: 'bg-brand-accent',
      image: {
        src: grid1400,
        srcSet: `${grid900} 900w, ${grid1400} 1400w`,
        sizes: '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw',
        alt: '网格化巡护监测系统',
      },
      link: '/archives/grid',
    },
    {
      id: 'zi-ran-mai-bo',
      icon: <Smartphone size={28} />,
      title: '自然脉搏',
      subtitle: 'Nature Pulse',
      description: '服务于线上导览、自然教育的小程序平台，串联社区与公众，提升保护地影响力。',
      features: ['线上导览', '自然教育', '社区联动', '公众参与'],
      useCases: ['导赏讲解', '公众参与记录'],
      deliverables: ['导览内容', '活动与数据沉淀'],
      toneBg: 'bg-warm/15',
      toneText: 'text-warm',
      dotBg: 'bg-warm',
      image: {
        src: pulse1400,
        srcSet: `${pulse900} 900w, ${pulse1400} 1400w`,
        sizes: '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw',
        alt: '自然教育与线上导览',
      },
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
                
                <div className="relative z-10">
                  <div className="relative mb-5 overflow-hidden rounded-2xl border border-ink/10">
                    <img
                      src={product.image.src}
                      srcSet={product.image.srcSet}
                      sizes={product.image.sizes}
                      alt={product.image.alt}
                      loading="lazy"
                      className="h-36 w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-surface/10" />
                    <div className="absolute left-4 top-4 inline-flex p-3 rounded-xl bg-surface/80 border border-ink/10">
                      <span className="text-ink">{product.icon}</span>
                    </div>
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

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-border bg-surface-2/80 px-4 py-3">
                      <div className="text-[11px] text-muted/60">适用</div>
                      <div className="text-sm font-medium text-ink/90 mt-1">
                        {product.useCases.join(' · ')}
                      </div>
                    </div>
                    <div className="rounded-xl border border-border bg-surface-2/80 px-4 py-3">
                      <div className="text-[11px] text-muted/60">交付</div>
                      <div className="text-sm font-medium text-ink/90 mt-1">
                        {product.deliverables.join(' · ')}
                      </div>
                    </div>
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
                <div className="relative mb-5 overflow-hidden rounded-2xl border border-ink/10">
                  <img
                    src={sw.image.src}
                    srcSet={sw.image.srcSet}
                    sizes={sw.image.sizes}
                    alt={sw.image.alt}
                    loading="lazy"
                    className="h-36 w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-surface/10" />
                </div>
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

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-border bg-surface-2/80 px-4 py-3">
                    <div className="text-[11px] text-muted/60">适用</div>
                    <div className="text-sm font-medium text-ink/90 mt-1">
                      {sw.useCases.join(' · ')}
                    </div>
                  </div>
                  <div className="rounded-xl border border-border bg-surface-2/80 px-4 py-3">
                    <div className="text-[11px] text-muted/60">交付</div>
                    <div className="text-sm font-medium text-ink/90 mt-1">
                      {sw.deliverables.join(' · ')}
                    </div>
                  </div>
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

          <div className="rounded-2xl glass-card overflow-hidden border border-border">
            <div className="p-6 md:p-8 border-b border-border/60">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
                <div className="md:col-span-7">
                  <div className="text-lg md:text-xl font-semibold text-ink/95">权威认证 · 可核验背书</div>
                  <div className="text-sm text-muted/70 mt-2 leading-relaxed">
                    证书与资质是能力的外化表达。这里展示部分代表性证书，更多内容可在荣誉资质页查看大图与来源。
                  </div>
                </div>
                <div className="md:col-span-5 flex md:justify-end">
                  <VTLink to="/archives/honor" className="btn-primary inline-flex items-center gap-2">
                    <span>查看全部荣誉资质</span>
                    <ArrowRight size={18} />
                  </VTLink>
                </div>
              </div>
            </div>

            <div className="p-4 md:p-6 bg-surface-2/40">
              <div className="marquee">
                <div className="marquee-track">
                  {[...honorCertificates, ...honorCertificates].map((cert, idx) => (
                    <VTLink
                      key={`${cert.id}-${idx}`}
                      to={`/archives/honor#${cert.id}`}
                      className="marquee-item"
                      aria-label={`查看证书：${cert.title}`}
                    >
                      <img
                        src={cert.image900}
                        srcSet={`${cert.image900} 900w, ${cert.image1400} 1400w`}
                        sizes="240px"
                        alt={cert.title}
                        loading="lazy"
                        className="marquee-img"
                      />
                      <div className="marquee-caption">
                        <div className="marquee-title">{cert.title}</div>
                        <div className="marquee-sub">{cert.description}</div>
                      </div>
                    </VTLink>
                  ))}
                </div>
              </div>

              <div className="marquee mt-4">
                <div className="marquee-track marquee-track-reverse">
                  {[...honorCertificates.slice().reverse(), ...honorCertificates.slice().reverse()].map((cert, idx) => (
                    <VTLink
                      key={`${cert.id}-r-${idx}`}
                      to={`/archives/honor#${cert.id}`}
                      className="marquee-item"
                      aria-label={`查看证书：${cert.title}`}
                    >
                      <img
                        src={cert.image900}
                        srcSet={`${cert.image900} 900w, ${cert.image1400} 1400w`}
                        sizes="240px"
                        alt={cert.title}
                        loading="lazy"
                        className="marquee-img"
                      />
                      <div className="marquee-caption">
                        <div className="marquee-title">{cert.title}</div>
                        <div className="marquee-sub">{cert.description}</div>
                      </div>
                    </VTLink>
                  ))}
                </div>
              </div>
            </div>
          </div>

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
