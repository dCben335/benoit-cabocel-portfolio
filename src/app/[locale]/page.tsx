import LocaleSwitcher from '@/components/features/LocaleSwitcher';
import ThemeSwitcher from '@/components/features/ThemeSwitcher';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import { useTranslations } from 'next-intl';

export default function Home() {
	const t = useTranslations('home');

	return (
		<main>
			<nav className='flex justify-end top-0 left-0 right-0 p-4 fixed w-full z-10 gradient-bg'>
				<div className='flex gap-2'>
					<ThemeSwitcher />
					<LocaleSwitcher />
				</div>
			</nav>
			<Hero className='pt-32 pb-16' />
			<Projects />
		</main>
	);
}
