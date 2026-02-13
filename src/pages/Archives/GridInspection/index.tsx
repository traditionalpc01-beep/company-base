import React from 'react';
import { LayoutGrid, ArrowRight, Video, Satellite, Repeat, ShieldCheck, Layers, Users, Calendar, Folder, AlertTriangle, Brain, Database, Monitor, Smartphone, Globe, ChevronRight, MapPin, Plane, Building2, Wind, Leaf, Zap, Cpu, Wifi, Radio, Cloud, Server, Compass } from 'lucide-react';
import VTLink from '../../../components/VTLink';
import hero1400 from '../../../assets/ejdrone/optimized/ejdrone_f3662cfd1dfc_1400w.webp';

const GridInspection = () => {
  const systemComponents = [
    {
      id: 'web',
      icon: <Monitor size={24} />,
      title: '一图统管系统',
      description: 'WEB端/大屏端可视化管理系统，全域态势一屏掌握',
      platforms: ['WEB管理后台', '大屏展示中心', '数据可视化'],
    },
    {
      id: 'app',
      icon: <Smartphone size={24} />,
      title: '移动端APP',
      description: '事件处理助手移动端，巡护人员随身工具',
      platforms: ['任务接收', '事件上报', '巡护记录', '实时通讯'],
    },
    {
      id: 'algo',
      icon: <Brain size={24} />,
      title: '算法模型平台',
      description: 'AI智能识别与模型部署平台，赋能业务智能决策',
      platforms: ['模型管理', '算法调度', '结果分析', '持续优化'],
    },
  ];

  const coreModules = [
    { icon: <Layers size={20} />, title: '网格管理', description: '划分巡护网格，明确责任边界，支持多级网格体系' },
    { icon: <Users size={20} />, title: '人员管理', description: '巡护人员信息管理，权限分配与角色配置' },
    { icon: <Calendar size={20} />, title: '排班管理', description: '智能排班系统，支持多班组轮换与临时调度' },
    { icon: <Folder size={20} />, title: '任务管理', description: '任务创建、分配、执行全流程管理' },
    { icon: <AlertTriangle size={20} />, title: '事件管理', description: '事件上报、派发、处置、复核闭环管理' },
    { icon: <Brain size={20} />, title: 'AI识别', description: '智能识别异常情况，自动分类与预警' },
    { icon: <Database size={20} />, title: '数据管理', description: '巡护数据统一存储、分析与可视化' },
    { icon: <MapPin size={20} />, title: '小程序', description: '轻量化小程序，支持快速访问与操作' },
  ];

  const systemArchitecture = [
    { 
      layer: '显示层', 
      color: 'from-brand-primary to-brand-accent',
      items: ['WEB端/大屏端', 'APP移动端', '小程序'],
      description: '多终端统一呈现'
    },
    { 
      layer: '业务层', 
      color: 'from-brand-accent to-tech-blue',
      items: ['网格管理', '事件管理', '航线管理', '虚拟座舱', '媒体库'],
      description: '核心业务流程处理'
    },
    { 
      layer: '算法层', 
      color: 'from-warm to-brand-primary',
      items: ['无人机建模引擎', 'AI智能识别', '图像分析算法'],
      description: '智能分析能力支撑'
    },
    { 
      layer: '控制层', 
      color: 'from-tech-blue to-brand-accent',
      items: ['无人机控制系统', '航线规划', '飞行监控'],
      description: '设备控制与任务调度'
    },
    { 
      layer: '采集层', 
      color: 'from-brand-primary to-warm',
      items: ['无人机机场', '高清摄像头', '红外传感器'],
      description: '多源数据采集'
    },
    { 
      layer: '数据层', 
      color: 'from-brand-accent to-warm',
      items: ['影像数据', '正射模型', '网格数据', '事件数据'],
      description: '数据存储与管理'
    },
  ];

  const businessScenarios = [
    {
      icon: <Building2 size={32} />,
      title: '智慧城市',
      description: '城市网格化管理与无人机巡检相结合，实现城市精细化管理，提升城市治理效能。',
      features: ['违建巡查', '市容管理', '交通监控', '应急响应'],
    },
    {
      icon: <Zap size={32} />,
      title: '能源运维',
      description: '针对电力线路、光伏电站、风电场等能源设施的智能化巡检解决方案。',
      features: ['线路巡检', '设备检测', '故障预警', '维护决策'],
    },
    {
      icon: <Leaf size={32} />,
      title: '自然保护地',
      description: '面向自然保护地的生态巡护与监测系统，助力生物多样性保护。',
      features: ['野生动物监测', '森林防火', '生态评估', '入侵物种检测'],
    },
  ];

  const stats = [
    { value: '50+', label: '覆盖网格数', icon: <Layers size={20} /> },
    { value: '1000+', label: '巡护任务', icon: <Folder size={20} /> },
    { value: '99.9%', label: '系统可用率', icon: <Server size={20} /> },
    { value: '24/7', label: '实时监控', icon: <Monitor size={20} /> },
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-brand-accent/25 mb-6">
            <LayoutGrid size={16} className="text-brand-accent" />
            <span className="text-sm text-muted/80">档案中心 · 系统</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-5">
            <span className="text-ink/85">网格化无人机巡检系统</span>
          </h1>

          <p className="text-muted/75 text-lg md:text-xl max-w-4xl leading-relaxed">
            一款综合性的无人机巡检全流程治理管理系统，面向自然保护地巡护监测任务，支持网格化管理、自动分析与事件回报，形成巡护闭环。
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: <Video size={20} />, title: '视频巡检', desc: '高频巡检与现场回传。' },
              { icon: <Satellite size={20} />, title: '遥感监测', desc: '多源遥感与影像成果产出。' },
              { icon: <Repeat size={20} />, title: '数据中继', desc: '任务数据收集、回收与中继。' },
              { icon: <ShieldCheck size={20} />, title: '治理闭环', desc: '事件上报、处置、复盘可追溯。' },
            ].map((x) => (
              <div key={x.title} className="feature-card">
                <div className="flex items-start gap-4">
                  <div className="icon-box text-brand-accent">{x.icon}</div>
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
              <span>咨询方案与试用</span>
              <ArrowRight size={18} />
            </VTLink>
          </div>
        </div>
      </section>

      {/* 系统组成 */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-surface-2">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              系统组成
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-brand-accent to-transparent mx-auto mb-4" />
            <p className="text-muted/75 max-w-2xl mx-auto">
              三大核心组件，构建立体化巡检管理体系
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {systemComponents.map((comp) => (
              <div key={comp.id} className="glass-card-hover p-6 md:p-8 relative group">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${comp.id === 'web' ? 'from-brand-primary to-brand-accent' : comp.id === 'app' ? 'from-brand-accent to-tech-blue' : 'from-warm to-brand-primary'}`} />
                <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-5 group-hover:shadow-glow transition-shadow">
                  {comp.icon}
                </div>
                <h3 className="text-xl font-bold text-ink mb-3">{comp.title}</h3>
                <p className="text-sm text-muted/70 mb-4">{comp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {comp.platforms.map((platform, idx) => (
                    <span key={idx} className="px-3 py-1 text-xs rounded-full bg-surface-2 text-muted/80 border border-border">
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 系统架构 */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              系统架构
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-brand-primary to-transparent mx-auto mb-4" />
            <p className="text-muted/75 max-w-2xl mx-auto">
              六层架构体系，实现端到端的巡检业务闭环
            </p>
          </div>

          <div className="space-y-4">
            {systemArchitecture.map((layer, index) => (
              <div key={layer.layer} className="glass-card p-6 group hover:border-brand-primary/30 transition-all">
                <div className="flex items-center gap-4">
                  <div className={`w-24 h-12 rounded-lg bg-gradient-to-br ${layer.color} flex items-center justify-center text-ink font-bold text-sm flex-shrink-0`}>
                    {layer.layer}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {layer.items.map((item, idx) => (
                        <span key={idx} className="px-3 py-1 text-xs rounded-full bg-surface-2 text-muted/80 border border-border">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-sm text-muted/60 hidden md:block w-32 text-right">
                    {layer.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 核心模块 */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-surface-2">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              核心模块
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-brand-accent to-transparent mx-auto mb-4" />
            <p className="text-muted/75 max-w-2xl mx-auto">
              完善的功能模块，满足各类巡检业务需求
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {coreModules.map((module, index) => (
              <div key={index} className="glass-card p-5 group hover:border-brand-accent/30 transition-all">
                <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-3 group-hover:shadow-glow transition-shadow">
                  {module.icon}
                </div>
                <h3 className="text-base font-semibold text-ink mb-1">{module.title}</h3>
                <p className="text-xs text-muted/70 leading-relaxed">{module.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 业务场景 */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              业务场景
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-brand-primary to-transparent mx-auto mb-4" />
            <p className="text-muted/75 max-w-2xl mx-auto">
              多场景适配，为不同行业提供针对性解决方案
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {businessScenarios.map((scenario, index) => (
              <div key={index} className="glass-card-hover p-6 md:p-8 relative group">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${index === 0 ? 'from-brand-primary to-brand-accent' : index === 1 ? 'from-warm to-brand-primary' : 'from-brand-accent to-tech-blue'}`} />
                <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-5 group-hover:shadow-glow transition-shadow">
                  {scenario.icon}
                </div>
                <h3 className="text-xl font-bold text-ink mb-3">{scenario.title}</h3>
                <p className="text-sm text-muted/70 mb-4 leading-relaxed">{scenario.description}</p>
                <div className="flex flex-wrap gap-2">
                  {scenario.features.map((feature, idx) => (
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

      {/* 系统数据 */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-surface-2 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              系统能力
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-warm to-transparent mx-auto mb-4" />
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

      {/* CTA */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6">
            开启智慧巡检新模式
          </h2>
          <p className="text-muted/75 text-lg mb-8 max-w-2xl mx-auto">
            网格化管理与无人机巡检深度融合，实现巡护工作的智能化、精细化、闭环化。
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

export default GridInspection;
