import { defineRouting } from 'next-intl/routing';
import { type Locale, locales, defaultLocale, routeMap } from '@/constants/locales';

export type RouteMap = typeof routeMap;
export type RouteKey = keyof RouteMap;
export type CanonicalHref = RouteMap[RouteKey]['en'];
export const authRedirectRoute: CanonicalHref = routeMap.home.en;

export const getRoute = <K extends RouteKey, L extends Locale = typeof defaultLocale>(
	key: K,
	locale: L = defaultLocale as L,
): RouteMap[K][L] => routeMap[key][locale];

export const getPath = (key: RouteKey): CanonicalHref => routeMap[key].en;

export const resolveRoute = (key: RouteKey, locale: Locale) => {
	return getRoute(key, locale);
};

export const routing = defineRouting({
	locales,
	defaultLocale,
	pathnames: Object.fromEntries(
		Object.values(routeMap).map((value) => [value.en, value]),
	),
});
