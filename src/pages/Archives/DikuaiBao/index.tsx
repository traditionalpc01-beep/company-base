import React from 'react';
import { Map, ArrowRight, LayoutDashboard, Layers, FileSpreadsheet, MapPin, Upload, Search, Filter, BarChart3, FileText, CheckCircle, Target, Globe, Users, TrendingUp } from 'lucide-react';
import VTLink from '../../../components/VTLink';
import hero1400 from '../../../assets/ejdrone/optimized/ejdrone_6f3d473b8444_1400w.webp';

const DikuaiBao = () => {
  const features = [
    {
      id: 'land',
      icon: <MapPin size={24} />,
      title: '地块边界管理',
      description: '精准的地块边界绘制与编辑，支持多边形绘制、坐标导入、边界调整等功能。',
      details: ['多边形绘制', '坐标批量导入', '边界智能修正', '历史边界回溯'],
    },
    {
      id: 'attribute',
      icon: <Layers size={24} />,
      title: '属性数据管理',
      description: '完善的地块属性信息管理，种植作物、土壤类型、灌溉方式等多维度数据记录。',
      details: ['自定义字段', '批量编辑', '历史变更记录', '数据校验'],
    },
    {
      id: 'status',
      icon: <TrendingUp size={24} />,
      title: '生长状态跟踪',
      description: '实时跟踪地块生长状态，记录播种、施肥、收获等关键农事活动。',
      details: ['农事记录', '生长周期管理', '产量统计', '趋势分析'],
    },
    {
      id: 'collab',
      icon: <Users size={24} />,
      title: '团队协作',
      description: '支持多人协作编辑，权限分级管理，任务分配与进度跟踪。',
      details: ['多用户协作', '权限管理', '任务分配', '操作日志'],
    },
  ];

  const coreFunctions = [
    { icon: <MapPin size={20} />, title: '地块标绘', description: '精准绘制地块边界' },
    { icon: <Upload size={20} />, title: '数据导入', description: '支持多种格式导入' },
    { icon: <Search size={20} />, title: '智能检索', description: '快速定位目标地块' },
    { icon: <Filter size={20} />, title: '灵活筛选', description: '多维度条件筛选' },
    { icon: <BarChart3 size={20} />, title: '统计分析', description: '数据可视化呈现' },
    { icon: <FileText size={20} />, title: '报表导出', description: '一键生成专业报表' },
  ];

  const usageScenarios = [
    { title: '农业普查', description: '快速掌握辖区内地块分布与种植情况' },
    { title: '土地流转', description: '规范土地流转程序，保留完整地块档案' },
    { title: '农业补贴', description: '精准核查种植面积，发放补贴有据可依' },
    { title: '灾害评估', description: '快速统计受灾面积，评估灾害损失' },
    { title: '规划分析', description: '支持农业规划与决策分析' },
    { title: '权属管理', description: '明晰土地权属，减少纠纷' },
  ];

  const stats = [
    { value: '50000+', label: '管理地块', icon: <MapPin size={20} /> },
    { value: '1000+', label: '服务用户', icon: <Users size={20} /> },
    { value: '30+', label: '覆盖县域', icon: <Globe size={20} /> },
    { value: '99.9%', label: '数据准确率', icon: <Target size={20} /> },
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-brand-accent/25 mb-6">
            <Map size={16} className="text-brand-accent" />
            <span className="text-sm text-muted/80">档案中心 · 工具</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-5">
            <span className="text-ink/85">地块宝</span>
          </h1>
          <p className="text-muted/75 text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
            智能农地管理工具，面向地块与空间数据的快速记录、汇总与管理，支持外业协作与数据沉淀。
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Layers size={20} />, title: '地块管理', desc: '面向地块边界、属性与状态的统一管理。' },
              { icon: <LayoutDashboard size={20} />, title: '协同作业', desc: '支持外业记录与团队协作的作业流程。' },
              { icon: <FileSpreadsheet size={20} />, title: '成果汇总', desc: '产出标准化表格与可用数据资产。' },
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
              <span>咨询与试用</span>
              <ArrowRight size={18} />
            </VTLink>
          </div>
        </div>
      </section>

      {/* 核心功能 */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-surface-2">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              核心功能
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-brand-accent to-transparent mx-auto mb-4" />
            <p className="text-muted/75 max-w-2xl mx-auto">
              强大的功能模块，满足农地管理全场景需求
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {coreFunctions.map((func, index) => (
              <div key={index} className="glass-card p-5 text-center group hover:border-brand-accent/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center mx-auto mb-3 text-brand-accent group-hover:shadow-glow transition-shadow">
                  {func.icon}
                </div>
                <h3 className="text-sm font-semibold text-ink mb-1">{func.title}</h3>
                <p className="text-xs text-muted/70 leading-relaxed">{func.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 功能特点 */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              功能特点
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-brand-primary to-transparent mx-auto mb-4" />
            <p className="text-muted/75 max-w-2xl mx-auto">
              全方位满足农地管理各项需求
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div key={feature.id} className="glass-card-hover p-6 md:p-8 relative group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent flex-shrink-0 group-hover:shadow-glow transition-shadow">
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

      {/* 应用场景 */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-surface-2">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              应用场景
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-brand-accent to-transparent mx-auto mb-4" />
            <p className="text-muted/75 max-w-2xl mx-auto">
              多场景适配，为农业管理提供全方位支持
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {usageScenarios.map((scenario, index) => (
              <div key={index} className="glass-card p-5 flex items-start gap-3 group hover:border-brand-accent/30 transition-all">
                <CheckCircle size={18} className="text-brand-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-base font-semibold text-ink mb-1">{scenario.title}</h3>
                  <p className="text-sm text-muted/70">{scenario.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 数据统计 */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              应用数据
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
            开启智慧农业管理
          </h2>
          <p className="text-muted/75 text-lg mb-8 max-w-2xl mx-auto">
            地块宝——让每一块土地都清晰可见，让农业管理更加轻松高效。
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

export default DikuaiBao;
