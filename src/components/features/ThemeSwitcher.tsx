'use client';

import useTypedTheme from '@/hooks/useTypedTheme';
import { useTranslations } from 'next-intl';
import { Button } from '../ui/button';

interface ThemeSwitcherProps extends React.ComponentPropsWithoutRef<typeof Button> {}

const ThemeSwitcher = ({ ...props }: ThemeSwitcherProps) => {
	const t = useTranslations('theme');
	const { theme, themeIcon, setTheme } = useTypedTheme();

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	return (
		<Button
			variant='outline'
			size='icon'
			aria-label={t('ariaLabel')}
			onClick={toggleTheme}
			{...props}>
			{themeIcon}
		</Button>
	);
};

export default ThemeSwitcher;
