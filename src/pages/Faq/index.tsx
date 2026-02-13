import React, { useState, useMemo } from 'react';
import { HelpCircle, Mail, Phone, ShieldCheck, GraduationCap, Wrench, ArrowRight, Search, ChevronDown, Cpu, Users, FileCheck, Clock, CheckCircle } from 'lucide-react';
import VTLink from '../../components/VTLink';
import { siteContent } from '../../content';

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'service' | 'product' | 'cooperation' | 'technical' | 'training';
  tags?: string[];
}

const FAQ_DATA: FaqItem[] = [
  {
    id: '1',
    question: '翼界科技主要提供哪些解决方案？',
    answer: '围绕自然保护地精细化管理，提供三大核心解决方案：1) 基于空地协同的无人机巡检解决方案，包含视频巡检、遥感监测、数据中继等服务；2) 自然保护地宣教体系建设解决方案，包括场域打造、活动策划、平台支撑等；3) 自然保护地信息化系统建设解决方案，涵盖综合管理、翼查记、翼地巡、自然脉搏等软件系统。',
    category: 'service',
    tags: ['解决方案', '无人机巡检', '信息化建设'],
  },
  {
    id: '2',
    question: '无人机巡检包含哪些典型应用场景？',
    answer: '无人机巡检主要包含三大应用场景：1) 视频巡检 - 实时视频传输，用于快速巡查和事件记录；2) 遥感监测 - 多光谱、高分辨率影像采集，用于植被覆盖、土地利用等分析；3) 数据中继 - 作为通信中继点，扩展监测网络覆盖范围。配合无人机数据收集回收与云端物联网能力，全面提升保护地管理智慧化水平。',
    category: 'service',
    tags: ['无人机', '巡检', '应用场景'],
  },
  {
    id: '3',
    question: '翼查记科研监测平台有哪些核心功能？',
    answer: '翼查记是服务于科研监测和综合考察的软件平台，核心功能包括：1) 多种地图类型支持，定制性强；2) 红外相机数据自动接入与管理；3) 无人机航拍数据分析；4) 物种分布可视化；5) 数据导出与报告生成。平台支持Web端和移动端使用，为科研人员提供全面的数据管理工具。',
    category: 'product',
    tags: ['翼查记', '科研监测', '数据管理'],
  },
  {
    id: '4',
    question: '翼地巡巡护监测系统如何提升巡护效率？',
    answer: '翼地巡巡护监测系统通过以下方式提升巡护效率：1) 网格化管理 - 将保护地划分为网格，实现巡护区域全覆盖；2) 自动分析 - 智能统计巡护成效和覆盖范围；3) 事件回报 - 巡护发现问题时可实时上报，支持图片、文字、位置等信息；4) 数据可视化 - 通过图表直观展示巡护数据。支持与翼查记数据互通，形成完整的巡护监测体系。',
    category: 'product',
    tags: ['翼地巡', '巡护', '网格管理'],
  },
  {
    id: '5',
    question: '自然脉搏小程序可以做什么？',
    answer: '自然脉搏是面向公众的自然教育小程序，主要功能包括：1) 自然教育导赏 - 提供保护地特色自然讲解；2) 公众参与式监测 - 公众可参与物种记录和数据上报；3) 导赏员管理 - 管理自然教育导赏员信息和任务；4) 社区互动 - 连接保护地周边社区，促进公众参与自然保护。',
    category: 'product',
    tags: ['自然脉搏', '自然教育', '小程序'],
  },
  {
    id: '6',
    question: '是否提供无人机操作培训？',
    answer: '是的，我们提供完善的培训服务：1) CAAC持证培训 - 可协助报名参加民航局无人机驾驶执照考试；2) 设备操作培训 - 针对自有设备提供操作培训；3) 内部培训 - 为保护地工作人员提供内部操作培训。培训团队专业可靠，确保学员掌握安全规范的无人机操作技能。',
    category: 'training',
    tags: ['培训', 'CAAC', '无人机驾照'],
  },
  {
    id: '7',
    question: '如何申请无人机飞行空域？',
    answer: '我们提供一站式空域申请服务：1) 前期咨询 - 评估飞行任务和空域需求；2) 材料准备 - 协助准备飞行计划、资质证明等材料；3) 申报提交 - 向相关部门提交空域申请；4) 审批跟进 - 全程跟进审批进度，确保飞行任务顺利执行。我们的专业团队熟悉各地空域管理政策，可大大提高申请成功率。',
    category: 'service',
    tags: ['空域申请', '飞行许可', '无人机'],
  },
  {
    id: '8',
    question: '外业服务团队有哪些优势？',
    answer: '我们的外业队伍具有以下优势：1) 专业可靠 - 团队成员均经过专业培训，持证上岗；2) 标准化作业 - 遵循严格的作业流程和安全管理规范；3) 快速响应 - 可根据客户需求快速安排外业任务；4) 安全保障 - 配备完善的安全装备和应急预案；5) 经验丰富 - 熟悉高山、森林、喀斯特等多种地形。',
    category: 'service',
    tags: ['外业', '服务团队', '无人机巡检'],
  },
  {
    id: '9',
    question: '可以提供哪些定制开发服务？',
    answer: '我们提供面向自然保护从业者的定制软件开发服务：1) 管理系统定制 - 根据业务需求开发专属管理平台；2) 数据分析工具 - 定制数据分析和可视化功能；3) 移动应用开发 - iOS/Android原生或小程序开发；4) 系统集成 - 与现有系统进行数据对接和功能集成。开发团队熟悉自然保护地业务场景，可提供高质量的定制解决方案。',
    category: 'cooperation',
    tags: ['定制开发', '软件开发', '系统集成'],
  },
  {
    id: '10',
    question: '有哪些合作伙伴案例可以参考？',
    answer: '我们的合作伙伴涵盖多个领域：1) 政府与事业单位 - 各级自然保护区管理局、林业部门等；2) 自然保护地 - 国家级、省级自然保护区；3) 行业合作伙伴 - 大疆等行业领军企业；4) 技术合作伙伴 - 科研院所、高校等。我们可提供详细的案例资料和解决方案介绍，欢迎咨询。',
    category: 'cooperation',
    tags: ['合作伙伴', '案例', '自然保护区'],
  },
  {
    id: '11',
    question: '无人机设备如何进行保养维护？',
    answer: '我们提供全面的设备保养服务：1) 定期保养 - 按飞行小时数或时间周期进行专业保养；2) 故障维修 - 设备故障时可提供快速维修服务；3) 配件更换 - 原厂配件更换，确保设备性能；4) 性能检测 - 定期进行飞行性能检测和安全检查。完善的保养服务可延长设备寿命，降低故障率。',
    category: 'technical',
    tags: ['设备保养', '维修', '无人机'],
  },
  {
    id: '12',
    question: '数据处理中心有哪些能力？',
    answer: '我们的数据处理中心具备强大能力：1) 9台高性能服务器，确保处理速度；2) 1000TB存储容量，满足大规模数据存储需求；3) 60平方公里/日处理能力，快速完成航测数据处理；4) 专业团队支持，提供数据处理和成果产出服务。处理成果包括720全景影像、正射模型、三维实境建模等多种类型。',
    category: 'technical',
    tags: ['数据处理', '正射模型', '三维建模'],
  },
  {
    id: '13',
    question: '服务覆盖哪些地域和地形？',
    answer: '我们的服务覆盖多种地形：1) 高山森林 - 适用于山地、林区等复杂地形；2) 喀斯特地貌 - 熟悉广西等喀斯特地区特点；3) 草原湿地 - 平原、湿地等开阔区域作业；4) 海岸线 - 沿海地区监测能力。目前服务范围覆盖全国14个省份，具备丰富的跨区域作业经验。',
    category: 'service',
    tags: ['服务地域', '地形', '覆盖范围'],
  },
  {
    id: '14',
    question: '如何开展合作？',
    answer: '合作流程如下：1) 需求沟通 - 了解客户需求和期望；2) 方案定制 - 根据需求提供针对性解决方案；3) 商务洽谈 - 讨论合作模式和价格；4) 合同签订 - 明确双方权利义务；5) 项目执行 - 按计划开展服务；6) 验收交付 - 完成项目并提供售后服务。我们提供灵活的合作模式，欢迎来电咨询。',
    category: 'cooperation',
    tags: ['合作流程', '商务', '联系方式'],
  },
  {
    id: '15',
    question: '典型应用场景有哪些？',
    answer: '无人机巡检的典型应用包括：1) 野生动植物监测 - 物种调查、种群监测；2) 生态环境评估 - 植被覆盖、水质监测；3) 科研数据采集 - 科研项目数据支持；4) 应急巡查 - 灾害监测、违规行为发现；5) 边界巡护 - 保护区边界监控。我们的设备和方法已在多个应用场景中取得良好效果。',
    category: 'service',
    tags: ['应用场景', '野生动植物', '生态监测'],
  },
];

