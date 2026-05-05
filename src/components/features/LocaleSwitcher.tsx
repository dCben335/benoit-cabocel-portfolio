'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Button } from '../ui/button';
import { AppMessages } from '@/i18n/types';
import { Locale } from '@/constants/locales';
import { usePathname, useRouter } from '@/i18n/navigation';

interface LocaleSwitcherProps extends React.ComponentPropsWithoutRef<typeof Button> {}

type LocaleKeys = AppMessages['locales']['switcher'];
type LocaleToKey = Record<Locale, keyof LocaleKeys>;

const localeToKey = {
	en: 'en',
	fr: 'fr',
} satisfies LocaleToKey;

const LocaleSwitcher = ({ ...props }: LocaleSwitcherProps) => {
	const t = useTranslations('locales');
	const locale = useLocale() as Locale;
	const pathname = usePathname();
	const router = useRouter();

	const changeLocale = () => {
		const newLocale = locale === 'en' ? 'fr' : 'en';
		router.replace(pathname, { locale: newLocale });
	};

	return (
		<Button
			variant='outline'
			size='icon'
			aria-label={t('ariaLabel')}
			onClick={changeLocale}
			{...props}>
			{t(`switcher.${localeToKey[locale]}`)}
		</Button>
	);
};

export default LocaleSwitcher;
