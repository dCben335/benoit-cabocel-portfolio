'use client';

import { Locale, locales } from '@/constants/locales';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';

const useLocaleParams = () => {
	const locale = useLocale() as Locale;
	const pathname = usePathname();
	const router = useRouter();

	const nextLocale = locales[(locales.indexOf(locale) + 1) % locales.length];

	const updateLocale = (newLocale: Locale) => {
		router.replace(pathname, { locale: newLocale });
	};

	return { locale, nextLocale, updateLocale };
};

export default useLocaleParams;
