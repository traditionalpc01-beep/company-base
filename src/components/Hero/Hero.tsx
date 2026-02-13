import React, { useEffect, useState } from 'react';
import { ChevronDown, Plane, Cpu, ArrowRight, Radio, Database, GraduationCap } from 'lucide-react';
import VTLink from '../VTLink';
import heroBg900 from '../../assets/ejdrone/optimized/ejdrone_98629acd31cb_900w.webp';
import heroBg1400 from '../../assets/ejdrone/optimized/ejdrone_98629acd31cb_1400w.webp';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-cyber-darker">
      <div className="absolute inset-0">
        <img
          src={heroBg1400}
          srcSet={`${heroBg900} 900w, ${heroBg1400} 1400w`}
          sizes="100vw"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-cyber-darker/75" />
      </div>
      <div className="absolute inset-0 grid-pattern opacity-35"></div>
      
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgb(var(--c-brand) / 0.18) 0%, transparent 52%)`,
        }}
      />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/12 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-accent/10 rounded-full blur-3xl animate-float animate-delay-300"></div>
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-warm/10 rounded-full blur-3xl animate-float animate-delay-500"></div>

      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${15 + Math.random() * 10}s`,
          }}
        />
      ))}

      <div className="relative z-10 h-full min-h-screen flex items-center px-4 pt-24 pb-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* 左侧内容 */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="animate-fade-in mb-7">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-brand-primary/25">
                  <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                  <span className="text-sm text-muted/80">科技守护自然</span>
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 animate-slide-up font-chinese tracking-tight leading-[0.98]">
                <span className="eco-gradient-text">心有翼</span>
                <span className="text-ink/80">，</span>
                <span className="tech-gradient-text">境无界</span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl font-light mb-4 animate-slide-up animate-delay-100 max-w-2xl text-ink/85 font-chinese">
                让自然生态更美好，让自然保护成为最酷的工作
              </p>

              <p className="text-sm sm:text-base md:text-lg mb-10 animate-slide-up animate-delay-200 max-w-xl text-muted/70">
                无人机 · 数据 · 智能化 · 赋能保护地精细化治理
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animate-delay-300">
                <VTLink to="/drone_service" className="btn-primary inline-flex items-center justify-center gap-2">
                  <Plane size={18} />
                  探索服务
                  <ArrowRight size={18} />
                </VTLink>
                <VTLink to="/about" className="btn-outline inline-flex items-center justify-center gap-2">
                  <Cpu size={18} />
                  了解我们
                </VTLink>
              </div>
            </div>

            {/* 右侧卡片 */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="glass-card p-5 sm:p-6 lg:p-7">
                <div className="flex items-center justify-between gap-4">
                  <div className="text-sm text-muted/70">核心能力</div>
                  <div className="text-xs text-muted/60">Field Notes / EJDRONE</div>
                </div>
                <div className="mt-5 space-y-3">
                  {/* 空地协同 - 使用无人机/信号图标 */}
                  <div className="flex items-center gap-3 rounded-2xl border border-ink/10 bg-ink/5 px-4 py-3">
                    <div className="w-10 h-10 rounded-2xl bg-brand-primary/18 flex items-center justify-center flex-shrink-0">
                      <Radio size={18} className="text-brand-primary" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-ink">空地协同</div>
                      <div className="text-xs text-muted/70">智慧巡护 · 快速响应 · 低成本部署</div>
                    </div>
                  </div>
                  {/* 信息化平台 - 使用数据库/服务器图标 */}
                  <div className="flex items-center gap-3 rounded-2xl border border-ink/10 bg-ink/5 px-4 py-3">
                    <div className="w-10 h-10 rounded-2xl bg-brand-accent/18 flex items-center justify-center flex-shrink-0">
                      <Database size={18} className="text-brand-accent" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-ink">信息化平台</div>
                      <div className="text-xs text-muted/70">数据采集 · 智能分析 · 管理闭环</div>
                    </div>
                  </div>
                  {/* 自然教育 - 使用毕业帽/教育图标 */}
                  <div className="flex items-center gap-3 rounded-2xl border border-ink/10 bg-ink/5 px-4 py-3">
                    <div className="w-10 h-10 rounded-2xl bg-warm/16 flex items-center justify-center flex-shrink-0">
                      <GraduationCap size={18} className="text-warm" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-ink">自然教育</div>
                      <div className="text-xs text-muted/70">内容策划 · 场域打造 · 多元参与</div>
                    </div>
                  </div>
                </div>

                {/* 统计数据 - 修复对齐 */}
                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div className="rounded-2xl border border-ink/10 bg-ink/5 px-3 sm:px-4 py-3 text-center">
                    <div className="text-xl sm:text-2xl font-semibold tech-gradient-text">80+</div>
                    <div className="text-xs text-muted/70 mt-1">服务保护地</div>
                  </div>
                  <div className="rounded-2xl border border-ink/10 bg-ink/5 px-3 sm:px-4 py-3 text-center">
                    <div className="text-xl sm:text-2xl font-semibold tech-gradient-text">12</div>
                    <div className="text-xs text-muted/70 mt-1">覆盖省份</div>
                  </div>
                  <div className="rounded-2xl border border-ink/10 bg-ink/5 px-3 sm:px-4 py-3 text-center">
                    <div className="text-xl sm:text-2xl font-semibold tech-gradient-text">100+</div>
                    <div className="text-xs text-muted/70 mt-1">知识产权</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <VTLink
        to="/#stats"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-cyber-darker rounded-full px-4 py-2"
        aria-label="向下滚动至数据统计"
      >
        <div className="flex flex-col items-center gap-2 text-muted/60">
          <span className="text-xs">向下滚动</span>
          <ChevronDown size={24} className="text-brand-accent" />
        </div>
      </VTLink>
    </section>
  );
};

export default Hero;
