import React from 'react';
import { MapPin, Phone, Mail, Plane, MessageSquare, AtSign, Music, Settings2 } from 'lucide-react';
import VTLink from '../VTLink';
import { siteContent } from '../../content';

interface FooterProps {
  onOpenThemePanel?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenThemePanel }) => {
  const currentYear = new Date().getFullYear();

  const quickLinks = siteContent.nav.map((x) => ({ name: x.label, href: x.to }));

  const services = [
    { name: '空地协同巡检', href: '/drone_service' },
    { name: '低空经济解决方案', href: '/drone_service' },
    { name: '自然教育体系', href: '/archives/sheng-wu-quan' },
    { name: '智慧保护地建设', href: '/drone_service' },
  ];
  const socialLinks = [
    {
      name: '微信',
      href: '/contact',
      icon: <MessageSquare size={18} />,
      tone: 'text-brand-primary bg-brand-primary/10 border-brand-primary/30',
    },
    {
      name: '微博',
      href: '/contact',
      icon: <AtSign size={18} />,
      tone: 'text-warm bg-warm/10 border-warm/30',
    },
    {
      name: '抖音',
      href: '/contact',
      icon: <Music size={18} />,
      tone: 'text-wildlife bg-wildlife/10 border-wildlife/30',
    },
  ];

  return (
    <footer 
      className="relative border-t theme-transition"
      style={{ 
        backgroundColor: 'rgb(var(--c-surface))',
        borderColor: 'rgb(var(--c-border))' 
      }}
    >
      {/* 顶部渐变线 */}
      <div 
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, rgb(var(--brand-primary) / 0.3), transparent)`
        }}
      />
      
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* 品牌介绍 */}
          <div>
            <VTLink to="/" className="text-2xl font-bold flex items-center gap-2 mb-6">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center shadow-glow-sm"
                style={{
                  background: `linear-gradient(135deg, rgb(var(--brand-primary)), rgb(var(--brand-accent)))`
                }}
              >
                <Plane size={20} className="text-white" />
              </div>
              <span style={{ color: 'rgb(var(--c-ink))' }}>
                EJ<span className="text-brand-primary">DRONE</span>
              </span>
            </VTLink>
            <p 
              className="mb-6 leading-relaxed text-sm"
              style={{ color: 'rgb(var(--c-muted))' }}
            >
              依托科技创新与跨领域合作，提供自然保护地创新性和精细化管理解决方案，让自然生态更美好，让自然保护成为最酷的工作。
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <VTLink
                  key={social.name}
                  to={social.href}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105 motion-sheen ${social.tone}`}
                  title={social.name}
                >
                  <span className="motion-float">{social.icon}</span>
                </VTLink>
              ))}
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <h4 
              className="text-lg font-bold mb-6 flex items-center gap-2"
              style={{ color: 'rgb(var(--c-ink))' }}
            >
              <span 
                className="w-1 h-6 rounded-full"
                style={{ backgroundColor: 'rgb(var(--brand-primary))' }}
              />
              快速链接
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <VTLink 
                    to={link.href} 
                    className="transition-colors text-sm flex items-center gap-2 group"
                    style={{ color: 'rgb(var(--c-muted))' }}
                  >
                    <span 
                      className="w-0 h-px group-hover:w-3 transition-all duration-300"
                      style={{ backgroundColor: 'rgb(var(--brand-primary))' }}
                    />
                    <span className="group-hover:text-brand-primary transition-colors">
                      {link.name}
                    </span>
                  </VTLink>
                </li>
              ))}
            </ul>
          </div>

          {/* 核心服务 */}
          <div>
            <h4 
              className="text-lg font-bold mb-6 flex items-center gap-2"
              style={{ color: 'rgb(var(--c-ink))' }}
            >
              <span 
                className="w-1 h-6 rounded-full"
                style={{ backgroundColor: 'rgb(var(--brand-accent))' }}
              />
              核心服务
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <VTLink 
                    to={service.href} 
                    className="transition-colors text-sm flex items-center gap-2 group"
                    style={{ color: 'rgb(var(--c-muted))' }}
                  >
                    <span 
                      className="w-0 h-px group-hover:w-3 transition-all duration-300"
                      style={{ backgroundColor: 'rgb(var(--brand-accent))' }}
                    />
                    <span className="group-hover:text-brand-accent transition-colors">
                      {service.name}
                    </span>
                  </VTLink>
                </li>
              ))}
            </ul>
          </div>

          {/* 联系方式 */}
          <div>
            <h4 
              className="text-lg font-bold mb-6 flex items-center gap-2"
              style={{ color: 'rgb(var(--c-ink))' }}
            >
              <span 
                className="w-1 h-6 rounded-full"
                style={{ backgroundColor: 'rgb(var(--c-warm))' }}
              />
              联系方式
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3" style={{ color: 'rgb(var(--c-muted))' }}>
                <Phone size={18} className="text-brand-primary flex-shrink-0" />
                <span className="text-sm">{siteContent.contact.phone}</span>
              </li>
              <li className="flex items-center gap-3" style={{ color: 'rgb(var(--c-muted))' }}>
                <Mail size={18} className="text-brand-primary flex-shrink-0" />
                <span className="text-sm">{siteContent.contact.email}</span>
              </li>
              <li className="flex items-start gap-3" style={{ color: 'rgb(var(--c-muted))' }}>
                <MapPin size={18} className="text-brand-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm space-y-1">
                  {siteContent.contact.addresses.map((a) => (
                    <div key={a.label} className="flex gap-2">
                      <span style={{ color: 'rgb(var(--c-muted-light))' }} className="flex-shrink-0">{a.label}：</span>
                      <span>{a.value}</span>
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* 底部版权 */}
        <div 
          className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderColor: 'rgb(var(--c-border))' }}
        >
          <p 
            className="text-sm text-center md:text-left"
            style={{ color: 'rgb(var(--c-muted-light))' }}
          >
            © {currentYear} 翼界科技 版权所有 | 桂ICP备19000821号-1
          </p>
          <div className="flex items-center gap-6">
            <div className="flex gap-6 text-sm" style={{ color: 'rgb(var(--c-muted-light))' }}>
              <VTLink to="/privacy" className="hover:text-brand-primary transition-colors">隐私政策</VTLink>
              <VTLink to="/terms" className="hover:text-brand-primary transition-colors">使用条款</VTLink>
              <VTLink to="/sitemap" className="hover:text-brand-primary transition-colors">网站地图</VTLink>
            </div>
            
            {/* 主题设置入口 */}
            {onOpenThemePanel && (
              <button
                type="button"
                onClick={onOpenThemePanel}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-all duration-200 hover:scale-105"
                style={{
                  backgroundColor: 'rgb(var(--c-surface-2))',
                  border: '1px solid rgb(var(--c-border))',
                  color: 'rgb(var(--c-muted))',
                }}
              >
                <Settings2 size={14} />
                主题
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
