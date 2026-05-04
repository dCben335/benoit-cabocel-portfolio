export const defaultLocale = 'fr' as const;
export const locales = [defaultLocale, 'en'] as const;

export type Locale = (typeof locales)[number];

type RecordRoute = Record<string, Record<Locale, `/${string}`>>;
type StrictRouteMap<T extends RecordRoute> = T & {
	[K in keyof T]: {
		[L in keyof T[K]]: L extends Locale ? T[K][L] : never;
	};
};

const defineRouteMap = <T extends RecordRoute>(map: StrictRouteMap<T>): T => map as T;

export const routeMap = defineRouteMap({
	home: {
		en: '/',
		fr: '/',
	},
	about: {
		en: '/about',
		fr: '/a-propos',
	},
	projects: {
		en: '/projects',
		fr: '/projets',
	},
	projectId: {
		en: '/projects/[id]',
		fr: '/projets/[id]',
	},
	contact: {
		en: '/contact',
		fr: '/contact',
	},
} as const);
