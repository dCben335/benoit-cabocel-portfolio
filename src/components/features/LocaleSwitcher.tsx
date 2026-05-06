'use client';

import { useTranslations } from 'next-intl';
import { Button } from '../ui/button';
import { AppMessages } from '@/i18n/types';
import { Locale } from '@/constants/locales';
import useLocaleParams from '@/hooks/useLocaleParams';

interface LocaleSwitcherProps extends React.ComponentPropsWithoutRef<typeof Button> {}

type LocaleKeys = AppMessages['locales']['switcher'];
type LocaleToKey = Record<Locale, keyof LocaleKeys>;

const localeToKey = {
	en: 'en',
	fr: 'fr',
} satisfies LocaleToKey;

const LocaleSwitcher = ({ ...props }: LocaleSwitcherProps) => {
	const t = useTranslations('locales');
	const { locale, nextLocale, updateLocale } = useLocaleParams();

	return (
		<Button
			variant='outline'
			size='icon'
			aria-label={t('ariaLabel')}
			onClick={() => updateLocale(nextLocale)}
			{...props}>
			{t(`switcher.${localeToKey[locale]}`)}
		</Button>
	);
};

export default LocaleSwitcher;
