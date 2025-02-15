import { ButtonComponent } from './button.component';
import { createStoryModule } from '@chapchapies/storybook';
import { Meta, StoryObj } from '@storybook/angular';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { ButtonVariants } from './types';
import { enumToArray } from '@chapchapies/shared-lib';

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [ButtonComponent, NgForOf],
	template: `
		<fieldset *ngFor="let variant of variants" class="flex gap-4 p-4">
			<legend class="text-lg">{{ variant }}</legend>
			<button class="c-button" [variant]="variant">Normal</button>
			<button class="c-button" [disabled]="true" [variant]="variant">Disabled</button>

			<button class="c-button outline" [variant]="variant">Outline</button>
			<button class="c-button outline" [disabled]="true" [variant]="variant">Outline disabled</button>

			<button class="c-button ghost" [variant]="variant">Ghost</button>
			<button class="c-button ghost" [disabled]="true" [variant]="variant">Ghost disabled</button>

			<button class="c-button" [icon]="{ alignment: 'start', src: 'airplane-helix' }" [variant]="variant">
				With icons
			</button>
			<button class="c-button" [icon]="{ alignment: 'end', src: 'apple' }" [variant]="variant">With icons</button>

			<button class="c-button" [icon]="{ alignment: 'start', src: 'bicycle' }" [variant]="variant"></button>
			<button
				class="c-button"
				[disabled]="true"
				[icon]="{ alignment: 'start', src: 'bicycle' }"
				[variant]="variant"
			></button>
		</fieldset>
	`,
})
class ButtonsStoryComponent {
	variants: Array<ButtonVariants> = enumToArray(ButtonVariants);
}

const meta: Meta<typeof ButtonsStoryComponent> = {
	component: ButtonsStoryComponent,
	...createStoryModule(),
};

export default meta;

export const Buttons: StoryObj<ButtonsStoryComponent> = {};
