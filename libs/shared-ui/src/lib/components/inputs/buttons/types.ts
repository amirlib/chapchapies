import { AllIcons } from '@chapchapies/icons';
import { SizeEnum } from '../../../common';

export enum ButtonVariants {
	primary = 'primary',
	secondary = 'secondary',
}

export type ButtonIcon = { alignment: 'start' | 'end'; size?: SizeEnum; src: AllIcons };
