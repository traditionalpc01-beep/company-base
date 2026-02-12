export type ThemeMode = 'light' | 'dark' | 'system';
export type AccentColor = 'blue' | 'green' | 'amber' | 'rose' | 'violet';

export interface ThemeConfig {
  mode: ThemeMode;
  accentColor: AccentColor;
  reduceMotion: boolean;
  highContrast: boolean;
}

export const defaultThemeConfig: ThemeConfig = {
  mode: 'system',
  accentColor: 'blue',
  reduceMotion: false,
  highContrast: false,
};

export const accentColorMap: Record<AccentColor, {
  primary: string;
  primaryDark: string;
  primaryLight: string;
  accent: string;
  accentDark: string;
}> = {
  blue: {
    primary: '30 64 175',
    primaryDark: '30 58 138',
    primaryLight: '96 165 250',
    accent: '14 165 233',
    accentDark: '3 105 161',
  },
  green: {
    primary: '22 163 74',
    primaryDark: '20 83 45',
    primaryLight: '74 222 128',
    accent: '16 185 129',
    accentDark: '5 150 105',
  },
  amber: {
    primary: '217 119 6',
    primaryDark: '146 64 14',
    primaryLight: '251 191 36',
    accent: '245 158 11',
    accentDark: '180 83 9',
  },
  rose: {
    primary: '225 29 72',
    primaryDark: '136 19 55',
    primaryLight: '253 164 175',
    accent: '244 63 94',
    accentDark: '190 18 60',
  },
  violet: {
    primary: '109 40 217',
    primaryDark: '76 29 149',
    primaryLight: '167 139 250',
    accent: '139 92 246',
    accentDark: '109 40 217',
  },
};

export const lightTheme = {
  /* 背景色 */
  '--c-bg': '250 250 252',
  '--c-surface': '255 255 255',
  '--c-surface-2': '244 244 246',
  '--c-surface-3': '228 228 231',
  '--c-surface-elevated': '255 255 255',
  
  /* 文本色 - WCAG AA 4.5:1 对比度 */
  '--c-ink': '24 24 27',
  '--c-ink-secondary': '63 63 70',
  '--c-muted': '82 82 91',
  '--c-muted-light': '161 161 170',
  '--c-placeholder': '161 161 170',
  
  /* 边框和分割线 */
  '--c-border': '228 228 231',
  '--c-border-strong': '212 212 216',
  '--c-divider': '244 244 246',
  
  /* 状态色 */
  '--c-success': '22 163 74',
  '--c-warning': '217 119 6',
  '--c-error': '220 38 38',
  '--c-info': '14 165 233',
  
  /* 阴影 */
  '--shadow-color': '0 0 0',
  '--shadow-opacity': '0.1',
  
  /* 叠加层 */
  '--c-overlay': '0 0 0',
  '--c-overlay-opacity': '0.5',
  
  /* 反色 */
  '--c-inverse': '255 255 255',
  '--c-inverse-muted': '244 244 246',
};

export const darkTheme = {
  /* 背景色 */
  '--c-bg': '9 9 11',
  '--c-surface': '24 24 27',
  '--c-surface-2': '39 39 42',
  '--c-surface-3': '63 63 70',
  '--c-surface-elevated': '39 39 42',
  
  /* 文本色 - WCAG AA 4.5:1 对比度 */
  '--c-ink': '250 250 250',
  '--c-ink-secondary': '228 228 231',
  '--c-muted': '161 161 170',
  '--c-muted-light': '113 113 122',
  '--c-placeholder': '113 113 122',
  
  /* 边框和分割线 */
  '--c-border': '63 63 70',
  '--c-border-strong': '82 82 91',
  '--c-divider': '39 39 42',
  
  /* 状态色 */
  '--c-success': '34 197 94',
  '--c-warning': '251 191 36',
  '--c-error': '248 113 113',
  '--c-info': '56 189 248',
  
  /* 阴影 */
  '--shadow-color': '0 0 0',
  '--shadow-opacity': '0.5',
  
  /* 叠加层 */
  '--c-overlay': '0 0 0',
  '--c-overlay-opacity': '0.7',
  
  /* 反色 */
  '--c-inverse': '24 24 27',
  '--c-inverse-muted': '39 39 42',
};

export const semanticColors = {
  /* 野生动物保护色系 */
  '--c-wildlife': '245 158 11',
  '--c-wildlife-deep': '180 83 9',
  '--c-wildlife-light': '251 191 36',
  '--c-conservation': '220 38 38',
  
  /* 植物保护色系 */
  '--c-plant': '16 185 129',
  '--c-plant-deep': '5 150 105',
  '--c-plant-light': '52 211 153',
  '--c-soil': '120 53 15',
  
  /* 科技色系 */
  '--c-tech': '14 165 233',
  '--c-tech-deep': '3 105 161',
  '--c-tech-light': '56 189 248',
};

export function generateCSSVariables(config: ThemeConfig, resolvedMode: 'light' | 'dark'): string {
  const accentColors = accentColorMap[config.accentColor];
  const themeColors = resolvedMode === 'light' ? lightTheme : darkTheme;
  
  const variables = [
    /* 强调色 */
    `--brand-primary: ${accentColors.primary};`,
    `--brand-primary-dark: ${accentColors.primaryDark};`,
    `--brand-primary-light: ${accentColors.primaryLight};`,
    `--brand-accent: ${accentColors.accent};`,
    `--brand-accent-dark: ${accentColors.accentDark};`,
    
    /* 野生动物保护色 */
    `--brand-wildlife: ${semanticColors['--c-wildlife']};`,
    `--brand-plant: ${semanticColors['--c-plant']};`,
    `--brand-surface: ${themeColors['--c-surface']};`,
    `--brand-surface2: ${themeColors['--c-surface-2']};`,
    
    /* 主题色 */
    ...Object.entries(themeColors).map(([key, value]) => `${key}: ${value};`),
    ...Object.entries(semanticColors).map(([key, value]) => `${key}: ${value};`),
    
    /* 暖色调映射 */
    `--c-warm: ${accentColors.primary};`,
  ];
  
  return variables.join('\n  ');
}

export function applyTheme(config: ThemeConfig, resolvedMode: 'light' | 'dark'): void {
  const root = document.documentElement;
  const cssVars = generateCSSVariables(config, resolvedMode);
  
  root.style.cssText = cssVars;
  
  // 设置 data-theme 属性用于 Tailwind 选择器
  root.setAttribute('data-theme', resolvedMode);
  
  // 设置高对比度模式
  if (config.highContrast) {
    root.classList.add('high-contrast');
  } else {
    root.classList.remove('high-contrast');
  }
  
  // 设置减少动画
  if (config.reduceMotion) {
    root.classList.add('reduce-motion');
  } else {
    root.classList.remove('reduce-motion');
  }
}
