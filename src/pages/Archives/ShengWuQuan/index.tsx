import React from 'react';
import { Mic2, ArrowRight, Waves, MapPinned, Users, Globe, Award, BookOpen, Radio, Headphones, Map, Calendar, BarChart3, Play, Star, CheckCircle, Sparkles, Target, Leaf, Camera, MessageCircle, ChevronRight, Database, Building2, Share2 } from 'lucide-react';
import VTLink from '../../../components/VTLink';
import hero1400 from '../../../assets/ejdrone/optimized/ejdrone_713c50d88180_1400w.webp';

const ShengWuQuan = () => {
  const platformFeatures = [
    {
      id: 'public',
      icon: <Users size={24} />,
      title: '公众科学参与',
      description: '面向公众开放参与式采集与共创，人人都可以是自然声音的记录者和研究者。',
      details: ['录制上传自然声音', '标注时间地点环境信息', '参与物种声纹标注', '社区互动交流'],
    },
    {
      id: 'data',
      icon: <Database size={24} />,
      title: '声景数据平台',
      description: '标准化的声景数据存储、分类与可视化，构建全国自然声音数据库。',
      details: ['标准化存储', '智能分类检索', '地图可视化展示', '数据共享交换'],
    },
    {
      id: 'activity',
      icon: <Calendar size={24} />,
      title: '导师认证与活动',
      description: '声景导师认证体系，定期发布声景探索活动，打造自然教育新体验。',
      details: ['导师资质认证', '活动发布报名', '线下活动组织', '活动成果展示'],
    },
    {
      id: 'enterprise',
      icon: <Building2 size={24} />,
      title: '企业参与',
      description: '企业可通过平台参与自然保护，建立企业社会责任新通道。',
      details: ['企业认证入驻', '排行榜展示', '环保项目资助', '品牌联动传播'],
    },
  ];

  const coreFunctions = [
    { icon: <Mic2 size={20} />, title: '声音录制', description: '专业录音工具，支持多种音频格式，保留原始声音质量' },
    { icon: <MapPinned size={20} />, title: '位置标注', description: '精准地理位置标注，关联声景与环境信息' },
    { icon: <Waves size={20} />, title: '声纹分析', description: 'AI声纹识别技术，自动识别物种特征' },
    { icon: <BookOpen size={20} />, title: '物种科普', description: '丰富的物种声音数据库，学习自然知识' },
    { icon: <Headphones size={20} />, title: '沉浸聆听', description: '高品质音频播放，身临其境感受自然' },
    { icon: <Share2 size={20} />, title: '社交分享', description: '便捷分享功能，让更多人感受自然之美' },
  ];

  const ecosystem = [
    { title: '数据采集', desc: '公众录制上传', icon: <Mic2 size={24} /> },
    { title: '活动组织', desc: '线下探索活动', icon: <Calendar size={24} /> },
    { title: '企业参与', desc: '环保项目资助', icon: <Globe size={24} /> },
    { title: '科普传播', desc: '物种知识普及', icon: <BookOpen size={24} /> },
  ];

  const stats = [
    { value: '10000+', label: '收录声音', icon: <Waves size={20} /> },
    { value: '500+', label: '物种声纹', icon: <Target size={20} /> },
    { value: '1000+', label: '认证志愿者', icon: <Users size={20} /> },
    { value: '30+', label: '合作伙伴', icon: <Globe size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-surface">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-pattern opacity-40" />

      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero1400} alt="" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface/90 to-surface" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-warm/25 mb-6">
            <Mic2 size={16} className="text-warm" />
            <span className="text-sm text-muted/80">档案中心 · 产品</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-5">
            <span className="text-ink/85">声物圈</span>
          </h1>
          <p className="text-muted/75 text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
            一个公众参与的全国自然声音数据采集平台
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Users size={20} />, title: '公众参与', desc: '面向公众开放参与式采集与共创。' },
              { icon: <Waves size={20} />, title: '声音数据', desc: '结构化采集与管理自然声音数据。' },
              { icon: <MapPinned size={20} />, title: '在地记录', desc: '结合位置与场景，沉淀可复用的样本资产。' },
            ].map((x) => (
              <div key={x.title} className="feature-card">
                <div className="flex items-start gap-4">
                  <div className="icon-box text-warm">{x.icon}</div>
                  <div>
                    <div className="text-base font-semibold text-ink/90">{x.title}</div>
                    <div className="text-sm text-muted/70 mt-2 leading-relaxed">{x.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <VTLink to="/contact" className="btn-primary inline-flex items-center gap-2">
              <span>获取演示与资料</span>
              <ArrowRight size={18} />
            </VTLink>
          </div>
        </div>
      </section>

      {/* 平台功能 */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-surface-2">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              平台功能
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-warm to-transparent mx-auto mb-4" />
            <p className="text-muted/75 max-w-2xl mx-auto">
              四大核心功能模块，构建"数据采集+活动组织+企业参与+科普传播"生态
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {platformFeatures.map((feature) => (
              <div key={feature.id} className="glass-card-hover p-6 md:p-8 relative group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-warm/10 flex items-center justify-center text-warm flex-shrink-0 group-hover:shadow-glow transition-shadow">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-ink mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted/70">{feature.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {feature.details.map((detail, idx) => (
                    <span key={idx} className="px-3 py-1 text-xs rounded-full bg-surface-2 text-muted/80 border border-border">
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 核心功能 */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              核心能力
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-brand-accent to-transparent mx-auto mb-4" />
            <p className="text-muted/75 max-w-2xl mx-auto">
              强大的技术支持，让自然声音采集更简单
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {coreFunctions.map((func, index) => (
              <div key={index} className="glass-card p-5 text-center group hover:border-warm/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-warm/10 flex items-center justify-center mx-auto mb-3 text-warm group-hover:shadow-glow transition-shadow">
                  {func.icon}
                </div>
                <h3 className="text-sm font-semibold text-ink mb-1">{func.title}</h3>
                <p className="text-xs text-muted/70 leading-relaxed">{func.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 生态闭环 */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-surface-2 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-warm/5 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              生态闭环
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-warm to-transparent mx-auto mb-4" />
            <p className="text-muted/75 max-w-2xl mx-auto">
              构建"数据采集+活动组织+企业参与+科普传播"四位一体的自然声音生态
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {ecosystem.map((item, index) => (
              <div key={index} className="glass-card p-6 text-center group hover:border-warm/30 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-warm/10 flex items-center justify-center mx-auto mb-4 text-warm group-hover:shadow-glow transition-shadow">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-ink mb-1">{item.title}</h3>
                <p className="text-sm text-muted/70">{item.desc}</p>
                {index < ecosystem.length - 1 && (
                  <ChevronRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-muted/30" size={20} />
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-warm/10 text-warm">
              <Sparkles size={16} />
              <span className="text-sm font-medium">让每个人都能成为自然声音的记录者与守护者</span>
            </div>
          </div>
        </div>
      </section>

      {/* 数据统计 */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              平台数据
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-brand-accent to-transparent mx-auto mb-4" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="glass-card p-6 text-center group hover:border-warm/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-warm/10 flex items-center justify-center mx-auto mb-4 text-warm group-hover:shadow-glow transition-shadow">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-warm mb-2">{stat.value}</div>
                <div className="text-sm text-muted/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 科普价值 */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-surface-2">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              科普价值
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-brand-primary to-transparent mx-auto mb-4" />
            <p className="text-muted/75 max-w-2xl mx-auto">
              通过声物圈，让更多人了解自然、热爱自然、保护自然
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card p-6 text-center group hover:border-warm/30 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center mx-auto mb-4 text-brand-primary group-hover:shadow-glow transition-shadow">
                <Leaf size={28} />
              </div>
              <h3 className="text-lg font-semibold text-ink mb-2">物种认知</h3>
              <p className="text-sm text-muted/70">通过声音识别物种，学习野生动物知识</p>
            </div>
            <div className="glass-card p-6 text-center group hover:border-warm/30 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 flex items-center justify-center mx-auto mb-4 text-brand-accent group-hover:shadow-glow transition-shadow">
                <Headphones size={28} />
              </div>
              <h3 className="text-lg font-semibold text-ink mb-2">声景体验</h3>
              <p className="text-sm text-muted/70">沉浸式聆听自然声音，感受生态之美</p>
            </div>
            <div className="glass-card p-6 text-center group hover:border-warm/30 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-warm/10 flex items-center justify-center mx-auto mb-4 text-warm group-hover:shadow-glow transition-shadow">
                <Globe size={28} />
              </div>
              <h3 className="text-lg font-semibold text-ink mb-2">保护行动</h3>
              <p className="text-sm text-muted/70">参与声音采集，为生态研究贡献数据</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6">
            开启声景探索之旅
          </h2>
          <p className="text-muted/75 text-lg mb-8 max-w-2xl mx-auto">
            加入声物圈，用声音记录自然，用科技守护生态，共同构建人与自然的和谐未来。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <VTLink to="/contact" className="btn-primary inline-flex items-center gap-2">
              <span>咨询合作</span>
              <ArrowRight size={18} />
            </VTLink>
            <VTLink to="/archives" className="btn-secondary inline-flex items-center gap-2">
              <span>查看更多产品</span>
            </VTLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShengWuQuan;
