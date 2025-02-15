import { ChangeDetectionStrategy, Component, HostBinding, input } from '@angular/core';
import { IconsComponent } from '../../icons';
import { ButtonIcon, ButtonVariants } from './types';
import { SizeEnum } from '../../../common/enums';

@Component({
	// eslint-disable-next-line @angular-eslint/component-selector
	selector: 'button.c-button',
	template: `
		@if (icon()?.alignment === 'start' && icon(); as icon) {
			<c-icon [src]="icon.src" [size]="icon.size ?? DEFAULT_ICON_SIZE" />
		}

		<ng-content></ng-content>

		@if (icon()?.alignment === 'end' && icon(); as icon) {
			<c-icon [src]="icon.src" [size]="icon.size ?? DEFAULT_ICON_SIZE" />
		}
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrl: 'style.scss',
	imports: [IconsComponent],
})
export class ButtonComponent {
	disabled = input(false);

	icon = input<ButtonIcon | null>(null);

	variant = input<ButtonVariants>('primary');

	@HostBinding('class')
	get class() {
		return `${this.variant()}`;
	}

	@HostBinding('class.disabled')
	get isDisabled() {
		return this.disabled();
	}

	protected readonly DEFAULT_ICON_SIZE = SizeEnum.xSmall;
}
