import React from 'react';
import { MapPin, Phone, Mail, Plane, Send } from 'lucide-react';
import VTLink from '../VTLink';
import { siteContent } from '../../content';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = siteContent.nav.map((x) => ({ name: x.label, href: x.to }));

  const services = [
    { name: '空地协同巡检', href: '/drone_service' },
    { name: '低空经济解决方案', href: '/drone_service' },
    { name: '自然教育体系', href: '/archives/sheng-wu-quan' },
    { name: '智慧保护地建设', href: '/drone_service' },
  ];

  return (
    <footer className="relative bg-cyber-darker border-t border-white/5">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <VTLink to="/" className="text-2xl font-bold flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center shadow-glow-sm">
                <Plane size={20} className="text-white" />
              </div>
              <span className="text-white">
                EJ<span className="text-brand-primary">DRONE</span>
              </span>
            </VTLink>
            <p className="text-muted/80 mb-6 leading-relaxed text-sm">
              致力于将无人机技术与自然生态保护深度融合，打造智慧保护地，让科技守护绿水青山。
            </p>
            <div className="flex gap-3">
              {['微信', '微博', '抖音'].map((social) => (
                <VTLink
                  key={social}
                  to="/contact"
                  className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-muted/80 hover:text-ink hover:border-brand-primary/30 transition-all duration-300"
                  title={social}
                >
                  <Send size={18} />
                </VTLink>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
              <span className="w-1 h-6 bg-brand-primary rounded-full"></span>
              快速链接
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <VTLink 
                    to={link.href} 
                    className="text-muted/80 hover:text-ink transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-brand-primary group-hover:w-3 transition-all duration-300"></span>
                    {link.name}
                  </VTLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
              <span className="w-1 h-6 bg-brand-accent rounded-full"></span>
              核心服务
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <VTLink 
                    to={service.href} 
                    className="text-muted/80 hover:text-ink transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-brand-accent group-hover:w-3 transition-all duration-300"></span>
                    {service.name}
                  </VTLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
              <span className="w-1 h-6 bg-warm rounded-full"></span>
              联系方式
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-muted/80">
                <Phone size={18} className="text-brand-primary flex-shrink-0" />
                <span className="text-sm">{siteContent.contact.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-muted/80">
                <Mail size={18} className="text-brand-primary flex-shrink-0" />
                <span className="text-sm">{siteContent.contact.email}</span>
              </li>
              <li className="flex items-start gap-3 text-muted/80">
                <MapPin size={18} className="text-brand-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm space-y-1">
                  {siteContent.contact.addresses.map((a) => (
                    <div key={a.label} className="flex gap-2">
                      <span className="text-muted/60 flex-shrink-0">{a.label}：</span>
                      <span className="text-muted/80">{a.value}</span>
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted/60 text-sm text-center md:text-left">
            © {currentYear} 翼界科技 版权所有 | 桂ICP备XXXXXXXX号
          </p>
          <div className="flex gap-6 text-muted/60 text-sm">
            <VTLink to="/privacy" className="hover:text-ink transition-colors">隐私政策</VTLink>
            <VTLink to="/terms" className="hover:text-ink transition-colors">使用条款</VTLink>
            <VTLink to="/sitemap" className="hover:text-ink transition-colors">网站地图</VTLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
