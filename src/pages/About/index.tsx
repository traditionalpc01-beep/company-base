import React from 'react';
import { Leaf, Target, Eye, Heart, Users, Award, MapPin, ArrowRight, Plane, Cpu, Shield, BookOpen, Database } from 'lucide-react';
import VTLink from '../../components/VTLink';
import ScrollCarousel from '../../components/ui/ScrollCarousel';
import { siteContent } from '../../content';
import { honorCertificates } from '../../assets/ejdrone/honors';
import aboutHero900 from '../../assets/ejdrone/optimized/ejdrone_adfce8869caf_900w.webp';
import aboutHero1400 from '../../assets/ejdrone/optimized/ejdrone_adfce8869caf_1400w.webp';

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
  const honorPreview = honorCertificates.slice(0, 6);
  const honorCarousel = honorPreview.length > 6 ? honorPreview : [...honorPreview, ...honorPreview];
  const milestoneCarousel = milestones.length > 8 ? milestones : [...milestones, ...milestones];

  const team = [
    {
      title: '员工规模',
      count: '35',
      icon: <Users size={24} />,
      description: '多学科背景的研发与服务团队',
      color: 'tech',
    },
    {
      title: '中级职称',
      count: '7',
      icon: <Cpu size={24} />,
      description: '软件开发、数据与科研管理等方向',
      color: 'wildlife',
    },
    {
      title: '高级职称',
      count: '1',
      icon: <Plane size={24} />,
      description: '深耕自然保护与技术应用交叉领域',
      color: 'plant',
    },
  ];

  const stats = [
    { value: '2017', label: '成立年份', icon: <Shield size={20} />, toneText: 'text-brand-primary' },
    { value: '1000㎡', label: '研发中心', icon: <MapPin size={20} />, toneText: 'text-brand-accent' },
    { value: '30+', label: '合作机构', icon: <Users size={20} />, toneText: 'text-warm' },
    { value: '100+', label: '知识产权', icon: <Award size={20} />, toneText: 'text-brand-primary' },
  ];

  const solutionAreas = [
    {
      icon: <Plane size={32} />,
      title: '基于空地协同的自然保护地无人机巡检解决方案',
      subtitle: 'Air-Ground Coordination',
      description: '构建自然保护地空天地一体化监测网络体系，无人机数据收集回收与云端物联网联动，让保护地管理更智慧。',
      tone: 'brand',
      bullets: ['视频巡检', '遥感监测', '数据中继', '无人机数据处理与成果产出'],
    },
    {
      icon: <BookOpen size={32} />,
      title: '自然保护地宣教体系建设解决方案',
      subtitle: 'Nature Education',
      description: '以在地服务为目标，以当地自然资源为依托，以开展实地调查为支撑，推动保护地自然教育基地建设，提升保护地影响力。',
      tone: 'warm',
      bullets: ['场域打造（标识标牌系统等）', '活动策划与解说体系', '平台支撑与多元参与'],
    },
    {
      icon: <Database size={32} />,
      title: '自然保护地信息化系统建设解决方案',
      subtitle: 'Information System',
      description: '综合管理系统实现保护地管理智慧化，支持科研监测、巡护监测与线上导览，并可面向自然保护从业者提供定制软件开发。',
      tone: 'accent',
      bullets: ['翼查记（科研监测/综合考察）', '翼地巡（网格管理/自动分析/事件回报）', '自然脉搏（线上导览/自然教育）', '定制开发'],
    },
  ];

  const toneStyles = {
    brand: {
      badgeBg: 'bg-brand-primary/10',
      badgeText: 'text-brand-primary',
      hoverBorder: 'hover:border-brand-primary/30',
      dot: 'bg-brand-primary',
    },
    warm: {
      badgeBg: 'bg-warm/10',
      badgeText: 'text-warm',
      hoverBorder: 'hover:border-warm/30',
      dot: 'bg-warm',
    },
    accent: {
      badgeBg: 'bg-brand-accent/10',
      badgeText: 'text-brand-accent',
      hoverBorder: 'hover:border-brand-accent/30',
      dot: 'bg-brand-accent',
    },
  } as const;

  const colorStyles = {
    brand: {
      bg: 'bg-brand-primary/10',
      text: 'text-brand-primary',
      hoverBorder: 'hover:border-brand-primary/30',
      hoverShadow: 'group-hover:shadow-glow',
      dot: 'bg-brand-primary',
    },
    wildlife: {
      bg: 'bg-wildlife/10',
      text: 'text-wildlife',
      hoverBorder: 'hover:border-wildlife/30',
      hoverShadow: 'group-hover:shadow-glow-wildlife',
      dot: 'bg-wildlife',
    },
    plant: {
      bg: 'bg-plant/10',
      text: 'text-plant',
      hoverBorder: 'hover:border-plant/30',
      hoverShadow: 'group-hover:shadow-glow-plant',
      dot: 'bg-plant',
    },
    tech: {
      bg: 'bg-brand-accent/10',
      text: 'text-brand-accent',
      hoverBorder: 'hover:border-brand-accent/30',
      hoverShadow: 'group-hover:shadow-glow-accent',
      dot: 'bg-brand-accent',
    },
  } as const;

  return (
    <div className="min-h-screen bg-surface">
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-96 bg-brand-primary/5 pointer-events-none" />
      
      <section id="intro" className="relative pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-brand-primary/25 mb-6">
                <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                <span className="text-sm text-muted/80">关于我们</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5">
                <span className="eco-gradient-text">心有翼</span>
                <span className="text-ink">，</span>
                <span className="tech-gradient-text">境无界</span>
              </h1>
              <p className="text-lg md:text-xl text-muted/75 max-w-2xl leading-relaxed mb-6">
                广西翼界科技有限公司成立于2017年，总部位于南宁。依托科技创新与跨领域合作，为自然保护地提供创新型与精细化管理解决方案。
              </p>
              <p className="text-base text-muted/70 max-w-2xl leading-relaxed">
                已认定为国家高新技术企业（证书编号：GR202145001224），获民航局颁发《民用无人驾驶航空器经营许可证》（编号：民航通（无）企字第001755号），并取得 ISO 质量、环境与职业健康安全管理体系认证。
              </p>
            </div>
            
            <div className="md:col-span-5">
              <div className="glass-card p-6 relative overflow-hidden motion-sheen">
                <div className="absolute inset-0">
                  <img
                    src={aboutHero1400}
                    srcSet={`${aboutHero900} 900w, ${aboutHero1400} 1400w`}
                    sizes="(min-width: 768px) 40vw, 100vw"
                    alt=""
                    className="w-full h-full object-cover opacity-20"
                  />
                  <div className="absolute inset-0 bg-surface/70" />
                </div>
                <div className="relative z-10">
                  <div className="text-sm text-muted/70 mb-4">公司数据</div>
                  <div className="grid grid-cols-2 gap-4 staggered-grid">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center p-3 rounded-xl bg-surface-2 motion-fade-up">
                        <div className={`${stat.toneText} mb-2 flex justify-center motion-float`}>
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

      <section id="solutions" className="relative py-16 px-4 sm:px-6 lg:px-8 bg-surface-2">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              解决方案
            </h2>
            <div className="w-24 h-px bg-brand-primary/40 mx-auto mb-4" />
            <p className="text-muted/75 max-w-2xl mx-auto">
              基于科技创新与跨领域合作，提供自然保护地创新性和精细化管理解决方案
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 staggered-grid">
            {solutionAreas.map((area) => {
              const tone = toneStyles[area.tone];
              return (
                <div key={area.title} className={`glass-card p-6 md:p-7 group ${tone.hoverBorder} transition-all motion-sheen`}>
                  <div className={`w-16 h-16 rounded-2xl ${tone.badgeBg} flex items-center justify-center mb-6 ${tone.badgeText} motion-float`}>
                    {area.icon}
                  </div>
                  <div className="text-xs text-muted/60 mb-1">{area.subtitle}</div>
                  <h3 className="text-xl md:text-2xl font-bold text-ink mb-4">{area.title}</h3>
                  <p className="text-sm text-muted/75 leading-relaxed mb-6">
                    {area.description}
                  </p>
                  <ul className="space-y-2">
                    {area.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-muted/70">
                        <span className={`w-1.5 h-1.5 rounded-full ${tone.dot}`} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="vision" className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6">
                企业愿景
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary flex-shrink-0 motion-float">
                    <Eye size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ink mb-2">愿景</h3>
                    <p className="text-muted/75 leading-relaxed">
                      让自然生态更美好，做客户最值得信赖的保护地精细化管理服务提供商。
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent flex-shrink-0 motion-float">
                    <Target size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ink mb-2">使命</h3>
                    <p className="text-muted/75 leading-relaxed">
                      依托科技创新与跨领域合作，提供自然保护地创新性和精细化管理解决方案。
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-warm/10 flex items-center justify-center text-warm flex-shrink-0 motion-float">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ink mb-2">价值观</h3>
                    <p className="text-muted/75 leading-relaxed">
                      科技创新、生态优先、合作共赢、专业服务。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="glass-card p-7 relative overflow-hidden motion-sheen">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-accent/10 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <Leaf size={48} className="text-brand-primary mb-6 opacity-60 motion-float" />
                  <blockquote className="text-xl md:text-2xl text-ink font-light leading-relaxed mb-4">
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

      <section id="values" className="relative py-16 px-4 sm:px-6 lg:px-8 bg-surface-2">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              核心价值观
            </h2>
            <div className="w-24 h-px bg-brand-primary/40 mx-auto" />
          </div>

          <div className="grid md:grid-cols-4 gap-5 staggered-grid">
            {values.map((value, index) => {
              const colors = colorStyles[value.color as keyof typeof colorStyles] ?? colorStyles.brand;
              return (
                <div
                  key={index}
                  className={`glass-card p-6 text-center group ${colors.hoverBorder} transition-all motion-sheen`}
                >
                  <div className={`w-14 h-14 rounded-2xl ${colors.bg} flex items-center justify-center mx-auto mb-4 ${colors.text} ${colors.hoverShadow} transition-shadow motion-float`}>
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-ink mb-2">{value.title}</h3>
                  <p className="text-sm text-muted/70">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="team" className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              核心团队
            </h2>
            <div className="w-24 h-px bg-brand-accent/40 mx-auto mb-4" />
            <p className="text-muted/75 max-w-2xl mx-auto">
              专业、敬业、创新的团队，是翼界科技最宝贵的资产
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 staggered-grid">
            {team.map((item, index) => {
              const colors = colorStyles[item.color as keyof typeof colorStyles] ?? colorStyles.brand;
              return (
                <div
                  key={index}
                  className={`glass-card p-6 md:p-7 text-center group ${colors.hoverBorder} transition-all motion-sheen`}
                >
                  <div className={`w-16 h-16 rounded-2xl ${colors.bg} flex items-center justify-center mx-auto mb-4 ${colors.text} ${colors.hoverShadow} transition-shadow motion-float`}>
                    {item.icon}
                  </div>
                  <div className={`text-4xl font-bold ${colors.text} mb-2`}>{item.count}</div>
                  <h3 className="text-lg font-semibold text-ink mb-2">{item.title}</h3>
                  <p className="text-sm text-muted/70">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="honors" className="relative py-16 px-4 sm:px-6 lg:px-8 bg-surface-2">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end mb-8">
            <div className="md:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-warm/25 mb-6">
                <Award size={16} className="text-warm" />
                <span className="text-sm text-muted/80">荣誉资质</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">权威认证与可信合规</h2>
              <div className="w-24 h-px bg-warm/40 rounded-full" />
            </div>
            <div className="md:col-span-5">
              <p className="text-muted/75 leading-relaxed">
                我们持续投入科研与产品化，获得多项权威认证与资质，形成可验证、可复用的自然保护地技术服务能力。
              </p>
            </div>
          </div>

          <ScrollCarousel
            itemWidth={220}
            gap={16}
            autoPlayMode="continuous"
            autoPlaySpeed={18}
            showIndicators={false}
            showArrows={false}
            showProgress={false}
          >
            {honorCarousel.map((cert, index) => (
              <div key={`${cert.id}-${index}`} className="flex-shrink-0" style={{ width: '220px' }}>
                <VTLink
                  to={`/archives/honor#${cert.id}`}
                  className="glass-card overflow-hidden group hover:border-brand-primary/30 transition-all motion-sheen"
                >
                  <div className="relative aspect-[3/4] bg-ink/5">
                    <img
                      src={cert.image900}
                      srcSet={`${cert.image900} 900w, ${cert.image1400} 1400w`}
                      sizes="220px"
                      alt={cert.title}
                      loading="lazy"
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-sm font-semibold text-ink/90 line-clamp-2">{cert.title}</div>
                    <div className="text-xs text-muted/70 mt-1 line-clamp-2">{cert.description}</div>
                  </div>
                </VTLink>
              </div>
            ))}
          </ScrollCarousel>

          <div className="mt-8 flex justify-center">
            <VTLink to="/archives/honor" className="btn-primary inline-flex items-center gap-2">
              <span>查看全部荣誉资质</span>
              <ArrowRight size={18} />
            </VTLink>
          </div>
        </div>
      </section>

      <section id="milestones" className="relative py-16 px-4 sm:px-6 lg:px-8 bg-surface-2">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              发展历程
            </h2>
            <div className="w-24 h-px bg-warm/40 mx-auto" />
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-brand-primary/30 via-brand-accent/30 to-wildlife/30 -translate-y-1/2" />
            
            <ScrollCarousel
              itemWidth={180}
              gap={16}
              autoPlayMode="continuous"
              autoPlaySpeed={16}
              showIndicators={false}
              showArrows={false}
              showProgress={false}
            >
              {milestoneCarousel.map((milestone, index) => (
                <div key={`${milestone.year}-${index}`} className="flex-shrink-0" style={{ width: '180px' }}>
                  <div className="glass-card p-4 md:p-6 text-center relative z-10 group hover:border-warm/30 transition-all h-full motion-sheen">
                    <div className="text-2xl font-bold text-warm mb-2">{milestone.year}</div>
                    <h3 className="text-sm font-semibold text-ink mb-1">{milestone.title}</h3>
                    <p className="text-xs text-muted/60 hidden md:block">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </ScrollCarousel>
          </div>
        </div>
      </section>

      <section id="locations" className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              办公地点
            </h2>
            <div className="w-24 h-px bg-brand-primary/40 mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-5 staggered-grid">
            {siteContent.contact.addresses.map((address, index) => (
              <div
                key={index}
                className="glass-card p-6 group hover:border-brand-primary/30 transition-all motion-sheen"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary motion-float">
                    <MapPin size={20} />
                  </div>
                  <span className="text-lg font-semibold text-ink">{address.label}</span>
                </div>
                <p className="text-sm text-muted/75">{address.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-surface-2">
        <div className="max-w-4xl mx-auto text-center">
          <Award size={48} className="text-warm mx-auto mb-6 opacity-60 motion-float" />
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6">
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
