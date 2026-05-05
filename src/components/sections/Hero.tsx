import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import Linkedin from '../icons/LinkedIn';
import MdiGithub from '../icons/Github';
import Mail from '../icons/Mail';

const icons = [
	{
		Component: MdiGithub,
		url: 'https://github.com/dCben335',
		ariaLabel: 'GitHub',
	},
	{
		Component: Linkedin,
		url: 'https://www.linkedin.com/in/benoit-cabocel/',
		ariaLabel: 'LinkedIn',
	},
	{
		Component: Mail,
		url: 'mailto:benoit.cabocel.335@gmail.com',
		ariaLabel: 'Mail',
	},
];

const Hero = () => {
	const t = useTranslations('home.hero');

	return (
		<section className='relative grid md:grid-cols-2 gap-x-4'>
			<img
				src='/images/me.jpeg'
				alt='Hero'
				className='brightness-85 object-cover md:aspect-square md:h-125 md:w-auto  md:rounded-full'
			/>
			<div
				className='absolute grid gap-2 bottom-0 left-0 px-4 py-6 w-full
					transition-all duration-300 ease-in-out 	
					bg-linear-to-t from-black/90 to-transparent'>
				<h1 className='text-4xl font-bold text-white '>{t('name')}</h1>
				<h2 className='text-xl text-muted '>{t('role')}</h2>
				<ul className='flex gap-2'>
					{icons.map(({ Component, url }, index) => (
						<li key={index}>
							<Link href={url} target='_blank' rel='noopener noreferrer'>
								<Component className='text-2xl text-muted-foreground hover:text-muted focus-within:text-muted transition-colors duration-300' />
							</Link>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Hero;
