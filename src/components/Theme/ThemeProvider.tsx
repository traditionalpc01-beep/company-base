import React, { useEffect, useState } from 'react';
import { initializeTheme, useThemeStore } from '../../store/themeStore';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  const resolvedMode = useThemeStore((state) => state.resolvedMode);

  useEffect(() => {
    // 初始化主题
    initializeTheme();
    setMounted(true);
  }, []);

  // 防止 hydration 不匹配，在客户端挂载前不渲染
  if (!mounted) {
    return (
      <div style={{ visibility: 'hidden' }}>
        {children}
      </div>
    );
  }

  return (
    <div
      className="theme-wrapper"
      data-theme={resolvedMode}
      style={{
        // 确保主题过渡平滑
        transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1), color 300ms cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {children}
    </div>
  );
};

export default ThemeProvider;
