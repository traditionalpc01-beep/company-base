import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ScrollManager from './components/ScrollManager';
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

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-cyber-dark flex flex-col relative overflow-x-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-pattern opacity-60" />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-noise opacity-[0.10] mix-blend-soft-light" />
        <div aria-hidden className="pointer-events-none absolute -top-56 -right-56 h-[40rem] w-[40rem] rounded-full bg-brand-accent/10 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute top-[28vh] -left-56 h-[34rem] w-[34rem] rounded-full bg-warm/10 blur-3xl" />

        <div className="relative min-h-screen flex flex-col">
          <ScrollManager />
          <Header />
          <main className="flex-grow view-transition-page">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/drone_service" element={<DroneService />} />
              <Route path="/cases" element={<Navigate to="/solutions#cases" replace />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/about" element={<About />} />
              <Route path="/developing" element={<Developing />} />
              <Route path="/news" element={<News />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/archives" element={<Archives />} />
              <Route path="/archives/sheng-wu-quan" element={<ShengWuQuan />} />
              <Route path="/archives/honor" element={<Honor />} />
              <Route path="/archives/sifeng" element={<Sifeng />} />
              <Route path="/archives/grid" element={<GridInspection />} />
              <Route path="/archives/dikuaibao" element={<DikuaiBao />} />
              <Route path="/archives/certification" element={<Certification />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
