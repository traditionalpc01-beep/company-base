import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ThemeConfig, ThemeMode, AccentColor } from '../styles/theme-config';
import { defaultThemeConfig, applyTheme } from '../styles/theme-config';

interface ThemeState extends ThemeConfig {
  resolvedMode: 'light' | 'dark';
  setMode: (mode: ThemeMode) => void;
  setAccentColor: (color: AccentColor) => void;
  setReduceMotion: (reduce: boolean) => void;
  setHighContrast: (high: boolean) => void;
  toggleMode: () => void;
  syncWithSystem: () => void;
}

const STORAGE_KEY = 'ejdrone-theme-config';

function getSystemPreference(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function resolveThemeMode(mode: ThemeMode): 'light' | 'dark' {
  if (mode === 'system') {
    return getSystemPreference();
  }
  return mode;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      ...defaultThemeConfig,
      resolvedMode: getSystemPreference(),

      setMode: (mode) => {
        const resolvedMode = resolveThemeMode(mode);
        set({ mode, resolvedMode });
        applyTheme({ ...get(), mode }, resolvedMode);
      },

      setAccentColor: (accentColor) => {
        const { resolvedMode } = get();
        set({ accentColor });
        applyTheme({ ...get(), accentColor }, resolvedMode);
      },

      setReduceMotion: (reduceMotion) => {
        const { resolvedMode } = get();
        set({ reduceMotion });
        applyTheme({ ...get(), reduceMotion }, resolvedMode);
      },

      setHighContrast: (highContrast) => {
        const { resolvedMode } = get();
        set({ highContrast });
        applyTheme({ ...get(), highContrast }, resolvedMode);
      },

      toggleMode: () => {
        const currentMode = get().mode;
        const currentResolvedMode = get().resolvedMode;
        let newMode: ThemeMode;
        let newResolvedMode: 'light' | 'dark';

        if (currentMode === 'system') {
          newResolvedMode = currentResolvedMode === 'light' ? 'dark' : 'light';
          newMode = newResolvedMode;
        } else {
          newMode = currentMode === 'light' ? 'dark' : 'light';
          newResolvedMode = newMode;
        }

        set({ mode: newMode, resolvedMode: newResolvedMode });
        applyTheme({ ...get(), mode: newMode }, newResolvedMode);
      },

      syncWithSystem: () => {
        const { mode } = get();
        if (mode === 'system') {
          const resolvedMode = getSystemPreference();
          set({ resolvedMode });
          applyTheme(get(), resolvedMode);
        }
      },
    }),
    {
      name: STORAGE_KEY,
      partialize: (state) => ({
        mode: state.mode,
        accentColor: state.accentColor,
        reduceMotion: state.reduceMotion,
        highContrast: state.highContrast,
      }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          const resolvedMode = resolveThemeMode(state.mode);
          state.resolvedMode = resolvedMode;
          applyTheme(state, resolvedMode);
        }
      },
    }
  )
);

// 初始化主题
export function initializeTheme(): void {
  if (typeof window === 'undefined') return;
  
  const store = useThemeStore.getState();
  const resolvedMode = resolveThemeMode(store.mode);
  
  // 应用初始主题
  applyTheme(store, resolvedMode);
  
  // 监听系统主题变化
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  mediaQuery.addEventListener('change', () => {
    store.syncWithSystem();
  });
}

// 获取当前有效的主题模式
export function getCurrentThemeMode(): 'light' | 'dark' {
  return useThemeStore.getState().resolvedMode;
}

// 检查是否为暗色模式
export function isDarkMode(): boolean {
  return useThemeStore.getState().resolvedMode === 'dark';
}
