type PrimitiveKey = string | number;

type Join<K, P> = K extends PrimitiveKey
	? P extends PrimitiveKey
		? `${K}.${P}`
		: never
	: never;

export type DeepKeys<T> = {
	[K in keyof T]: T[K] extends object ? Join<K, DeepKeys<T[K]>> : K;
}[keyof T];
