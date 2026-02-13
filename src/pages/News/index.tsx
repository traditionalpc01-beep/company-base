import React, { useState, useMemo } from 'react';
import { ArrowRight, Newspaper, Sparkles, Search, Calendar, Eye, ChevronDown, ChevronUp, MapPin, Leaf, Award, Cpu, Bell } from 'lucide-react';
import VTLink from '../../components/VTLink';

export interface NewsItem {
  id: string;
  title: string;
  description: string;
  content?: string;
  category: 'case' | 'product' | 'education' | 'industry' | 'company';
  date: string;
  author?: string;
  views?: number;
  tags?: string[];
  featured?: boolean;
}

const NEWS_DATA: NewsItem[] = [
  {
    id: '1',
    title: '保护区信息化管理系统构建完成',
    description: '构建保护地生物多样性、空间数据和社区数据等多源数据中心，有效利用红外相机、无人机等监测设备，支撑保护地开展各项业务工作。',
    content: '翼界科技为多个自然保护区构建了信息化管理系统，实现了生物多样性、空间数据和社区数据等多源数据的统一管理。系统有效整合了红外相机、无人机等监测设备的数据，为保护地开展各项业务工作提供了强有力的技术支撑。',
    category: 'case',
    date: '2024-12-15',
    author: '产品研发部',
    views: 1256,
    tags: ['信息化', '数据管理', '保护区'],
    featured: true,
  },
  {
    id: '2',
    title: '翼查记科研监测平台全新升级',
    description: '满足野外快速巡护调查，智能统计分析保护地的实际巡护成效和覆盖范围，提供更强大的数据分析能力。',
    content: '翼查记科研监测平台迎来重大更新，新增智能统计分析功能，能够全面展示巡护成效和覆盖范围。新版本还优化了数据可视化界面，支持多种图表类型，为科研人员提供更便捷的数据分析工具。',
    category: 'product',
    date: '2024-11-28',
    author: '产品团队',
    views: 892,
    tags: ['翼查记', '科研监测', '产品升级'],
    featured: true,
  },
  {
    id: '3',
    title: '自然脉搏小程序正式上线',
    description: '以小程序平台为载体，建成自然保护地自然教育导赏、公众参与式监测、导赏员管理等功能于一体的管理和解说体系。',
    content: '自然脉搏小程序是翼界科技打造的全新自然教育平台，集成自然教育导赏、公众参与式监测、导赏员管理等多功能于一体。公众可以通过小程序参与自然保护活动，了解自然知识，为自然保护地的发展贡献力量。',
    category: 'education',
    date: '2024-10-20',
    author: '产品研发部',
    views: 743,
    tags: ['自然教育', '小程序', '公众参与'],
    featured: true,
  },
  {
    id: '4',
    title: '翼地巡巡护监测系统V3.0发布',
    description: '全新升级的巡护监测系统，引入AI智能识别技术，实现更精准的巡护成效分析。',
    content: '翼地巡巡护监测系统V3.0版本正式发布，该版本引入了先进的AI智能识别技术，能够自动识别野生动物、物种分布等信息。新版本还增强了网格管理功能，实现了巡护事件的自动上报和处理。',
    category: 'product',
    date: '2024-09-15',
    author: '研发团队',
    views: 658,
    tags: ['翼地巡', '巡护监测', 'AI识别'],
  },
  {
    id: '5',
    title: '与广西某国家级自然保护区达成战略合作',
    description: '双方将在无人机巡检、信息化系统建设、自然教育等领域开展深度合作，共同推进保护地智慧化管理。',
    content: '翼界科技与广西某国家级自然保护区签署战略合作协议，双方将在无人机巡检、信息化系统建设、自然教育等领域开展深度合作。此次合作将有力推动保护地的智慧化建设，提升保护地管理效率。',
    category: 'case',
    date: '2024-08-22',
    author: '商务拓展部',
    views: 534,
    tags: ['战略合作', '自然保护区', '智慧管理'],
  },
  {
    id: '6',
    title: '荣获自治区知识产权优势企业称号',
    description: '翼界科技凭借在自然保护地信息化领域的创新成果，获得自治区知识产权优势企业认定。',
    content: '经过严格评审，翼界科技荣获自治区知识产权优势企业称号。这一荣誉是对公司在自然保护地信息化领域创新成果的肯定，也标志着公司在知识产权创造、运用、保护和管理方面迈上新台阶。',
    category: 'company',
    date: '2024-07-10',
    author: '企业管理部',
    views: 421,
    tags: ['荣誉', '知识产权', '企业认定'],
  },
  {
    id: '7',
    title: '犀鸟Ⅱ复合翼无人机通过民航局适航认证',
    description: '自主研发的犀鸟Ⅱ复合翼无人机顺利通过民航局适航认证，可正式投入商业运营。',
    content: '翼界科技自主研发的犀鸟Ⅱ复合翼无人机顺利通过中国民航局适航认证，标志着该产品已具备正式投入商业运营的资质。犀鸟Ⅱ具备长续航、高载重、多任务载荷等特点，适用于各种复杂地形的环境监测任务。',
    category: 'product',
    date: '2024-06-18',
    author: '产品研发部',
    views: 612,
    tags: ['犀鸟Ⅱ', '无人机', '适航认证'],
  },
  {
    id: '8',
    title: '承办自然保护地信息化建设研讨会',
    description: '翼界科技承办的自然保护地信息化建设研讨会在南宁成功召开，来自全国各地的专家学者齐聚一堂。',
    content: '由翼界科技承办的自然保护地信息化建设研讨会在南宁成功召开。会议围绕自然保护地信息化建设的最新技术、解决方案实践经验等主题展开深入探讨，为推动行业信息化建设提供了重要参考。',
    category: 'industry',
    date: '2024-05-25',
    author: '市场部',
    views: 387,
    tags: ['研讨会', '信息化建设', '行业交流'],
  },
  {
    id: '9',
    title: '地块宝自然资源调查APP正式发布',
    description: '全新推出的地块宝APP为自然资源调查提供便捷的移动端解决方案，支持外业调查数据采集与管理。',
    content: '地块宝自然资源调查APP是翼界科技针对自然资源调查场景打造的移动端应用。该APP支持外业调查数据采集、照片记录、位置标注等功能，大大提高了外业调查效率。',
    category: 'product',
    date: '2024-04-12',
    author: '产品团队',
    views: 445,
    tags: ['地块宝', '自然资源', '移动端'],
  },
  {
    id: '10',
    title: '服务保护地突破100个',
    description: '翼界科技服务自然保护地数量正式突破100个，业务覆盖全国14个省份。',
    content: '经过多年发展，翼界科技服务的自然保护地数量正式突破100个，业务覆盖全国14个省份。公司将继续深耕自然保护地信息化领域，为更多保护地提供优质的智慧化解决方案。',
    category: 'company',
    date: '2024-03-20',
    author: '企业管理部',
    views: 723,
    tags: ['里程碑', '服务规模', '业务拓展'],
    featured: true,
  },
  {
    id: '11',
    title: '司风系统获得国家发明专利',
    description: '翼界科技自主研发的司风系统相关技术获得国家发明专利授权。',
    content: '翼界科技自主研发的司风系统相关技术"一种基于无人机的野生动物监测方法"获得国家发明专利授权。该专利技术的获得标志着公司在野生动物监测领域的技术创新得到认可。',
    category: 'product',
    date: '2024-02-28',
    author: '研发团队',
    views: 356,
    tags: ['司风系统', '发明专利', '野生动物'],
  },
  {
    id: '12',
    title: '开展无人机甘蔗种植面积识别专项研究',
    description: '与农业科研机构合作开展无人机甘蔗种植面积图像识别方法研究并获得发明专利。',
    content: '翼界科技与农业科研机构合作开展的"无人机甘蔗种植面积图像识别方法"研究取得重大突破，成功获得国家发明专利授权。该技术可广泛应用于农业监测领域。',
    category: 'industry',
    date: '2024-01-15',
    author: '研发团队',
    views: 298,
    tags: ['甘蔗识别', 'AI识别', '农业应用'],
  },
];

