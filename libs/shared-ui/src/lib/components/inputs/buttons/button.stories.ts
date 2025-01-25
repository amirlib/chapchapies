import { ButtonComponent } from './button.component';
import { createStoryModule } from '@chapchapies/storybook';
import { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { ButtonVariants } from './types';

@Component({
	imports: [ButtonComponent, NgForOf],
	template: `
		<fieldset *ngFor="let variant of variants" class="m-4 flex gap-4 p-4">
			<legend class="p-2 text-lg">{{ variant }}</legend>
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

			<button class="c-button" [icon]="{ iconOnly: true, src: 'bicycle' }" [variant]="variant"></button>
			<button
				class="c-button"
				[disabled]="true"
				[icon]="{ iconOnly: true, src: 'bicycle' }"
				[variant]="variant"
			></button>
		</fieldset>
	`,
})
class ButtonsStoryComponent {
	variants: Array<ButtonVariants> = ['primary', 'secondary'];
}

const meta: Meta<typeof ButtonsStoryComponent> = {
	component: ButtonsStoryComponent,
	...createStoryModule(),
};

export default meta;

export const Buttons: StoryObj<ButtonsStoryComponent> = {};
