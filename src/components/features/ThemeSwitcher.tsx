'use client';

import useTypedTheme from '@/hooks/useTypedTheme';
import { useTranslations } from 'next-intl';
import { Button } from '../ui/button';

interface ThemeSwitcherProps extends React.ComponentPropsWithoutRef<typeof Button> {}

const ThemeSwitcher = ({ ...props }: ThemeSwitcherProps) => {
	const t = useTranslations('theme');
	const { nextTheme, themeIcon, setTheme } = useTypedTheme();

	const toggleTheme = () => {
		setTheme(nextTheme);
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