const CATEGORIES: { value: FaqItem['category']; label: string; icon: React.ReactNode }[] = [
  { value: 'service', label: '服务能力', icon: <ShieldCheck size={14} /> },
  { value: 'product', label: '产品使用', icon: <Cpu size={14} /> },
  { value: 'cooperation', label: '合作关系', icon: <Users size={14} /> },
  { value: 'technical', label: '技术支持', icon: <Wrench size={14} /> },
  { value: 'training', label: '培训服务', icon: <GraduationCap size={14} /> },
];

const Faq = () => {
  const [selectedCategory, setSelectedCategory] = useState<FaqItem['category'] | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch = !searchQuery || 
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const getCategoryInfo = (category: FaqItem['category']) => {
    return CATEGORIES.find(c => c.value === category);
  };

  return (
    <div className="min-h-screen bg-surface">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-pattern opacity-40" />
      
      <section className="relative pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-brand-primary/25 mb-6">
              <HelpCircle size={16} className="text-brand-primary" />
              <span className="text-sm text-muted/80">常见问题</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-ink mb-5">
              <span className="text-ink/85">你可能关心的</span>
              <span className="eco-gradient-text">问题</span>
            </h1>
            <p className="text-muted/75 text-lg max-w-2xl mx-auto leading-relaxed">
              围绕服务能力、交付方式、产品使用与合作流程整理的高频问题。若未覆盖你的场景，欢迎直接联系我们。
            </p>
          </div>

          <div className="mb-6">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === 'all'
                      ? 'bg-brand-primary text-white shadow-glow'
                      : 'glass-card hover:border-brand-primary/30 text-muted/80'
                  }`}
                >
                  全部
                </button>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => setSelectedCategory(cat.value)}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === cat.value
                        ? 'bg-brand-primary text-white shadow-glow'
                        : 'glass-card hover:border-brand-primary/30 text-muted/80'
                    }`}
                  >
                    {cat.icon}
                    <span>{cat.label}</span>
                  </button>
                ))}
              </div>
              
              <div className="relative w-full lg:w-72">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted/50" />
                <input
                  type="text"
                  placeholder="搜索问题..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl glass-card border-border bg-surface-2 text-ink placeholder:text-muted/50 focus:outline-none focus:border-brand-primary/50 transition-colors"
                />
              </div>
            </div>
          </div>

          {filteredFaqs.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-surface-2 flex items-center justify-center mx-auto mb-4 motion-float">
                <Search size={24} className="text-muted/50" />
              </div>
              <p className="text-muted/70 text-lg">未找到相关问题</p>
              <p className="text-muted/50 text-sm mt-2">尝试调整筛选条件或搜索关键词</p>
            </div>
          ) : (
            <>
              <div className="space-y-3">
                {filteredFaqs.map((item) => {
                  const catInfo = getCategoryInfo(item.category);
                  const isExpanded = expandedId === item.id;
                  
                  return (
                    <details
                      key={item.id}
                      className="glass-card group open:border-brand-primary/30 transition-colors motion-sheen"
                      open={isExpanded}
                    >
                      <summary
                        className="cursor-pointer list-none flex items-start gap-3 p-5"
                        onClick={(e) => {
                          e.preventDefault();
                          setExpandedId(isExpanded ? null : item.id);
                        }}
                      >
                        <div className="icon-box text-brand-primary shrink-0 mt-0.5">
                          {isExpanded ? <CheckCircle size={18} /> : <HelpCircle size={18} />}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs px-2 py-0.5 rounded-full bg-brand-primary/10 text-brand-primary/80 flex items-center gap-1">
                              {catInfo?.icon}
                              {catInfo?.label}
                            </span>
                          </div>
                          <div className="text-base font-semibold text-ink/90 pr-8">{item.question}</div>
                          <div className={`text-sm text-muted/70 mt-3 leading-relaxed ${isExpanded ? 'block' : 'hidden'}`}>
                            {item.answer}
                          </div>
                          {item.tags && item.tags.length > 0 && isExpanded && (
                            <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-border/50">
                              {item.tags.map((tag) => (
                                <span key={tag} className="text-xs px-2 py-0.5 rounded-md bg-surface-2 text-muted/60">
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                        <div className={`shrink-0 mt-1 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                          <ChevronDown size={20} className="text-muted/50" />
                        </div>
                      </summary>
                    </details>
                  );
                })}
              </div>

              <div className="text-center mt-5">
                <p className="text-sm text-muted/50">
                  共 {filteredFaqs.length} 个问题
                  {filteredFaqs.length !== FAQ_DATA.length && `（已过滤 ${FAQ_DATA.length - filteredFaqs.length} 个）`}
                </p>
              </div>
            </>
          )}

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 staggered-grid">
            <a href={`tel:${siteContent.contact.phone}`} className="feature-card hover:border-brand-accent/30 group motion-sheen">
              <div className="flex items-center gap-3">
                <div className="icon-box text-brand-accent group-hover:shadow-glow-accent transition-shadow">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-sm text-muted/70">客服热线</div>
                  <div className="text-base font-semibold text-ink/90">{siteContent.contact.phone}</div>
                </div>
              </div>
            </a>
            <a href={`mailto:${siteContent.contact.email}`} className="feature-card hover:border-warm/30 group motion-sheen">
              <div className="flex items-center gap-3">
                <div className="icon-box text-warm group-hover:shadow-glow-warm transition-shadow">
                  <Mail size={18} />
                </div>
                <div className="min-w-0">
                  <div className="text-sm text-muted/70">电子邮箱</div>
                  <div className="text-base font-semibold text-ink/90 truncate">{siteContent.contact.email}</div>
                </div>
              </div>
            </a>
            <div className="feature-card border-brand-primary/20 group motion-sheen">
              <div className="flex items-center gap-3">
                <div className="icon-box text-brand-primary group-hover:shadow-glow transition-shadow">
                  <Clock size={18} />
                </div>
                <div>
                  <div className="text-sm text-muted/70">服务时间</div>
                  <div className="text-base font-semibold text-ink/90">周一至周五 9:00-18:00</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <VTLink to="/contact" className="btn-primary inline-flex items-center gap-2">
              <Wrench size={18} />
              <span>提交需求</span>
              <ArrowRight size={18} />
            </VTLink>
          </div>

          <div className="mt-12 border-t border-border pt-8">
            <div className="glass-card p-8 md:p-10 text-center motion-sheen">
              <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center mx-auto mb-4 text-brand-primary">
                <FileCheck size={28} />
              </div>
              <h3 className="text-2xl font-bold text-ink mb-4">没有找到答案？</h3>
              <p className="text-muted/75 max-w-xl mx-auto mb-6">
                我们的专业团队随时准备回答您的任何问题。请通过以下方式联系我们，或直接填写表单提交您的需求。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <VTLink to="/contact" className="btn-primary inline-flex items-center gap-2">
                  <span>在线留言</span>
                  <ArrowRight size={18} />
                </VTLink>
                <VTLink to="/solutions" className="btn-secondary inline-flex items-center gap-2">
                  <span>了解方案</span>
                </VTLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
