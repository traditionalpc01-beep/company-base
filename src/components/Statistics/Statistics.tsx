import React, { useEffect, useState, useRef } from 'react';
import { Shield, MapPin, Users, Award } from 'lucide-react';

interface StatItemProps {
  value: number;
  label: string;
  suffix?: string;
  icon: React.ReactNode;
  delay: number;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, suffix = '', icon, delay }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let start = 0;
    const end = value;
    const duration = 2000;
    const startTime = Date.now();

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOut * end);
      
      setCount(current);
      
      if (progress >= 1) {
        clearInterval(timer);
        setCount(end);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div 
      ref={elementRef}
      className="stat-card relative group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/6 to-brand-accent/6 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10">
        <div className="icon-box inline-flex mb-4 group-hover:shadow-glow transition-shadow duration-300">
          {icon}
        </div>
        
        <div className="text-4xl md:text-5xl font-bold mb-2 font-english">
          <span className="tech-gradient-text">{count}</span>
          {suffix && <span className="text-2xl md:text-3xl text-warm ml-1">{suffix}</span>}
        </div>
        
        <p className="text-muted/80 text-sm md:text-base font-medium">{label}</p>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-brand-primary to-transparent group-hover:w-3/4 transition-all duration-500"></div>
    </div>
  );
};

const Statistics: React.FC = () => {
  const stats = [
    { 
      value: 80, 
      label: '服务保护地', 
      suffix: '+',
      icon: <Shield size={28} className="text-brand-primary" />,
    },
    { 
      value: 12, 
      label: '足迹遍布省市区', 
      suffix: '',
      icon: <MapPin size={28} className="text-brand-accent" />,
    },
    { 
      value: 60, 
      label: '研发团队', 
      suffix: '+',
      icon: <Users size={28} className="text-warm" />,
    },
    { 
      value: 100, 
      label: '知识产权', 
      suffix: '+',
      icon: <Award size={28} className="text-brand-primary" />,
    },
  ];

  return (
    <section id="stats" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark via-cyber-darker to-cyber-dark"></div>
      
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary/25 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary/25 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-7">
            <h2 className="section-title text-white">
              <span className="eco-gradient-text">数据驱动</span>
              <span className="text-white/80">，科技赋能</span>
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-brand-primary via-warm to-transparent rounded-full mb-4"></div>
          </div>
          <div className="md:col-span-5 md:pb-2">
            <p className="text-muted/75 leading-relaxed">
              深受保护地信赖的生产力工具，服务于全国生物多样性热点区域，持续沉淀方法与数据资产。
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-12 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`${
                index === 0
                  ? 'md:col-span-4'
                  : index === 1
                    ? 'md:col-span-3 md:col-start-6 md:translate-y-6'
                    : index === 2
                      ? 'md:col-span-3 md:col-start-1 md:translate-y-10'
                      : 'md:col-span-4 md:col-start-9'
              }`}
            >
              <StatItem
                value={stat.value}
                label={stat.label}
                suffix={stat.suffix}
                icon={stat.icon}
                delay={index * 100}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
