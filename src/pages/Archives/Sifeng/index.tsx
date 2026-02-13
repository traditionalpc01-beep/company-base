import React from 'react';
import { ArrowRight, WifiOff, Database, ShieldCheck, Brain, Eye, Lock, Cloud, Server, Layers, Activity, Bell, Camera, FileText, Key, Target, TrendingUp, Globe, ChevronRight } from 'lucide-react';
import VTLink from '../../../components/VTLink';
import hero1400 from '../../../assets/ejdrone/optimized/ejdrone_98629acd31cb_1400w.webp';
import fieldKit900 from '../../../assets/ejdrone/optimized/ejdrone_4ff8bfda3ad1_900w.webp';
import fieldKit1400 from '../../../assets/ejdrone/optimized/ejdrone_4ff8bfda3ad1_1400w.webp';
import coverageMap900 from '../../../assets/ejdrone/optimized/ejdrone_3fb59cf96c29_900w.webp';
import coverageMap1400 from '../../../assets/ejdrone/optimized/ejdrone_3fb59cf96c29_1400w.webp';

const Sifeng = () => {
  const systemArchitecture = [
    { step: '01', title: '采集端', description: '红外相机等监测设备部署于保护地关键区域，全天候采集野生动物影像数据', icon: <Camera size={24} /> },
    { step: '02', title: '基站端', description: '边缘计算节点完成数据预处理，实现本地暂存与初步分析', icon: <Server size={24} /> },
    { step: '03', title: '数据回收端', description: '智能网关实现数据安全传输，支持离线数据批量回收', icon: <Database size={24} /> },
    { step: '04', title: '云端软件', description: '云平台完成深度分析、数据管理、可视化展示与报告输出', icon: <Cloud size={24} /> },
  ];

  const coreFunctions = [
    {
      id: 'media',
      icon: <FileText size={24} />,
      title: '智能媒体管理',
      description: '统一的媒体资源管理平台，支持海量影像数据的存储、分类、检索与共享。',
      features: ['多格式支持', '智能标签', '快速检索', '权限管理'],
    },
    {
      id: 'route',
      icon: <Layers size={24} />,
      title: '三维航线规划',
      description: '基于三维地形数据的智能航线规划，支持复杂地形下的精准巡检飞行。',
      features: ['地形分析', '智能避障', '多任务规划', '实时调整'],
    },
    {
      id: 'task',
      icon: <Bell size={24} />,
      title: '实时任务感知',
      description: '实时监控任务执行状态，智能感知异常情况并及时告警。',
      features: ['状态监控', '异常检测', '智能告警', '应急响应'],
    },
    {
      id: 'model',
      icon: <Brain size={24} />,
      title: '模型与声纹管理',
      description: 'AI模型库与声纹识别系统，支持多物种识别与声音特征分析。',
      features: ['物种识别', '声纹库管理', '模型更新', '批量处理'],
    },
  ];

  const aiCapabilities = [
    { value: '200+', label: '识别物种数', icon: <Target size={20} /> },
    { value: '≥95%', label: '综合识别准确率', icon: <Eye size={20} /> },
    { value: '24/7', label: '全天候监测', icon: <Activity size={20} /> },
    { value: '1000+', label: 'TB存储容量', icon: <Database size={20} /> },
  ];

  const securityFeatures = [
    { icon: <Lock size={20} />, title: '数据加密上传', description: '全程SSL加密传输，确保数据传输安全' },
    { icon: <Cloud size={20} />, title: '云端安全存储', description: '多重备份机制，保障数据永不丢失' },
    { icon: <ShieldCheck size={20} />, title: '私有化部署', description: '支持企业私有化部署，数据完全自主可控' },
    { icon: <Key size={20} />, title: '权限精细管理', description: '多级权限体系，满足企业合规要求' },
  ];

  const achievements = [
    { title: '珍稀物种数量统计', description: '自动统计各监测区域的珍稀物种分布与数量变化' },
    { title: '结构化生态报告', description: '将海量影像数据转化为可读的生态分析报告' },
    { title: '物种活动轨迹', description: '记录并分析野生动物的活动规律与迁徙路径' },
    { title: '生态环境评估', description: '基于监测数据的生态环境健康状况评估' },
  ];

  return (
    <div className="min-h-screen bg-surface">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-pattern opacity-40" />

      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero1400} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface/90 to-surface" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-brand-primary/25 mb-6">
            <Database size={16} className="text-brand-primary" />
            <span className="text-sm text-muted/80">档案中心 · 系统</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-5">
            <span className="text-ink/85">司风数据回收管理系统</span>
          </h1>

          <p className="text-muted/75 text-lg md:text-xl max-w-4xl leading-relaxed">
            面向复杂地形与弱网盲区场景的数据回收系统。在传统生态监测领域，地形复杂、网络覆盖盲区多、基站建设难度大等问题长期存在，数据回收常因网络中断而面临丢失或效率低下的挑战。
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <WifiOff size={20} />, title: '弱网可用', desc: '适配弱网/无网环境的数据暂存与回收。' },
              { icon: <Database size={20} />, title: '数据闭环', desc: '回收、校验、归档与可追溯管理。' },
              { icon: <ShieldCheck size={20} />, title: '可靠运行', desc: '提升外业数据回收的稳定性与安全性。' },
            ].map((x) => (
              <div key={x.title} className="feature-card">
                <div className="flex items-start gap-4">
                  <div className="icon-box text-brand-primary">{x.icon}</div>
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
              <span>咨询部署与试用</span>
              <ArrowRight size={18} />
            </VTLink>
          </div>
        </div>
      </section>

      <section className="relative -mt-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {[
              {
                title: '外业设备与回收组件',
                src: fieldKit1400,
                srcSet: `${fieldKit900} 900w, ${fieldKit1400} 1400w`,
                span: 'md:col-span-7',
              },
              {
                title: '多区域部署与服务覆盖',
                src: coverageMap1400,
                srcSet: `${coverageMap900} 900w, ${coverageMap1400} 1400w`,
                span: 'md:col-span-5',
              },
            ].map((x) => (
              <div key={x.title} className={`${x.span} glass-card overflow-hidden`}>
                <div className="relative">
                  <img
                    src={x.src}
                    srcSet={x.srcSet}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    alt={x.title}
                    loading="lazy"
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-surface/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="text-sm font-semibold text-ink/95">{x.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 系统架构 */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-surface-2">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              系统架构
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-brand-primary to-transparent mx-auto mb-4" />
            <p className="text-muted/75 max-w-2xl mx-auto">
              端云协同的分布式架构，实现从数据采集到智能分析的全链路覆盖
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {systemArchitecture.map((item, index) => (
              <div key={item.step} className="glass-card p-6 relative group hover:border-brand-primary/30 transition-all">
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center text-ink text-sm font-bold">
                  {item.step}
                </div>
                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-4 group-hover:shadow-glow transition-shadow">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-ink mb-2">{item.title}</h3>
                <p className="text-sm text-muted/70 leading-relaxed">{item.description}</p>
                {index < systemArchitecture.length - 1 && (
                  <ChevronRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-muted/30" size={20} />
                )}
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
              核心功能
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-brand-accent to-transparent mx-auto mb-4" />
            <p className="text-muted/75 max-w-2xl mx-auto">
              强大的核心功能模块，满足生态监测多样化需求
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {coreFunctions.map((func) => (
              <div key={func.id} className="glass-card-hover p-6 md:p-8 relative group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent flex-shrink-0 group-hover:shadow-glow transition-shadow">
                    {func.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-ink mb-2">{func.title}</h3>
                    <p className="text-sm text-muted/70">{func.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {func.features.map((feature, idx) => (
                    <span key={idx} className="px-3 py-1 text-xs rounded-full bg-surface-2 text-muted/80 border border-border">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI识别能力 */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-surface-2 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              AI智能识别
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-warm to-transparent mx-auto mb-4" />
            <p className="text-muted/75 max-w-2xl mx-auto">
              深度学习算法驱动的物种识别系统，实现野生动物的自动监测与分类
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {aiCapabilities.map((cap, index) => (
              <div key={index} className="glass-card p-6 text-center group hover:border-warm/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-warm/10 flex items-center justify-center mx-auto mb-4 text-warm group-hover:shadow-glow transition-shadow">
                  {cap.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-warm mb-2">{cap.value}</div>
                <div className="text-sm text-muted/70">{cap.label}</div>
              </div>
            ))}
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <Brain size={24} className="text-warm" />
              <h3 className="text-xl font-bold text-ink">AI识别技术特点</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Target size={18} className="text-brand-primary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-ink/90">物种覆盖广泛</div>
                  <div className="text-sm text-muted/70">支持超过200种野生动物的自动识别</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Eye size={18} className="text-brand-primary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-ink/90">高准确率</div>
                  <div className="text-sm text-muted/70">综合识别准确率达到95%以上</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Activity size={18} className="text-brand-primary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-ink/90">实时处理</div>
                  <div className="text-sm text-muted/70">支持海量数据的实时分析与处理</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp size={18} className="text-brand-primary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-ink/90">持续进化</div>
                  <div className="text-sm text-muted/70">模型持续优化，识别能力不断增强</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 安全与部署 */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              安全与部署
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-brand-accent to-transparent mx-auto mb-4" />
            <p className="text-muted/75 max-w-2xl mx-auto">
              全方位的数据安全保障与灵活的部署方案
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="glass-card p-6 text-center group hover:border-brand-primary/30 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center mx-auto mb-4 text-brand-primary group-hover:shadow-glow transition-shadow">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-ink mb-2">{feature.title}</h3>
                <p className="text-sm text-muted/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 取得成效 */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-surface-2">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              取得成效
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-brand-primary to-transparent mx-auto mb-4" />
            <p className="text-muted/75 max-w-2xl mx-auto">
              为生态保护工作提供数据支撑与决策依据
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((item, index) => (
              <div key={index} className="glass-card p-6 group hover:border-brand-primary/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-4 text-brand-primary group-hover:shadow-glow transition-shadow">
                  <Globe size={24} />
                </div>
                <h3 className="text-lg font-semibold text-ink mb-2">{item.title}</h3>
                <p className="text-sm text-muted/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6">
            开启智能监测新体验
          </h2>
          <p className="text-muted/75 text-lg mb-8 max-w-2xl mx-auto">
            让AI技术赋能生态监测，实现野生动物的自动化、智能化管理。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <VTLink to="/contact" className="btn-primary inline-flex items-center gap-2">
              <span>咨询方案</span>
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

export default Sifeng;
