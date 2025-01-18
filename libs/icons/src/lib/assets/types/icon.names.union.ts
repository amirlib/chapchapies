import { MappedIconNames } from './mapped.icon.names';

export type IconNamesUnion<T extends Record<string, string>> = MappedIconNames<T>[keyof T];
