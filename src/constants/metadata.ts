import { type Locale } from '@/constants/locales';
import type { Metadata } from 'next';

const BASE_URL = 'https://example.com';
const SITE_NAME = 'Benoit CABOCEL Portfolio';

const fr = {
	description: '',
};

const en = {
	description: '',
};

const siteMetadata: Record<Locale, Metadata> = {
	fr: {
		title: SITE_NAME,
		description: fr.description,
		keywords: [],
		openGraph: {
			title: SITE_NAME,
			description: fr.description,
			url: `${BASE_URL}/fr`,
			siteName: SITE_NAME,
			type: 'website',
			images: [
				{
					url: `${BASE_URL}/static/og-image-fr.jpg`,
					secureUrl: `${BASE_URL}/static/og-image-fr.jpg`,
					width: 1200,
					height: 630,
					alt: 'Aperçu de Benoit CABOCEL Portfolio',
					type: 'image/jpg',
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			site: '@transcendence_survivors',
			title: SITE_NAME,
			description: fr.description,
			creator: '@transcendence_survivors',
			images: [
				{
					url: `${BASE_URL}/static/og-image-fr.jpg`,
					alt: 'Aperçu de Benoit CABOCEL Portfolio',
					width: 1200,
					height: 630,
				},
			],
		},
	},
	en: {
		title: SITE_NAME,
		description: en.description,
		keywords: [],
		openGraph: {
			title: SITE_NAME,
			description: en.description,
			url: `${BASE_URL}/en`,
			siteName: SITE_NAME,
			type: 'website',
			images: [
				{
					url: `${BASE_URL}/static/og-image-en.jpg`,
					secureUrl: `${BASE_URL}/static/og-image-en.jpg`,
					width: 1200,
					height: 630,
					alt: 'Preview of Benoit CABOCEL Portfolio',
					type: 'image/jpg',
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			site: '@transcendence_survivors',
			title: SITE_NAME,
			description: en.description,
			creator: '@transcendence_survivors',
			images: [
				{
					url: `${BASE_URL}/static/og-image-en.jpg`,
					alt: 'Preview of Benoit CABOCEL Portfolio',
					width: 1200,
					height: 630,
					type: 'image/jpg',
				},
			],
		},
	},
};

export default siteMetadata;
