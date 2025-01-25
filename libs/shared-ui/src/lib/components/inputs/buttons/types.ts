import { AllIcons } from '@chapchapies/icons';
import { SizeEnum } from '../../../common';

export type ButtonIcon =
	| { alignment: 'start' | 'end'; iconOnly?: false; src: AllIcons; size?: SizeEnum }
	| { alignment?: never; iconOnly: true; src: AllIcons; size?: SizeEnum };

export type ButtonTypes = 'reset' | 'submit' | 'button';

export type ButtonVariants = 'primary' | 'secondary';
