import { Slot } from './slot';

type ContainerType = 'default' | 'thin' | 'wide' | 'full';

interface ContainerProps {
	children: React.ReactNode;
	asChild?: boolean;
	type?: ContainerType;
}

const containerWidths: Record<ContainerType, string> = {
	default: 'max-w-[1300px] mx-auto',
	thin: 'max-w-[900px] mx-auto',
	wide: 'max-w-[1600px] mx-auto',
	full: 'w-full',
};

const Container = ({ children, asChild = false, type = 'default' }: ContainerProps) => {
	const className = containerWidths[type];
	const Comp = asChild ? Slot : 'div';

	return <Comp className={className}>{children}</Comp>;
};

export default Container;
