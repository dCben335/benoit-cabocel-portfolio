export const THEMES = ['light', 'dark', 'system'] as const;
export const THEME_LENGTH = THEMES.length;
export const THEME_COUNTS = THEME_LENGTH - 1;

export type Theme = (typeof THEMES)[number];
export type ResolvedTheme = Exclude<Theme, 'system'> | null;

export const DEFAULT_THEME = 'system' as const satisfies Theme;
