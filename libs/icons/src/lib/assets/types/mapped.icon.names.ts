import { IconName } from './icon.name';

export type MappedIconNames<T extends Record<string, string>> = {
	[key in keyof T]: IconName<T[key]>;
};
