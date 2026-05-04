import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import siteMetadata from '@/constants/metadata';
import { defaultLocale, Locale } from '@/constants/locales';
import { NextIntlClientProvider } from 'next-intl';
import { Toaster } from 'sonner';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { QuerryProvider } from '@/components/providers/QuerryProvider';

import '@/app/globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

type Params = Promise<{
	locale: string;
}>;

interface RootLayoutProps {
	children: React.ReactNode;
	params: Params;
}

interface MetadataProps {
	params: Params;
}

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
	const { locale } = (await params) as { locale: Locale };
	return siteMetadata[locale] || siteMetadata[defaultLocale];
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
	const { locale } = (await params) as { locale: Locale };

	return (
		<html
			suppressHydrationWarning
			lang={locale}
			className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
			<body className='min-h-full flex flex-col'>
				<NextIntlClientProvider locale={locale}>
					<ThemeProvider>
						<QuerryProvider>{children}</QuerryProvider>
					</ThemeProvider>
				</NextIntlClientProvider>
				<Toaster />
			</body>
		</html>
	);
}
