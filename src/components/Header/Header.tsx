import React, { useMemo, useState, useEffect } from 'react';
import { ArrowLeft, Menu, X, Settings } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { siteContent } from '../../content';
import VTLink from '../VTLink';
import { ThemeToggle } from '../Theme';
import logo from '../../resource/翼界LOGO（透明）-24.png';

interface HeaderProps {
  onOpenThemePanel?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenThemePanel }) => {
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
  
  // 根据主题模式调整header样式
  const headerClass = isHomePage && !isScrolled 
    ? 'bg-transparent py-4' 
    : 'bg-surface/95 backdrop-blur-xl border-b border-border py-3 shadow-lg theme-transition';
  
  const logoClass = 'text-ink';
  const linkClass = 'text-muted hover:text-ink theme-transition';
  const mobileIconClass = 'text-ink';

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
      <div className="container mx-auto px-4 flex items-center justify-between gap-3">
        {/* 左侧：返回按钮 + Logo */}
        <div className="flex items-center gap-3 flex-shrink-0">
          {isArchiveDetailPage && (
            <button
              type="button"
              onClick={handleBackClick}
              className="group inline-flex items-center gap-2 px-3 py-2 rounded-full transition-colors duration-200 select-none bg-surface-2/80 backdrop-blur border border-border text-muted hover:text-ink hover:border-brand-primary/30 hover:shadow-glow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              aria-label="返回"
            >
              <ArrowLeft size={18} className="transition-transform duration-200 group-hover:-translate-x-0.5" />
              <span className="text-sm font-medium hidden sm:inline">返回</span>
            </button>
          )}

          <VTLink to="/" className={`text-xl sm:text-2xl font-bold flex items-center gap-2 ${logoClass}`}>
            <img src={logo} alt="翼界科技" className="h-8 sm:h-10 w-auto" />
            <span className="hidden sm:inline">
              EJ<span className="text-brand-primary">DRONE</span>
            </span>
          </VTLink>
        </div>

        {/* 中间：导航或档案详情标题 */}
        {isArchiveDetailPage ? (
          <div className="flex-1 min-w-0 px-2 hidden md:flex items-center justify-center">
            <div className="min-w-0 text-center">
              <div className="text-sm font-semibold text-ink truncate">
                {currentArchiveMeta?.title ?? '档案详情'}
              </div>
              {currentArchiveMeta?.subtitle && (
                <div className="text-xs text-muted truncate">{currentArchiveMeta.subtitle}</div>
              )}
            </div>
          </div>
        ) : (
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <VTLink
                key={link.name}
                to={link.href}
                className={`nav-link px-3 lg:px-4 py-2 rounded-lg transition-all duration-300 text-sm xl:text-base whitespace-nowrap ${
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
              className="ml-2 xl:ml-4 btn-primary text-sm py-2 px-4 xl:px-5 whitespace-nowrap"
            >
              联系我们
            </VTLink>
          </nav>
        )}

        {/* 右侧：主题控制 + 移动端菜单按钮 */}
        <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
          {/* 主题切换按钮 */}
          <ThemeToggle variant="icon" size="md" />
          
          {/* 主题设置按钮 */}
          {onOpenThemePanel && (
            <button
              type="button"
              onClick={onOpenThemePanel}
              className="
                w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center
                transition-all duration-300 ease-out
                bg-surface-2 hover:bg-surface-3
                border border-border hover:border-brand-primary/50
                text-muted hover:text-brand-primary
                focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/50
                hidden sm:flex
              "
              aria-label="主题设置"
              title="主题设置"
            >
              <Settings size={16} className="sm:w-[18px] sm:h-[18px]" />
            </button>
          )}

          {isArchiveDetailPage && (
            <VTLink to="/contact" className="hidden md:inline-flex btn-primary text-sm py-2 px-4">
              联系我们
            </VTLink>
          )}

          <button
            className="lg:hidden p-2 rounded-lg hover:bg-surface-2 transition-colors"
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

        {/* 移动端菜单 */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-surface/98 backdrop-blur-xl border-b border-border lg:hidden theme-transition">
            <div className="flex flex-col py-4 px-4">
              {isArchiveDetailPage && (
                <button
                  type="button"
                  className="mb-3 px-4 py-3 rounded-lg font-medium transition-all text-left text-muted hover:text-ink hover:bg-surface-2"
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
                      : 'text-muted hover:text-ink hover:bg-surface-2'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </VTLink>
              ))}
              
              {/* 移动端主题控制 */}
              <div className="mt-3 pt-3 border-t border-border">
                <div className="px-4 py-2 text-sm text-muted">主题设置</div>
                <div className="flex items-center gap-2 px-4 py-2">
                  <ThemeToggle variant="segmented" size="sm" />
                </div>
                {onOpenThemePanel && (
                  <button
                    type="button"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onOpenThemePanel();
                    }}
                    className="w-full mt-2 px-4 py-3 rounded-lg font-medium text-left text-muted hover:text-ink hover:bg-surface-2 transition-all flex items-center gap-2"
                  >
                    <Settings size={18} />
                    更多主题选项
                  </button>
                )}
              </div>
              
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