const CATEGORIES: { value: NewsItem['category']; label: string; icon: React.ReactNode }[] = [
  { value: 'case', label: '客户案例', icon: <MapPin size={14} /> },
  { value: 'product', label: '产品动态', icon: <Cpu size={14} /> },
  { value: 'education', label: '自然教育', icon: <Leaf size={14} /> },
  { value: 'industry', label: '行业动态', icon: <Award size={14} /> },
  { value: 'company', label: '公司新闻', icon: <Bell size={14} /> },
];

const News: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<NewsItem['category'] | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredNews = useMemo(() => {
    return NEWS_DATA.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch = !searchQuery || 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredNews = useMemo(() => filteredNews.filter(n => n.featured), [filteredNews]);
  const regularNews = useMemo(() => filteredNews.filter(n => !n.featured), [filteredNews]);

  const displayedNews = useMemo(() => {
    const combined = [...featuredNews, ...regularNews];
    return combined.slice(0, visibleCount);
  }, [featuredNews, regularNews, visibleCount]);

  const hasMore = displayedNews.length < filteredNews.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const getCategoryInfo = (category: NewsItem['category']) => {
    return CATEGORIES.find(c => c.value === category);
  };

  return (
    <div className="min-h-screen bg-surface">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-pattern opacity-40" />
      
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-brand-accent/25 mb-6">
              <Newspaper size={16} className="text-brand-accent" />
              <span className="text-sm text-muted/80">最新动态</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-ink mb-5">
              <span className="text-ink/85">资讯与</span>
              <span className="tech-gradient-text">案例</span>
            </h1>
            <p className="text-muted/75 text-lg max-w-3xl mx-auto leading-relaxed">
              记录我们在自然保护地精细化管理、空地协同巡检、信息化建设与自然教育中的最新进展与案例。
            </p>
          </div>

          <div className="mb-10">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === 'all'
                      ? 'bg-brand-accent text-white shadow-glow-accent'
                      : 'glass-card hover:border-brand-accent/30 text-muted/80'
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
                        ? 'bg-brand-accent text-white shadow-glow-accent'
                        : 'glass-card hover:border-brand-accent/30 text-muted/80'
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
                  placeholder="搜索新闻..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl glass-card border-border bg-surface-2 text-ink placeholder:text-muted/50 focus:outline-none focus:border-brand-accent/50 transition-colors"
                />
              </div>
            </div>
          </div>

          {filteredNews.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-surface-2 flex items-center justify-center mx-auto mb-4">
                <Search size={24} className="text-muted/50" />
              </div>
              <p className="text-muted/70 text-lg">未找到相关新闻</p>
              <p className="text-muted/50 text-sm mt-2">尝试调整筛选条件或搜索关键词</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedNews.map((item) => {
                  const catInfo = getCategoryInfo(item.category);
                  const isExpanded = expandedId === item.id;
                  
                  return (
                    <article
                      key={item.id}
                      className={`feature-card group cursor-pointer transition-all duration-300 ${
                        item.featured ? 'ring-1 ring-brand-accent/30' : ''
                      } ${isExpanded ? 'col-span-1 md:col-span-2 lg:col-span-3' : ''}`}
                      onClick={() => setExpandedId(isExpanded ? null : item.id)}
                    >
                      {item.featured && (
                        <div className="flex items-center gap-2 mb-3">
                          <Sparkles size={14} className="text-brand-accent" />
                          <span className="text-xs font-medium text-brand-accent">推荐</span>
                        </div>
                      )}
                      
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs px-2.5 py-1 rounded-full bg-surface-2 border border-border flex items-center gap-1.5 text-muted/70">
                          {catInfo?.icon}
                          {catInfo?.label}
                        </span>
                        <span className="text-xs text-muted/50 flex items-center gap-1">
                          <Calendar size={12} />
                          {formatDate(item.date)}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-ink/90 group-hover:text-brand-accent transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      
                      <p className={`text-sm text-muted/75 mt-2 leading-relaxed ${isExpanded ? '' : 'line-clamp-2'}`}>
                        {isExpanded && item.content ? item.content : item.description}
                      </p>
                      
                      {item.tags && item.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {item.tags.slice(0, isExpanded ? undefined : 3).map((tag) => (
                            <span key={tag} className="text-xs px-2 py-0.5 rounded-md bg-brand-primary/5 text-brand-primary/70">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between mt-4 pt-3 border-t border-border/50">
                        {item.author && (
                          <span className="text-xs text-muted/60">{item.author}</span>
                        )}
                        {item.views !== undefined && (
                          <span className="text-xs text-muted/50 flex items-center gap-1">
                            <Eye size={12} />
                            {item.views}
                          </span>
                        )}
                        {isExpanded ? (
                          <ChevronUp size={18} className="text-muted/50" />
                        ) : (
                          <ChevronDown size={18} className="text-muted/50" />
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>

              {hasMore && (
                <div className="text-center mt-10">
                  <button
                    onClick={handleLoadMore}
                    className="btn-outline inline-flex items-center gap-2"
                  >
                    <span>加载更多</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              )}

              <div className="text-center mt-6">
                <p className="text-sm text-muted/50">
                  共 {filteredNews.length} 条新闻
                  {filteredNews.length !== NEWS_DATA.length && `（已过滤 ${NEWS_DATA.length - filteredNews.length} 条）`}
                </p>
              </div>
            </>
          )}

          <div className="mt-16 border-t border-border pt-10">
            <div className="glass-card p-8 md:p-10 text-center">
              <h3 className="text-2xl font-bold text-ink mb-4">了解更多关于我们的服务</h3>
              <p className="text-muted/75 max-w-2xl mx-auto mb-6">
                翼界科技专注于自然保护地信息化建设，提供无人机巡检、信息化系统建设、自然教育等全方位解决方案。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <VTLink to="/solutions" className="btn-primary inline-flex items-center gap-2">
                  <span>查看解决方案</span>
                  <ArrowRight size={18} />
                </VTLink>
                <VTLink to="/contact" className="btn-secondary inline-flex items-center gap-2">
                  <span>联系我们</span>
                </VTLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
