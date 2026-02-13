import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ScrollManager from './components/ScrollManager';
import { ThemePanel } from './components/Theme';
import Home from './pages/Home/Home';
import DroneService from './pages/DroneService/index';
import About from './pages/About/index';
import Developing from './pages/Developing/index';
import Solutions from './pages/Solutions/index';
import Partners from './pages/Partners/index';
import News from './pages/News/index';
import Faq from './pages/Faq/index';
import Archives from './pages/Archives/index';
import ShengWuQuan from './pages/Archives/ShengWuQuan/index';
import Honor from './pages/Archives/Honor/index';
import Sifeng from './pages/Archives/Sifeng/index';
import GridInspection from './pages/Archives/GridInspection/index';
import DikuaiBao from './pages/Archives/DikuaiBao/index';
import Certification from './pages/Archives/Certification/index';
import Contact from './pages/Contact/index';
import Privacy from './pages/Privacy/index';
import Terms from './pages/Terms/index';
import Sitemap from './pages/Sitemap/index';
import NotFound from './pages/NotFound/index';
import { useThemeStore } from './store/themeStore';

function LegacyArchiveRedirect() {
  const { legacy } = useParams();
  const value = String(legacy ?? '');
  if (/^\d+$/.test(value)) return <Navigate to="/news" replace />;
  return <Navigate to="/archives" replace />;
}

function AppContent() {
  const [isThemePanelOpen, setIsThemePanelOpen] = useState(false);
  const { resolvedMode } = useThemeStore();
  
  return (
    <div 
      className="min-h-screen flex flex-col relative overflow-x-hidden theme-transition"
      style={{
        backgroundColor: 'rgb(var(--c-bg))',
        color: 'rgb(var(--c-ink))',
      }}
    >
      {/* 背景装饰 - 根据主题调整 */}
      <div 
        aria-hidden 
        className="pointer-events-none absolute inset-0 grid-pattern opacity-60 theme-transition" 
      />
      <div 
        aria-hidden 
        className="pointer-events-none absolute inset-0 bg-noise opacity-[0.03] mix-blend-soft-light theme-transition" 
      />
      <div 
        aria-hidden 
        className="pointer-events-none absolute -top-56 -right-56 h-[40rem] w-[40rem] rounded-full blur-3xl theme-transition"
        style={{ 
          backgroundColor: resolvedMode === 'dark' 
            ? 'rgba(96, 165, 250, 0.08)' 
            : 'rgba(30, 64, 175, 0.06)' 
        }}
      />
      <div 
        aria-hidden 
        className="pointer-events-none absolute top-[28vh] -left-56 h-[34rem] w-[34rem] rounded-full blur-3xl theme-transition"
        style={{ 
          backgroundColor: resolvedMode === 'dark' 
            ? 'rgba(16, 185, 129, 0.06)' 
            : 'rgba(22, 163, 74, 0.05)' 
        }}
      />

      <div className="relative min-h-screen flex flex-col">
        <ScrollManager />
        <Header onOpenThemePanel={() => setIsThemePanelOpen(true)} />
        <main className="flex-grow view-transition-page">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/drone_service" element={<DroneService />} />
            <Route path="/cases" element={<Navigate to="/solutions#cases" replace />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/about" element={<About />} />
            <Route path="/aboutus" element={<Navigate to="/about" replace />} />
            <Route path="/categories/about" element={<Navigate to="/about" replace />} />
            <Route path="/about/about" element={<Navigate to="/about#intro" replace />} />
            <Route path="/about/team" element={<Navigate to="/about#team" replace />} />
            <Route path="/about/culture" element={<Navigate to="/about#values" replace />} />
            <Route path="/about/strategy" element={<Navigate to="/about#vision" replace />} />
            <Route path="/about/contact" element={<Navigate to="/about#locations" replace />} />
            <Route path="/about/position" element={<Navigate to="/about#locations" replace />} />
            <Route path="/developing" element={<Developing />} />
            <Route path="/categories/zhao-pin-gang-wei" element={<Navigate to="/developing" replace />} />
            <Route path="/news" element={<News />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/archives" element={<Archives />} />
            <Route path="/archives/sheng-wu-quan" element={<ShengWuQuan />} />
            <Route path="/archives/honor" element={<Honor />} />
            <Route path="/archives/sifeng" element={<Sifeng />} />
            <Route path="/archives/grid" element={<GridInspection />} />
            <Route path="/archives/dikuaibao" element={<DikuaiBao />} />
            <Route path="/archives/certification" element={<Certification />} />
            <Route path="/archives/home" element={<Navigate to="/" replace />} />
            <Route path="/archives/dkbao" element={<Navigate to="/archives/dikuaibao" replace />} />
            <Route path="/archives/qi-ye-ren-zheng" element={<Navigate to="/archives/certification" replace />} />
            <Route path="/archives/rong-yu-zi-zhi" element={<Navigate to="/archives/honor" replace />} />
            <Route path="/archives/wu-ren-ji-xun-jian-xi-tong" element={<Navigate to="/archives/grid" replace />} />
            <Route path="/archives/si-feng-shu-ju-hui-shou-guan-li-xi-tong-caupKCq0" element={<Navigate to="/archives/sifeng" replace />} />
            <Route path="/archives/:legacy" element={<LegacyArchiveRedirect />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contactus" element={<Navigate to="/contact" replace />} />
            <Route path="/categories/contact" element={<Navigate to="/contact" replace />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/categories/drone" element={<Navigate to="/drone_service" replace />} />
            <Route path="/categories/service" element={<Navigate to="/drone_service" replace />} />
            <Route path="/categories/apply-scen" element={<Navigate to="/solutions" replace />} />
            <Route path="/categories/product" element={<Navigate to="/archives" replace />} />
            <Route path="/categories/honor" element={<Navigate to="/archives/honor" replace />} />
            <Route path="/categories/ims" element={<Navigate to="/archives" replace />} />
            <Route path="/categories/nature" element={<Navigate to="/solutions" replace />} />
            <Route path="/categories/explain" element={<Navigate to="/solutions" replace />} />
            <Route path="/categories/field" element={<Navigate to="/solutions" replace />} />
            <Route path="/categories/platform" element={<Navigate to="/solutions" replace />} />
            <Route path="/nature-education" element={<Navigate to="/solutions" replace />} />
            <Route path="/ne-place" element={<Navigate to="/solutions" replace />} />
            <Route path="/ne-platform" element={<Navigate to="/solutions" replace />} />
            <Route path="/ne-research" element={<Navigate to="/solutions" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer onOpenThemePanel={() => setIsThemePanelOpen(true)} />
      </div>
      
      {/* 全局主题设置面板 */}
      <ThemePanel isOpen={isThemePanelOpen} onClose={() => setIsThemePanelOpen(false)} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
