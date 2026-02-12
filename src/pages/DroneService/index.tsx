import React from 'react';
import { Plane, Video, Radio, Database, Users, Award, FileCheck, Wrench, ArrowRight, CheckCircle, MapPin, Clock, Shield, Camera, Satellite, BarChart3, Phone } from 'lucide-react';
import VTLink from '../../components/VTLink';

const DroneService: React.FC = () => {
  const serviceTypes = [
    {
      id: 'video',
      icon: <Video size={36} />,
      title: '视频巡检',
      subtitle: 'Video Inspection',
      description: '高清视频实时传输，支持4K画质录制，实现远程监控与指挥调度，大幅提升巡检效率。适用于日常巡护、应急指挥、活动记录等场景。',
      features: ['4K高清录制', '实时图传', '远程指挥', '智能追踪', '夜视功能'],
      gradient: 'from-brand-primary to-brand-accent',
    },
    {
      id: 'remote',
      icon: <Radio size={36} />,
      title: '遥感监测',
      subtitle: 'Remote Sensing',
      description: '多光谱、红外、激光雷达等多类型传感器，精准获取地表信息，支持植被分析、地形测绘、野生动物监测等应用。',
      features: ['多光谱成像', '红外热成像', '激光雷达', '地形测绘', '植被分析'],
      gradient: 'from-brand-accent to-tech-blue',
    },
    {
      id: 'relay',
      icon: <Database size={36} />,
      title: '数据中继',
      subtitle: 'Data Relay',
      description: '无人机作为空中数据中继节点，扩展监测设备通信范围，实现偏远区域数据实时回传，构建空天地一体化监测网络。',
      features: ['信号中继', '数据回传', '通信扩展', '组网能力', '远程覆盖'],
      gradient: 'from-warm to-brand-primary',
    },
  ];

  const workflow = [
    { step: '01', title: '需求调研', description: '深入了解保护地巡检需求，制定个性化解决方案' },
    { step: '02', title: '方案设计', description: '规划航线、选配设备、部署基础设施' },
    { step: '03', title: '设备部署', description: '无人机、地面站、传感器等设备安装调试' },
    { step: '04', title: '人员培训', description: '操作培训、安全规范、应急处理' },
    { step: '05', title: '运营支持', description: '持续运维、数据分析、报告输出' },
  ];

  const teamFeatures = [
    { icon: <Users size={24} />, title: '专业团队', description: '持证飞手，经验丰富，平均从业3年以上' },
    { icon: <FileCheck size={24} />, title: '规范作业', description: '标准化流程，符合民航局安全规范' },
    { icon: <Clock size={24} />, title: '快速响应', description: '7×24小时待命，紧急情况2小时到场' },
    { icon: <Shield size={24} />, title: '安全保障', description: '完善保险，风险可控，零事故记录' },
  ];

  const supportingServices = [
    {
      id: 'training',
      icon: <Award size={32} />,
      title: 'CAAC持证培训',
      description: '民航局认证的民用无人机驾驶员训练机构，提供AOPA/CAAC认证培训服务，培养专业飞手人才。',
      items: ['多旋翼驾驶员培训', '垂直起降固定翼培训', '行业应用专项培训', '执照考试辅导'],
    },
    {
      id: 'airspace',
      icon: <MapPin size={32} />,
      title: '空域申请与设备部署',
      description: '专业团队协助完成空域审批流程，提供设备选址、安装、调试一站式服务，确保合法合规飞行。',
      items: ['空域审批代办', '飞行计划申报', '设备选址规划', '基础设施部署'],
    },
    {
      id: 'maintenance',
      icon: <Wrench size={32} />,
      title: '无人机设备保养',
      description: '专业维修团队提供定期保养、故障维修、配件更换等售后服务，延长设备使用寿命。',
      items: ['定期保养服务', '故障诊断维修', '原厂配件供应', '设备升级服务'],
    },
  ];

  const scenarios = [
    {
      icon: <Camera size={32} />,
      title: '野生动植物监测',
      description: '通过高空视角监测野生动物活动轨迹、种群数量，以及珍稀植物分布情况，不打扰自然生态。',
    },
    {
      icon: <Satellite size={32} />,
      title: '生态环境评估',
      description: '利用多光谱和红外传感器，评估植被健康状况、水体质量、土地利用变化等生态环境指标。',
    },
    {
      icon: <BarChart3 size={32} />,
      title: '科研数据采集',
      description: '为科研机构提供高精度地理信息数据，支持生物多样性研究、生态系统监测等科研项目。',
    },
    {
      icon: <Shield size={32} />,
      title: '应急巡查响应',
      description: '森林火灾、非法入侵、自然灾害等紧急情况下的快速响应，提供实时态势感知。',
    },
  ];

  const stats = [
    { value: '10000+', label: '飞行架次' },
    { value: '5000+', label: '巡检小时' },
    { value: '80+', label: '服务保护地' },
    { value: '99.5%', label: '任务成功率' },
  ];

  return (
    <div className="min-h-screen bg-surface">
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-brand-primary/5 to-transparent pointer-events-none" />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-brand-primary/25 mb-6">
                <Plane size={16} className="text-brand-primary" />
                <span className="text-sm text-muted/80">无人机服务</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-ink">专业</span>
                <span className="eco-gradient-text">无人机</span>
                <span className="text-ink">巡检服务</span>
              </h1>
              <p className="text-lg md:text-xl text-muted/75 max-w-2xl leading-relaxed mb-8">
                依托自主研发的犀鸟系列无人机和专业外业团队，为自然保护地提供空地协同的智慧巡检解决方案。外业队伍专业可靠，标准化作业流程，多类成果产出，报告制作规范完整。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <VTLink to="/contact" className="btn-primary inline-flex items-center gap-2">
                  <span>预约服务</span>
                  <ArrowRight size={18} />
                </VTLink>
                <VTLink to="/solutions" className="btn-secondary inline-flex items-center gap-2">
                  <span>查看解决方案</span>
                </VTLink>
              </div>
            </div>
            
            <div className="md:col-span-5">
              <div className="glass-card p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <div className="text-sm text-muted/70 mb-4">服务数据</div>
                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl md:text-3xl font-bold tech-gradient-text">
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

      {/* 应用场景 */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              应用场景
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-brand-accent to-transparent mx-auto mb-4" />
            <p className="text-muted/75 max-w-2xl mx-auto">
              多样化的无人机应用场景，满足自然保护地各类巡检监测需求
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {serviceTypes.map((service) => (
              <div
                key={service.id}
                className="glass-card-hover p-6 md:p-8 relative group"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient}`} />
                <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`} />
                
                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 shadow-glow-sm`}>
                    <span className="text-ink">{service.icon}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-ink mb-1">
                    {service.title}
                  </h3>
                  <p className="text-xs text-muted/60 mb-4 font-english tracking-wider">{service.subtitle}</p>
                  
                  <p className="text-muted/75 text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs rounded-full bg-surface-2 text-muted/80 border border-border"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 典型应用 */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-surface-2">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              典型应用
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-brand-primary to-transparent mx-auto mb-4" />
            <p className="text-muted/75 max-w-2xl mx-auto">
              在自然保护地管理中的实际应用场景
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scenarios.map((scenario, index) => (
              <div
                key={index}
                className="glass-card p-6 group hover:border-brand-primary/30 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-4 group-hover:shadow-glow transition-shadow">
                  {scenario.icon}
                </div>
                <h3 className="text-lg font-semibold text-ink mb-2">{scenario.title}</h3>
                <p className="text-sm text-muted/70 leading-relaxed">{scenario.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 服务流程 */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              服务流程
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-brand-primary to-transparent mx-auto mb-4" />
            <p className="text-muted/75 max-w-2xl mx-auto">
              标准化的服务流程，确保每个项目高质量交付
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-brand-primary/30 via-brand-accent/30 to-brand-primary/30 -translate-y-1/2" />
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {workflow.map((item, index) => (
                <div key={index} className="relative">
                  <div className="glass-card p-6 text-center relative z-10 group hover:border-brand-primary/30 transition-all">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center mx-auto mb-4 text-ink font-bold shadow-glow-sm">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-semibold text-ink mb-2">{item.title}</h3>
                    <p className="text-sm text-muted/70">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 外业队伍 */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-surface-2">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              外业队伍
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-warm to-transparent mx-auto mb-4" />
            <p className="text-muted/75 max-w-2xl mx-auto">
              专业可靠的外业团队，保障每一次飞行任务安全高效完成
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {teamFeatures.map((feature, index) => (
              <div
                key={index}
                className="glass-card p-6 text-center group hover:border-warm/30 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-warm/10 flex items-center justify-center mx-auto mb-4 text-warm group-hover:shadow-glow transition-shadow">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-ink mb-2">{feature.title}</h3>
                <p className="text-sm text-muted/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 配套服务 */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              配套服务
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-brand-accent to-transparent mx-auto mb-4" />
            <p className="text-muted/75 max-w-2xl mx-auto">
              全方位配套服务支持，让无人机应用更简单
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {supportingServices.map((service) => (
              <div
                key={service.id}
                className="glass-card p-6 md:p-8 group hover:border-brand-accent/30 transition-all"
              >
                <div className="inline-flex p-3 rounded-xl bg-brand-accent/10 text-brand-accent mb-5">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-ink mb-3">
                  {service.title}
                </h3>
                
                <p className="text-muted/75 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted/80">
                      <CheckCircle size={16} className="text-brand-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-surface-2">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <Plane size={48} className="text-brand-primary mx-auto mb-6 opacity-60" />
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6">
            开启智慧巡检新时代
          </h2>
          <p className="text-muted/75 text-lg mb-8 max-w-2xl mx-auto">
            让无人机成为您的空中助手，高效、安全、智能地守护每一片自然保护地。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <VTLink to="/contact" className="btn-primary inline-flex items-center gap-2">
              <Phone size={18} />
              <span>立即咨询</span>
            </VTLink>
            <VTLink to="/archives" className="btn-secondary inline-flex items-center gap-2">
              <Plane size={18} />
              <span>了解产品</span>
            </VTLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DroneService;
