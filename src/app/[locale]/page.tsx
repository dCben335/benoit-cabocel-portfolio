import { useTranslations } from 'next-intl';

export default function Home() {
	const t = useTranslations('home');

	return (
		<main>
			<h1 className='text-3xl font-bold'>{t('title')}</h1>
			<p>{t('description')}</p>
		</main>
	);
}
