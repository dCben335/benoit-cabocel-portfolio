'use client';

import { useTheme } from 'next-themes';
import { ResolvedTheme } from '@/constants/themes';
import useIsMounted from './useIsMounted';

const themeIcons: Record<ResolvedTheme, string> = {
	light: '🌞',
	dark: '🌜',
} as const;

export default function useTypedTheme() {
	const { theme, setTheme } = useTheme();
	const isMounted = useIsMounted();

	const safeTheme: ResolvedTheme =
		isMounted && theme ? (theme as ResolvedTheme) : 'light';

	const nextTheme: ResolvedTheme = safeTheme === 'light' ? 'dark' : 'light';

	return {
		theme: safeTheme,
		themeIcon: themeIcons[safeTheme],
		setTheme: (newTheme: ResolvedTheme) => setTheme(newTheme),
		nextTheme,
	};
}
