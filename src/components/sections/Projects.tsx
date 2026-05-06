import { useTranslations } from 'next-intl';
import Container from '../ui/container';

const Projects = () => {
	const t = useTranslations('home.projects');

	return (
		<Container asChild type='thin'>
			<section className='py-32'>
				<h2 className='text-3xl font-bold mb-10'>{t('title')}</h2>
			</section>
		</Container>
	);
};

export default Projects;
