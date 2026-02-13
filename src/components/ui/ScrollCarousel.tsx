import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

interface ScrollCarouselProps {
  children: React.ReactNode;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showIndicators?: boolean;
  showArrows?: boolean;
  showProgress?: boolean;
  itemWidth?: number;
  gap?: number;
  className?: string;
}

const ScrollCarousel: React.FC<ScrollCarouselProps> = ({
  children,
  autoPlay = true,
  autoPlayInterval = 4000,
  showIndicators = true,
  showArrows = true,
  showProgress = true,
  itemWidth = 320,
  gap = 24,
  className = '',
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const progressTimerRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToIndex = useCallback((index: number) => {
    if (!scrollContainerRef.current || totalItems === 0) return;
    const scrollAmount = (itemWidth + gap) * index;
    scrollContainerRef.current.scrollTo({
      left: scrollAmount,
      behavior: 'smooth',
    });
    setProgress(0);
  }, [itemWidth, gap, totalItems]);

  const handleScroll = useCallback(() => {
    if (!scrollContainerRef.current || totalItems === 0) return;
    const scrollPosition = scrollContainerRef.current.scrollLeft;
    const newIndex = Math.round(scrollPosition / (itemWidth + gap));
    setCurrentIndex(Math.max(0, Math.min(newIndex, totalItems - 1)));
  }, [itemWidth, gap, totalItems]);

  const scroll = useCallback((direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = itemWidth + gap;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
    setProgress(0);
  }, [itemWidth, gap]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      scroll('left');
    } else if (e.key === 'ArrowRight') {
      scroll('right');
    } else if (e.key === ' ') {
      e.preventDefault();
      setIsPaused(prev => !prev);
    }
  }, [scroll]);

  const goToNext = useCallback(() => {
    setCurrentIndex(prev => {
      const nextIndex = prev >= totalItems - 1 ? 0 : prev + 1;
      scrollToIndex(nextIndex);
      return nextIndex;
    });
  }, [totalItems, scrollToIndex]);

  const goToPrev = useCallback(() => {
    setCurrentIndex(prev => {
      const nextIndex = prev <= 0 ? totalItems - 1 : prev - 1;
      scrollToIndex(nextIndex);
      return nextIndex;
    });
  }, [totalItems, scrollToIndex]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const childCount = container.children.length;
    setTotalItems(childCount);

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [children, handleScroll]);

  useEffect(() => {
    if (!autoPlay || isHovered || isPaused || totalItems <= 1) {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
        autoPlayTimerRef.current = null;
      }
      if (progressTimerRef.current) {
        clearInterval(progressTimerRef.current);
        progressTimerRef.current = null;
      }
      return;
    }

    const progressInterval = 50;
    const progressIncrement = (progressInterval / autoPlayInterval) * 100;

    progressTimerRef.current = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 0;
        return prev + progressIncrement;
      });
    }, progressInterval);

    autoPlayTimerRef.current = setInterval(() => {
      goToNext();
    }, autoPlayInterval);

    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
      if (progressTimerRef.current) {
        clearInterval(progressTimerRef.current);
      }
    };
  }, [autoPlay, autoPlayInterval, isHovered, isPaused, totalItems, goToNext]);

  const togglePause = () => {
    setIsPaused(prev => !prev);
  };

  return (
    <div 
      className={`relative group/carousel ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="滚动轮播"
      aria-roledescription="carousel"
    >
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none] cursor-grab active:cursor-grabbing"
        style={{ gap: `${gap}px`, scrollBehavior: 'smooth' }}
      >
        {children}
      </div>

      {showArrows && totalItems > 1 && (
        <>
          <button
            onClick={goToPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-card flex items-center justify-center text-muted hover:text-ink hover:border-brand-primary/50 hover:bg-brand-primary/5 transition-all shadow-xl hidden md:flex z-20 opacity-0 group-hover/carousel:opacity-100"
            aria-label="上一项"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-card flex items-center justify-center text-muted hover:text-ink hover:border-brand-primary/50 hover:bg-brand-primary/5 transition-all shadow-xl hidden md:flex z-20 opacity-0 group-hover/carousel:opacity-100"
            aria-label="下一项"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {showIndicators && totalItems > 1 && (
        <div className="flex items-center justify-center gap-3 mt-6">
          {autoPlay && (
            <button
              onClick={togglePause}
              className="w-8 h-8 rounded-full flex items-center justify-center text-muted hover:text-brand-primary hover:bg-brand-primary/10 transition-all"
              aria-label={isPaused ? '播放' : '暂停'}
            >
              {isPaused ? <Play size={16} /> : <Pause size={16} />}
            </button>
          )}
          
          <div className="flex items-center gap-2">
            {Array.from({ length: totalItems }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  scrollToIndex(index);
                  setCurrentIndex(index);
                  setProgress(0);
                }}
                className="relative h-2 rounded-full overflow-hidden transition-all duration-300 group/indicator"
                style={{
                  width: index === currentIndex ? '32px' : '8px',
                  backgroundColor: index === currentIndex ? 'transparent' : 'rgba(var(--color-muted-rgb) / 0.3)',
                }}
                aria-label={`跳转到第 ${index + 1} 项`}
                aria-current={index === currentIndex ? 'true' : undefined}
              >
                {index === currentIndex && showProgress && autoPlay && !isPaused && !isHovered && (
                  <div 
                    className="absolute inset-0 bg-brand-primary rounded-full"
                    style={{ 
                      width: `${progress}%`,
                      transition: 'width 0.05s linear'
                    }}
                  />
                )}
                {index === currentIndex && (
                  <div 
                    className="absolute inset-0 bg-brand-primary/30 rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                )}
                <div 
                  className="absolute inset-0 bg-brand-primary rounded-full opacity-0 group-hover/indicator:opacity-30 transition-opacity"
                />
              </button>
            ))}
          </div>
          
          <div className="text-xs text-muted/60 min-w-[40px] text-center">
            {currentIndex + 1} / {totalItems}
          </div>
        </div>
      )}

      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-surface via-surface/80 to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-surface via-surface/80 to-transparent pointer-events-none z-10" />
    </div>
  );
};

export default ScrollCarousel;
