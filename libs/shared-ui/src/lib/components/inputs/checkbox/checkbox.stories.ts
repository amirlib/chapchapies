import { Meta } from '@storybook/angular';
import { createStoryModule } from '@chapchapies/storybook';
import { IndeterminateDirective } from '../indeterminate';

const meta: Meta<typeof HTMLInputElement> = {
	component: HTMLInputElement,
	render: (args) => ({
		props: args,
		template: `
			<fieldset class='bg-grey-25 flex flex-col gap-4'>
				<label class="flex items-center gap-2">
					<input class="c-checkbox" type="checkbox" [checked]="false">
					This is an un-checked checkbox
				</label>

				<label class="flex items-center gap-2">
					<input class="c-checkbox" type="checkbox" [checked]="true" >
					This is a checked checkbox
				</label>

				<label class="flex items-center gap-2">
					<input class="c-checkbox" type="checkbox" [checked]="false" [disabled]="true">
					This is an un-checked and disabled checkbox
				</label>

				<label class="flex items-center gap-2">
					<input class="c-checkbox" type="checkbox" [checked]="true" [disabled]="true">
					This is a checked and disabled checkbox
				</label>

				<label class="flex items-center gap-2">
					<input class="c-checkbox" type="checkbox" [indeterminate]="true" />
					This is an indeterminate checkbox
				</label>

				<label class="flex items-center gap-2">
					<input class="c-checkbox" type="checkbox" [disabled]="true" [indeterminate]="true" />
					This is an indeterminate and disabled checkbox
				</label>
			</fieldset>
		`,
	}),
	...createStoryModule().withImports(IndeterminateDirective),
};

export default meta;

export const CheckboxesOverview = {
	args: {
		checked: true,
	},
};
