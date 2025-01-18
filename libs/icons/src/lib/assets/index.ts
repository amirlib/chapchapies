import * as Icons from './iconoir';
import { IconNamesUnion } from './types/icon.names.union';

export type GeneralIcons = IconNamesUnion<typeof Icons>;

export type AllIcons = GeneralIcons;
