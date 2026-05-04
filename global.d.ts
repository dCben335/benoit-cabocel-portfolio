/* eslint-disable @typescript-eslint/no-empty-object-type */

import 'next-intl';

import messages from '@/i18n/messages/en.json';

type Messages = typeof messages;

declare module 'next-intl' {
	interface AppConfig {
		Messages: Messages;
	}
}

export {};
