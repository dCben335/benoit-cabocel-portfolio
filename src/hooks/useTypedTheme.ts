'use client';

import { useTheme } from 'next-themes';
import { Theme } from '@/constants/themes';

type TypedTheme = Theme | undefined;

const useTypedTheme = () => {
	const { theme, resolvedTheme, setTheme } = useTheme();

	return {
		theme: theme as TypedTheme,
		resolvedTheme: resolvedTheme as TypedTheme,
		setTheme: (theme: Theme) => setTheme(theme),
	};
};

export default useTypedTheme;
