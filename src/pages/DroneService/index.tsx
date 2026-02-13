import React from 'react';
import { Plane, Video, Radio, Database, Users, Award, FileCheck, Wrench, ArrowRight, CheckCircle, MapPin, Clock, Shield, Camera, Satellite, BarChart3, Phone, Mountain, Map, Image, Activity, FileText, Globe, Server, Cpu, HardDrive, Flame, Scan } from 'lucide-react';
import VTLink from '../../components/VTLink';
import heroBg from '../../assets/ejdrone/uav-service/hero-bg.jpg';
import videoInspectionImg from '../../assets/ejdrone/uav-service/video-inspection.jpg';
import remoteSensingImg from '../../assets/ejdrone/uav-service/remote-sensing.jpg';
import dataCenterImg from '../../assets/ejdrone/uav-service/data-center.jpg';
import droneFlight900 from '../../assets/ejdrone/optimized/ejdrone_98629acd31cb_900w.webp';
import droneFlight1400 from '../../assets/ejdrone/optimized/ejdrone_98629acd31cb_1400w.webp';
import fieldKit900 from '../../assets/ejdrone/optimized/ejdrone_4ff8bfda3ad1_900w.webp';
import fieldKit1400 from '../../assets/ejdrone/optimized/ejdrone_4ff8bfda3ad1_1400w.webp';
import reportSample900 from '../../assets/ejdrone/optimized/ejdrone_53a0ba36b6d8_900w.webp';
import reportSample1400 from '../../assets/ejdrone/optimized/ejdrone_53a0ba36b6d8_1400w.webp';
import coverageMap900 from '../../assets/ejdrone/optimized/ejdrone_3fb59cf96c29_900w.webp';
import coverageMap1400 from '../../assets/ejdrone/optimized/ejdrone_3fb59cf96c29_1400w.webp';

