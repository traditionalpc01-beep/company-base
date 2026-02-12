import React, { useMemo, useState, useEffect } from 'react';
import { ArrowLeft, Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { siteContent } from '../../content';
import VTLink from '../VTLink';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isArchiveDetailPage = location.pathname.startsWith('/archives/') && location.pathname !== '/archives';

  const archiveDetailMeta = useMemo(() => {
    const meta: Record<string, { title: string; subtitle?: string }> = {
      '/archives/sheng-wu-quan': { title: '声物圈', subtitle: '公众参与的全国自然声音数据采集平台' },
      '/archives/sifeng': { title: '司风系统', subtitle: '微基站数据回收管理系统' },
      '/archives/grid': { title: '网格巡检系统', subtitle: '网格化无人机巡检管理系统' },
      '/archives/dikuaibao': { title: '地块宝', subtitle: '智能农地管理工具' },
      '/archives/honor': { title: '荣誉资质', subtitle: '企业荣誉与资质认证' },
      '/archives/certification': { title: '企业认证', subtitle: '权威机构认证与合规保障' },
    };

    return meta;
  }, []);

  const currentArchiveMeta = isArchiveDetailPage ? archiveDetailMeta[location.pathname] : undefined;

  const isHomePage = location.pathname === '/';
  const headerClass = isHomePage && !isScrolled 
    ? 'bg-transparent py-4' 
    : 'bg-cyber-dark/95 backdrop-blur-xl border-b border-white/5 py-3 shadow-lg';
  
  const logoClass = isHomePage && !isScrolled 
    ? 'text-white' 
    : 'text-white';
  const linkClass = isHomePage && !isScrolled 
    ? 'text-ink/85 hover:text-ink' 
    : 'text-muted/80 hover:text-ink';
  const mobileIconClass = isHomePage && !isScrolled ? 'text-white' : 'text-white';

  const navLinks = siteContent.nav
    .filter((x) => x.to !== '/contact')
    .map((x) => ({ name: x.label, href: x.to }));

  const handleBackClick = () => {
    if (typeof window === 'undefined') return;
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }
    navigate('/archives');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClass}`}
    >
      <div className="container mx-auto px-4 flex items-center gap-3">
        <div className="flex items-center gap-3">
          {isArchiveDetailPage && (
            <button
              type="button"
              onClick={handleBackClick}
              className="group inline-flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 select-none bg-cyber-dark/60 backdrop-blur border border-white/10 text-muted/80 hover:text-ink hover:border-brand-accent/30 hover:shadow-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-cyber-darker active:scale-[0.98]"
              aria-label="返回"
            >
              <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-0.5" />
              <span className="text-sm font-medium">返回</span>
            </button>
          )}

          <VTLink to="/" className={`text-2xl font-bold flex items-center gap-2 ${logoClass}`}>
            <div className="w-10 h-10 rounded-xl bg-brand-surface/60 border border-white/10 flex items-center justify-center overflow-hidden shadow-glow-sm">
              <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 2L25 8.5V18.5L13.5 25L2 18.5V8.5L13.5 2Z" stroke="currentColor" strokeWidth="2" fill="none" className="text-brand-primary"/>
                <path d="M13.5 7L20 11V17L13.5 21L7 17V11L13.5 7Z" fill="currentColor" className="text-brand-primary"/>
              </svg>
            </div>
            <span className="hidden sm:inline">
              EJ<span className="text-brand-primary">DRONE</span>
            </span>
          </VTLink>
        </div>

        {isArchiveDetailPage ? (
          <div className="flex-1 min-w-0 px-2 hidden md:flex items-center justify-center">
            <div className="min-w-0 text-center">
              <div className="text-sm font-semibold text-white truncate">
                {currentArchiveMeta?.title ?? '档案详情'}
              </div>
              {currentArchiveMeta?.subtitle && (
                <div className="text-xs text-muted/70 truncate">{currentArchiveMeta.subtitle}</div>
              )}
            </div>
          </div>
        ) : (
          <nav className="hidden md:flex items-center space-x-1 ml-auto">
            {navLinks.map((link) => (
              <VTLink
                key={link.name}
                to={link.href}
                className={`nav-link px-4 py-2 rounded-lg transition-all duration-300 ${
                  location.pathname === link.href 
                    ? 'text-brand-primary bg-brand-primary/10' 
                    : linkClass
                }`}
              >
                {link.name}
              </VTLink>
            ))}
            <VTLink
              to="/contact"
              className="ml-4 btn-primary text-sm py-2 px-5"
            >
              联系我们
            </VTLink>
          </nav>
        )}

        <div className="ml-auto flex items-center gap-3">
          {isArchiveDetailPage && (
            <VTLink to="/contact" className="hidden md:inline-flex btn-primary text-sm py-2 px-5">
              联系我们
            </VTLink>
          )}

          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? '关闭菜单' : '打开菜单'}
          >
            {isMobileMenuOpen ? (
              <X className={mobileIconClass} size={24} />
            ) : (
              <Menu className={mobileIconClass} size={24} />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-cyber-dark/98 backdrop-blur-xl border-b border-white/5 md:hidden">
            <div className="flex flex-col py-4 px-4">
              {isArchiveDetailPage && (
                <button
                  type="button"
                  className="mb-3 px-4 py-3 rounded-lg font-medium transition-all text-left text-muted/80 hover:text-ink hover:bg-white/5"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleBackClick();
                  }}
                >
                  返回
                </button>
              )}
              {navLinks.map((link) => (
                <VTLink
                  key={link.name}
                  to={link.href}
                  className={`px-4 py-3 rounded-lg font-medium transition-all ${
                    location.pathname === link.href 
                      ? 'text-brand-primary bg-brand-primary/10' 
                      : 'text-muted/80 hover:text-ink hover:bg-white/5'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </VTLink>
              ))}
              <VTLink
                to="/contact"
                className="mx-4 mt-4 btn-primary text-center text-sm py-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                联系我们
              </VTLink>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
