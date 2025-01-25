import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IconsComponent } from '../../icons';
import { ButtonIcon, ButtonVariants } from './types';

@Component({
	// eslint-disable-next-line @angular-eslint/component-selector
	selector: 'button.c-button',
	template: `
		@if (icon(); as icon) {
			@if (icon.iconOnly) {
				<ch-icon [src]="icon.src" [size]="icon.size" />
			} @else {
				@if (icon.alignment === 'start') {
					<ch-icon [src]="icon.src" [size]="icon.size" />
				}

				<ng-content></ng-content>

				@if (icon.alignment === 'end') {
					<ch-icon [src]="icon.src" [size]="icon.size" />
				}
			}
		} @else {
			<ng-content></ng-content>
		}
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrl: 'style.scss',
	imports: [IconsComponent],
})
export class ButtonComponent {
	icon = input<ButtonIcon | null>(null);

	variant = input<ButtonVariants>('primary');
}
