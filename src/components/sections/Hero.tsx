import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import Linkedin from '../icons/LinkedIn';
import MdiGithub from '../icons/Github';
import Mail from '../icons/Mail';
import Container from '../ui/container';
import { Button } from '../ui/button';
import { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/utils/tailwind';

type HeroProps = ComponentPropsWithoutRef<'section'>;

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

const Hero = ({ className, ...props }: HeroProps) => {
	const t = useTranslations('home.hero');

	return (
		<Container asChild type='thin'>
			<section
				className={cn(
					'relative grid sm:grid-cols-2 gap-x-12 place-items-center',
					`${className}`,
				)}
				{...props}>
				<Image
					width={800}
					height={800}
					src='/images/me.jpeg'
					alt='Hero'
					className='brightness-85 object-cover w-full sm:aspect-square sm:h-auto sm:rounded-full'
				/>
				<HeroTitleContainer>
					<div className='space-y-1'>
						<h1 className='text-4xl font-bold'>{t('name')}</h1>
						<h2 className='text-xl text-overlay-dark-muted-foreground sm:text-foreground'>
							{t('role')}
						</h2>
					</div>
					<ul className='flex gap-2'>
						{icons.map(({ Component, url }, index) => (
							<li key={index}>
								<IconLink
									Icon={Component}
									href={url}
									ariaLabel={'Link to ' + url}
									size='large'
								/>
							</li>
						))}
					</ul>
				</HeroTitleContainer>
			</section>
		</Container>
	);
};

interface HeroTitleContainerProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
}

const HeroTitleContainer = ({ children, ...props }: HeroTitleContainerProps) => (
	<div
		className='absolute bottom-0 left-0 px-4 py-6 w-full space-y-4
		transition-all duration-300 ease-in-out
		bg-overlay-dark text-overlay-dark-foreground sm:bg-none sm:text-foreground
		sm:relative sm:bottom-auto sm:left-auto sm:px-0 sm:py-0
		sm:items-center sm:justify-start'
		{...props}>
		{children}
	</div>
);

type IconSize = 'small' | 'medium' | 'large';

interface IconLinkProps extends React.ComponentProps<typeof Link> {
	Icon: React.ElementType;
	ariaLabel: string;
	size?: IconSize;
}

const iconSizes: Record<IconSize, string> = {
	small: 'text-lg',
	medium: 'text-2xl',
	large: 'text-3xl',
};

const IconLink = ({
	Icon,
	href,
	ariaLabel,
	size = 'medium',
	...props
}: IconLinkProps) => (
	<Button asChild variant='outline-accent' size='icon' className='p-5'>
		<Link
			href={href}
			target='_blank'
			rel='noopener noreferrer'
			aria-label={ariaLabel}
			{...props}>
			<Icon
				className={`${iconSizes[size]} size-7  transition-colors duration-300`}
			/>
		</Link>
	</Button>
);

export default Hero;
