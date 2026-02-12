import React, { useEffect, useState } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useThemeStore } from '../../store/themeStore';
import type { ThemeMode } from '../../styles/theme-config';

interface ThemeToggleProps {
  variant?: 'icon' | 'button' | 'segmented';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const modeIcons: Record<ThemeMode, React.ReactNode> = {
  light: <Sun size={18} />,
  dark: <Moon size={18} />,
  system: <Monitor size={18} />,
};

const modeLabels: Record<ThemeMode, string> = {
  light: '浅色',
  dark: '深色',
  system: '跟随系统',
};

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  variant = 'icon',
  size = 'md',
  className = '',
}) => {
  const { mode, resolvedMode, setMode, toggleMode } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  // 避免 hydration 不匹配
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`w-10 h-10 rounded-full bg-surface-2 animate-pulse ${className}`} />
    );
  }

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const iconSizes = {
    sm: 16,
    md: 18,
    lg: 20,
  };

  // 图标按钮样式
  if (variant === 'icon') {
    return (
      <button
        type="button"
        onClick={toggleMode}
        className={`
          ${sizeClasses[size]}
          rounded-full flex items-center justify-center
          transition-all duration-300 ease-out
          bg-surface-2 hover:bg-surface-3
          border border-border hover:border-brand-primary/50
          text-ink hover:text-brand-primary
          focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/50
          ${className}
        `}
        aria-label={`当前主题: ${modeLabels[resolvedMode === 'dark' ? 'dark' : 'light']}，点击切换`}
        title={`当前: ${modeLabels[mode]} (${mode === 'system' ? (resolvedMode === 'dark' ? '深色' : '浅色') : ''})`}
      >
        <span className="relative">
          {resolvedMode === 'dark' ? (
            <Moon size={iconSizes[size]} className="transition-transform duration-300" />
          ) : (
            <Sun size={iconSizes[size]} className="transition-transform duration-300" />
          )}
        </span>
      </button>
    );
  }

  // 按钮样式
  if (variant === 'button') {
    return (
      <button
        type="button"
        onClick={toggleMode}
        className={`
          inline-flex items-center gap-2 px-4 py-2 rounded-full
          transition-all duration-300 ease-out
          bg-surface-2 hover:bg-surface-3
          border border-border hover:border-brand-primary/50
          text-ink hover:text-brand-primary
          focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/50
          ${className}
        `}
        aria-label={`当前主题: ${modeLabels[resolvedMode === 'dark' ? 'dark' : 'light']}，点击切换`}
      >
        {resolvedMode === 'dark' ? (
          <Moon size={iconSizes[size]} />
        ) : (
          <Sun size={iconSizes[size]} />
        )}
        <span className="text-sm font-medium">
          {resolvedMode === 'dark' ? '深色模式' : '浅色模式'}
        </span>
      </button>
    );
  }

  // 分段选择器样式
  return (
    <div className={`
      inline-flex items-center p-1 rounded-full
      bg-surface-2 border border-border
      ${className}
    `}>
      {(Object.keys(modeIcons) as ThemeMode[]).map((m) => (
        <button
          key={m}
          type="button"
          onClick={() => setMode(m)}
          className={`
            relative flex items-center justify-center
            w-9 h-9 rounded-full
            transition-all duration-200 ease-out
            focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/50
            ${mode === m
              ? 'bg-brand-primary text-white shadow-lg'
              : 'text-muted hover:text-ink hover:bg-surface-3'
            }
          `}
          aria-label={modeLabels[m]}
          title={modeLabels[m]}
        >
          {React.cloneElement(modeIcons[m] as React.ReactElement, {
            size: iconSizes[size],
          })}
        </button>
      ))}
    </div>
  );
};

export default ThemeToggle;
