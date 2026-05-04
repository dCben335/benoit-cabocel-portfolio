import { DeepKeys } from '@/libs/types';

export type AppMessages = typeof import('@/i18n/messages/fr.json');
export type MessageKeys = DeepKeys<AppMessages>;
