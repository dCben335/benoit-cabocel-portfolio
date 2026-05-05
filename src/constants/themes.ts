export const THEMES = ['light', 'dark', 'system'] as const;

export type Theme = (typeof THEMES)[number];
export type ResolvedTheme = Exclude<Theme, 'system'>;

export const DEFAULT_THEME = 'system' as const satisfies Theme;
