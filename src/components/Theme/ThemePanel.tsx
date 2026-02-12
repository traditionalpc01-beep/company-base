import React, { useState, useEffect } from 'react';
import { X, Palette, Eye, Accessibility, Moon, Sun, Monitor, Check } from 'lucide-react';
import { useThemeStore } from '../../store/themeStore';
import type { ThemeMode, AccentColor } from '../../styles/theme-config';

interface ThemePanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const modeOptions: { value: ThemeMode; label: string; icon: React.ReactNode }[] = [
  { value: 'light', label: '浅色模式', icon: <Sun size={18} /> },
  { value: 'dark', label: '深色模式', icon: <Moon size={18} /> },
  { value: 'system', label: '跟随系统', icon: <Monitor size={18} /> },
];

const accentOptions: { value: AccentColor; label: string; color: string }[] = [
  { value: 'blue', label: '科技蓝', color: '#1e40af' },
  { value: 'green', label: '生态绿', color: '#16a34a' },
  { value: 'amber', label: '活力橙', color: '#d97706' },
  { value: 'rose', label: '热情红', color: '#e11d48' },
  { value: 'violet', label: '创新紫', color: '#6d28d9' },
];

export const ThemePanel: React.FC<ThemePanelProps> = ({ isOpen, onClose }) => {
  const {
    mode,
    accentColor,
    reduceMotion,
    highContrast,
    setMode,
    setAccentColor,
    setReduceMotion,
    setHighContrast,
    resolvedMode,
  } = useThemeStore();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 点击外部关闭
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!mounted) return null;

  return (
    <>
      {/* 遮罩层 */}
      <div
        className={`
          fixed inset-0 bg-black/50 backdrop-blur-sm z-50
          transition-opacity duration-300
          ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* 面板 */}
      <div
        className={`
          fixed right-0 top-0 h-full w-full max-w-md z-50
          bg-surface border-l border-border shadow-2xl
          transform transition-transform duration-300 ease-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
        role="dialog"
        aria-modal="true"
        aria-labelledby="theme-panel-title"
      >
        {/* 头部 */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center">
              <Palette className="text-brand-primary" size={20} />
            </div>
            <div>
              <h2 id="theme-panel-title" className="text-lg font-semibold text-ink">
                主题设置
              </h2>
              <p className="text-sm text-muted">
                当前: {resolvedMode === 'dark' ? '深色' : '浅色'}模式
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="
              w-10 h-10 rounded-full flex items-center justify-center
              text-muted hover:text-ink hover:bg-surface-2
              transition-colors duration-200
              focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/50
            "
            aria-label="关闭"
          >
            <X size={20} />
          </button>
        </div>

        {/* 内容区域 */}
        <div className="p-6 space-y-8 overflow-y-auto h-[calc(100%-80px)] scrollbar-thin">
          {/* 外观模式 */}
          <section>
            <h3 className="text-sm font-medium text-ink-secondary mb-4 flex items-center gap-2">
              <Eye size={16} />
              外观模式
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {modeOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setMode(option.value)}
                  className={`
                    flex flex-col items-center gap-2 p-4 rounded-xl
                    border-2 transition-all duration-200
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/50
                    ${mode === option.value
                      ? 'border-brand-primary bg-brand-primary/5 text-brand-primary'
                      : 'border-border bg-surface-2 text-muted hover:border-brand-primary/30 hover:text-ink'
                    }
                  `}
                >
                  {option.icon}
                  <span className="text-sm font-medium">{option.label}</span>
                </button>
              ))}
            </div>
          </section>

          {/* 强调色 */}
          <section>
            <h3 className="text-sm font-medium text-ink-secondary mb-4 flex items-center gap-2">
              <Palette size={16} />
              强调色
            </h3>
            <div className="grid grid-cols-5 gap-3">
              {accentOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setAccentColor(option.value)}
                  className={`
                    relative flex flex-col items-center gap-2 p-3 rounded-xl
                    border-2 transition-all duration-200
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/50
                    ${accentColor === option.value
                      ? 'border-brand-primary bg-brand-primary/5'
                      : 'border-border bg-surface-2 hover:border-brand-primary/30'
                    }
                  `}
                  title={option.label}
                >
                  <span
                    className="w-8 h-8 rounded-full shadow-md"
                    style={{ backgroundColor: option.color }}
                  />
                  {accentColor === option.value && (
                    <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-brand-primary flex items-center justify-center">
                      <Check size={10} className="text-white" />
                    </span>
                  )}
                  <span className="text-xs text-muted">{option.label}</span>
                </button>
              ))}
            </div>
          </section>

          {/* 辅助功能 */}
          <section>
            <h3 className="text-sm font-medium text-ink-secondary mb-4 flex items-center gap-2">
              <Accessibility size={16} />
              辅助功能
            </h3>
            <div className="space-y-3">
              {/* 减少动画 */}
              <label className="
                flex items-center justify-between p-4 rounded-xl
                border border-border bg-surface-2
                cursor-pointer transition-colors duration-200
                hover:border-brand-primary/30
              ">
                <div>
                  <span className="text-sm font-medium text-ink block">减少动画</span>
                  <span className="text-xs text-muted">降低界面动画效果</span>
                </div>
                <input
                  type="checkbox"
                  checked={reduceMotion}
                  onChange={(e) => setReduceMotion(e.target.checked)}
                  className="
                    w-5 h-5 rounded border-border
                    text-brand-primary focus:ring-brand-primary
                    cursor-pointer
                  "
                />
              </label>

              {/* 高对比度 */}
              <label className="
                flex items-center justify-between p-4 rounded-xl
                border border-border bg-surface-2
                cursor-pointer transition-colors duration-200
                hover:border-brand-primary/30
              ">
                <div>
                  <span className="text-sm font-medium text-ink block">高对比度</span>
                  <span className="text-xs text-muted">增强文本与背景对比</span>
                </div>
                <input
                  type="checkbox"
                  checked={highContrast}
                  onChange={(e) => setHighContrast(e.target.checked)}
                  className="
                    w-5 h-5 rounded border-border
                    text-brand-primary focus:ring-brand-primary
                    cursor-pointer
                  "
                />
              </label>
            </div>
          </section>

          {/* 预览区域 */}
          <section>
            <h3 className="text-sm font-medium text-ink-secondary mb-4">预览</h3>
            <div className="p-4 rounded-xl border border-border bg-surface-2 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center text-white text-sm font-bold">
                  A
                </div>
                <div>
                  <div className="text-sm font-medium text-ink">主标题文本</div>
                  <div className="text-xs text-muted">副标题文本</div>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 rounded-lg bg-brand-primary text-white text-sm font-medium">
                  主要按钮
                </button>
                <button className="px-4 py-2 rounded-lg border border-border text-ink text-sm font-medium bg-surface">
                  次要按钮
                </button>
              </div>
              <div className="p-3 rounded-lg bg-surface border border-border">
                <div className="text-xs text-muted mb-1">输入框预览</div>
                <input
                  type="text"
                  placeholder="请输入内容..."
                  className="w-full px-3 py-2 rounded-md border border-border bg-surface-2 text-ink text-sm"
                  readOnly
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ThemePanel;
