import type { SiteContent } from './types';

export const siteContent: SiteContent = {
  nav: [
    { label: '首页', to: '/' },
    { label: '解决方案与案例', to: '/solutions' },
    { label: '档案中心', to: '/archives' },
    { label: '无人机服务', to: '/drone_service' },
    { label: '合作伙伴', to: '/partners' },
    { label: '关于我们', to: '/about' },
    { label: '发展历程', to: '/developing' },
    { label: '联系我们', to: '/contact' },
  ],
  footerSections: [
    {
      title: '快速链接',
      items: [
        { label: '首页', to: '/' },
        { label: '解决方案与案例', to: '/solutions' },
        { label: '档案中心', to: '/archives' },
        { label: '无人机服务', to: '/drone_service' },
        { label: '合作伙伴', to: '/partners' },
        { label: '关于我们', to: '/about' },
        { label: '联系我们', to: '/contact' },
      ],
    },
    {
      title: '法律与信息',
      items: [
        { label: '隐私政策', to: '/privacy' },
        { label: '使用条款', to: '/terms' },
        { label: '网站地图', to: '/sitemap' },
      ],
    },
  ],
  contact: {
    phone: '17677138300',
    email: 'office@ejdrone.com',
    addresses: [
      { label: '南宁办', value: '广西南宁市青秀区金浦路16号汇东国际F座6楼' },
      { label: '北海办', value: '广西北海市工业园区中国电子北部湾信息港B塔楼201' },
      { label: '海口办', value: '海南省海口市国家高新技术产业开发区狮子岭工业园光伏北路18号研发办公楼4层' },
    ],
  },
};