const DroneService: React.FC = () => {
  const serviceTypes = [
    {
      id: 'video',
      icon: <Video size={36} />,
      title: '视频巡检',
      subtitle: 'Video Inspection',
      description: '高清视频实时传输，支持4K画质录制，实现远程监控与指挥调度，大幅提升巡检效率。无人机从空中俯视的视角，具有大纵深、宽视角的特点，解决了低视角的视线阻挡问题，并且无人机可以快速飞达目的地。无人机搭载吊舱设备、结合合理的飞行路线设置，可以监看到自然保护地的每个角落。无人机拍摄到的视频和照片，可以回传到地面端，实时查看现场视频信息，并通过直播系统实现远程直播。',
      features: ['4K高清录制', '实时图传', '远程指挥', '智能追踪', '夜视功能'],
      gradient: 'from-brand-primary to-brand-accent',
      image: { src: videoInspectionImg, alt: '无人机视频巡检' },
    },
    {
      id: 'remote',
      icon: <Radio size={36} />,
      title: '遥感监测',
      subtitle: 'Remote Sensing',
      description: '多光谱、红外、激光雷达等多类型传感器，精准获取地表信息，支持植被分析、地形测绘、野生动物监测等应用。',
      features: ['多光谱成像', '红外热成像', '激光雷达', '地形测绘', '植被分析'],
      gradient: 'from-brand-accent to-tech-blue',
      image: { src: remoteSensingImg, alt: '无人机遥感监测' },
    },
    {
      id: 'relay',
      icon: <Database size={36} />,
      title: '数据中继',
      subtitle: 'Data Relay',
      description: '无人机作为空中数据中继节点，扩展监测设备通信范围，实现偏远区域数据实时回传，构建空天地一体化监测网络。',
      features: ['信号中继', '数据回传', '通信扩展', '组网能力', '远程覆盖'],
      gradient: 'from-warm to-brand-primary',
      image: {
        src: droneFlight1400,
        srcSet: `${droneFlight900} 900w, ${droneFlight1400} 1400w`,
        sizes: '(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw',
        alt: '无人机飞行作业',
      },
    },
    {
      id: 'auto-gateway',
      icon: <Cpu size={36} />,
      title: '智能网关与自动起降',
      subtitle: 'Smart Gateway & Auto Takeoff',
      description: '免维护的智能网关设备，实现无人机自动起降、数据自动上传、远程监控管理。适用于偏远保护地，无需专业人员值守即可完成日常巡检任务，大幅降低运营成本。',
      features: ['无人机自动起降', '免维护智能网关', '数据自动上传', '远程监控管理', '无人值守运行'],
      gradient: 'from-tech-blue to-brand-primary',
      image: {
        src: fieldKit1400,
        srcSet: `${fieldKit900} 900w, ${fieldKit1400} 1400w`,
        sizes: '(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw',
        alt: '外业设备与载机平台',
      },
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
    {
      id: 'cooperation',
      icon: <Globe size={32} />,
      title: '厂商合作',
      description: '与大疆等行业领先厂商建立战略合作，为客户提供优质的设备供应和技术支持服务。',
      items: ['原厂设备供应', '技术授权支持', '行业解决方案', '售后服务保障'],
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

  const comparisonData = {
    headers: ['对比项', '无人机视频巡检', '视频监控', '人力巡护'],
    rows: [
      { label: '覆盖能力', drone: '广泛覆盖保护地全域', video: '覆盖少数关键点位', manual: '覆盖少数关键路线' },
      { label: '即时能力', drone: '强', video: '一般', manual: '非常迟滞' },
      { label: '布点要求', drone: '广泛路口或者针对性点位', video: '需要高宽带的有线和无线网络', manual: '几乎无要求' },
      { label: '网络要求', drone: '几乎无要求', video: '需要高宽带的有线和无线网络', manual: '几乎无要求' },
      { label: '人力要求', drone: '2名飞手(或者服务外包)', video: '2名视频检查人员', manual: '20-30人的巡护队伍' },
      { label: '设备成本', drone: '100万(无人机)', video: '200-300万（视频卡口、监控塔基、基站）', manual: '30万(巡护终端、相机、望远镜)' },
      { label: '执行成本', drone: '30-50万/年', video: '基本自动化', manual: '30-50万/年(人员工资)' },
      { label: '维护成本', drone: '0/年(设备定期保养)', video: '30-50万/年', manual: '10万/年' },
    ],
  };

  const achievements = [
    {
      icon: <Image size={32} />,
      title: '720全景影像',
      description: '沉浸式全景展示保护地风貌，支持720度浏览，带来身临其境的体验',
    },
    {
      icon: <Map size={32} />,
      title: '正射模型制作',
      description: '数字正射模型（DOM），消除地形起伏影响的标准化影像',
    },
    {
      icon: <Mountain size={32} />,
      title: '三维实境建模',
      description: '高精度实景三维模型，真实还原保护地地表形态',
    },
    {
      icon: <Scan size={32} />,
      title: '贴近摄影测量',
      description: '超高分率影像采集，精细展现地表纹理和结构',
    },
    {
      icon: <Activity size={32} />,
      title: '多光谱监测',
      description: '多光谱数据采集，支持植被指数分析和生态变化监测',
    },
    {
      icon: <Flame size={32} />,
      title: '火情巡检',
      description: '红外热成像快速识别火点，实现早发现、早预警、早处置',
    },
  ];

  const workflowDetails = [
    { title: '布设控制点', description: '按照规范要求布设像控点，确保测量精度' },
    { title: '现场地形查勘', description: '实地踏勘了解地形地貌，确定最佳起飞点' },
    { title: '起降作业', description: '专业飞手操控无人机安全起降' },
    { title: '巡飞作业', description: '按照预定航线执行航摄任务' },
    { title: '执飞团队', description: '持证飞手操作，遵守航空规范' },
  ];

  const indoorWork = [
    { title: '影像和模型制作', description: '原始航摄影像处理，生成高质量数字产品' },
    { title: '地物识别和解译', description: '目视解译提取关键信息，识别变化区域' },
    { title: '模型叠加效果图件', description: '多源数据融合，生成复合分析图件' },
    { title: '视频生成', description: '视频巡检报告制作，动态展示巡检成果' },
  ];

  const dataCenterFeatures = [
    { icon: <Server size={24} />, title: '9台服务器', description: '虚拟化80个数据处理节点' },
    { icon: <HardDrive size={24} />, title: '海量存储', description: '2台存储服务器，1000TB存储容量' },
    { icon: <Cpu size={24} />, title: '高效处理', description: '日处理能力60平方公里' },
  ];

  const reportTypes = [
    {
      icon: <Video size={32} />,
      title: '视频报告制作',
      description: '依据重点区域巡查路线，采用垂直起降无人机和多旋翼无人机相结合的方式，开展定期视频巡检，最终制作巡检视频报告',
      details: ['定期巡检（每周/每月）', '垂直起降+多旋翼配合', '汇报型/展示型视频'],
    },
    {
      icon: <FileText size={32} />,
      title: '空间分析报告制作',
      description: '划分重点监测区域，对重点监测区域开展航摄，制作重点监测区域航拍正射影像图',
      details: ['正射影像图制作', '人类活动干扰信息提取', 'SHP格式矢量图层', '图文报告输出', 'AI变化检测'],
    },
  ];

  const serviceAreas = [
    '高山森林', '喀斯特', '草原', '河流湖泊', '滨海湿地', '海洋岛屿',
  ];

  const inspectionTargets = [
    '项目违建', '非法盗猎', '船舶监测', '植被变化', '野生动植物调查', 
    '矿山修复测量', '外来入侵植物调查', '风电场', '林场林地变化',
  ];

  const stats = [
    { value: '10000+', label: '飞行架次' },
    { value: '5000+', label: '巡检小时' },
    { value: '80+', label: '服务保护地' },
    { value: '99.5%', label: '任务成功率' },
    { value: '20-40', label: '日覆盖(km²)' },
    { value: '1000', label: 'TB存储容量' },
  ];

  return (
    <div className="min-h-screen bg-surface">
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-brand-primary/5 to-transparent pointer-events-none" />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="无人机服务" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/90 to-surface/70" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceTypes.map((service) => (
              <div
                key={service.id}
                className="glass-card-hover p-6 md:p-8 relative group"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient}`} />
                
                <div className="relative z-10">
                  <div className="relative mb-6 overflow-hidden rounded-2xl border border-ink/10">
                    <img
                      src={service.image.src}
                      srcSet={service.image.srcSet}
                      sizes={service.image.sizes}
                      alt={service.image.alt}
                      loading="lazy"
                      className="h-36 w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-surface/10" />
                  </div>
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

      {/* 无人机巡检优势对比 */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-surface-2">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              无人机巡检优势对比
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-brand-primary to-transparent mx-auto mb-4" />
            <p className="text-muted/75 max-w-2xl mx-auto">
              相比传统视频监控和人力巡护，无人机巡检具有显著优势
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full glass-card">
              <thead>
                <tr className="border-b border-border">
                  {comparisonData.headers.map((header, idx) => (
                    <th key={idx} className="px-6 py-4 text-left text-sm font-semibold text-ink">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonData.rows.map((row, idx) => (
                  <tr key={idx} className="border-b border-border/50 hover:bg-surface/50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-ink">{row.label}</td>
                    <td className="px-6 py-4 text-sm text-brand-primary font-medium">{row.drone}</td>
                    <td className="px-6 py-4 text-sm text-muted/70">{row.video}</td>
                    <td className="px-6 py-4 text-sm text-muted/70">{row.manual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 多种类的成果产出 */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              多种类的成果产出
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-brand-accent to-transparent mx-auto mb-4" />
            <p className="text-muted/75 max-w-2xl mx-auto">
              丰富的成果产出形式，满足不同场景的应用需求
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="glass-card-hover p-6 group hover:border-brand-accent/30 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-4 group-hover:shadow-glow transition-shadow">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-ink mb-2">{item.title}</h3>
                <p className="text-sm text-muted/70 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-surface-2">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">现场与成果样例</h2>
            <div className="w-24 h-px bg-brand-primary/40 mx-auto mb-4" />
            <p className="text-muted/75 max-w-2xl mx-auto">把巡检、航测与数据处理的结果，以可交付成果沉淀下来。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {[
              {
                title: '外业装备与载机平台',
                desc: '携行设备、载机平台与作业组件一体化出勤。',
                src: fieldKit1400,
                srcSet: `${fieldKit900} 900w, ${fieldKit1400} 1400w`,
                sizes: '(min-width: 1280px) 50vw, 100vw',
                span: 'md:col-span-7',
              },
              {
                title: '服务覆盖与落地案例',
                desc: '面向多省份多场景的巡检与监测任务。',
                src: coverageMap1400,
                srcSet: `${coverageMap900} 900w, ${coverageMap1400} 1400w`,
                sizes: '(min-width: 1280px) 33vw, 100vw',
                span: 'md:col-span-5',
              },
              {
                title: '成果报告与数据产品',
                desc: '图件、统计表与报告样例，便于管理决策使用。',
                src: reportSample1400,
                srcSet: `${reportSample900} 900w, ${reportSample1400} 1400w`,
                sizes: '(min-width: 1280px) 50vw, 100vw',
                span: 'md:col-span-6',
              },
              {
                title: '飞行作业与任务执行',
                desc: '按航线执行巡检任务，支持复杂地形与多类型载荷。',
                src: droneFlight1400,
                srcSet: `${droneFlight900} 900w, ${droneFlight1400} 1400w`,
                sizes: '(min-width: 1280px) 50vw, 100vw',
                span: 'md:col-span-6',
              },
            ].map((x) => (
              <div key={x.title} className={`${x.span} glass-card overflow-hidden group hover:border-brand-primary/30 transition-all`}>
                <div className="relative">
                  <img
                    src={x.src}
                    srcSet={x.srcSet}
                    sizes={x.sizes}
                    alt={x.title}
                    loading="lazy"
                    className="w-full h-60 md:h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-surface/15 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="text-base font-semibold text-ink/95">{x.title}</div>
                    <div className="text-sm text-muted/80 mt-1">{x.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 标准化作业流程 */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-surface-2">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              标准化的作业流程
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-brand-primary to-transparent mx-auto mb-4" />
            <p className="text-muted/75 max-w-2xl mx-auto">
              无人机服务的标准制作流程分为外场作业和内业处理
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4 mb-12">
            {workflowDetails.map((item, index) => (
              <div key={index} className="glass-card p-4 text-center">
                <div className="w-10 h-10 rounded-full bg-brand-primary/20 flex items-center justify-center mx-auto mb-3 text-brand-primary font-bold">
                  {index + 1}
                </div>
                <h3 className="text-base font-semibold text-ink mb-1">{item.title}</h3>
                <p className="text-xs text-muted/70">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-border pt-10">
            <h3 className="text-xl font-bold text-ink mb-8 text-center">内业处理</h3>
            <div className="grid md:grid-cols-4 gap-4">
              {indoorWork.map((item, index) => (
                <div key={index} className="glass-card p-4">
                  <div className="w-10 h-10 rounded-full bg-brand-accent/20 flex items-center justify-center mb-3 text-brand-accent">
                    <CheckCircle size={20} />
                  </div>
                  <h4 className="text-base font-semibold text-ink mb-1">{item.title}</h4>
                  <p className="text-xs text-muted/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 无人机数据处理中心 */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={dataCenterImg} 
            alt="数据处理中心" 
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-surface" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              无人机数据处理中心
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-warm to-transparent mx-auto mb-4" />
            <p className="text-muted/75 max-w-2xl mx-auto">
              保护地和生物多样性需要海量的无人机数据处理和存储能力
            </p>
          </div>

          <div className="glass-card p-8 mb-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {dataCenterFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-warm/10 flex items-center justify-center mx-auto mb-4 text-warm">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-ink mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted/70">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center text-muted/60 text-sm">
            <p>基于9台服务器虚拟化80个数据处理节点 · 搭配2台存储服务器，满足1000 TB全套数据的存储 · 满足60平方公里日处理能力</p>
          </div>
        </div>
      </section>

      {/* 报告制作规范完善 */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-surface-2">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              报告制作规范完善
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-brand-primary to-transparent mx-auto mb-4" />
            <p className="text-muted/75 max-w-2xl mx-auto">
              专业的报告制作服务，为管理决策提供可靠支撑
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {reportTypes.map((report, index) => (
              <div key={index} className="glass-card p-6 md:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary flex-shrink-0">
                    {report.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-ink mb-2">{report.title}</h3>
                    <p className="text-sm text-muted/70">{report.description}</p>
                  </div>
                </div>
                <ul className="grid grid-cols-2 gap-2 mt-4">
                  {report.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted/80">
                      <CheckCircle size={14} className="text-brand-primary flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 服务地域广泛 */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              服务地域广泛
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-brand-accent to-transparent mx-auto mb-4" />
          </div>

          <div className="glass-card p-8 mb-8">
            <div className="text-center mb-8">
              <h3 className="text-lg font-semibold text-ink mb-4">地形类型</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {serviceAreas.map((area, index) => (
                  <span key={index} className="px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary border border-brand-primary/20">
                    {area}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-ink mb-4">巡检目标</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {inspectionTargets.map((target, index) => (
                  <span key={index} className="px-4 py-2 rounded-full bg-surface-2 text-muted/80 border border-border">
                    {target}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <p className="text-center text-muted/70 text-sm">
            在过去的五年我们积累了丰富的巡检经验，覆盖各个生物多样性热点的地区
          </p>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
