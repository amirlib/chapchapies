import { Meta, StoryObj } from '@storybook/angular';
import { IndeterminateDirective } from './indeterminate.directive';
import { createStoryModule } from '@chapchapies/storybook';

const meta: Meta<typeof IndeterminateDirective> = {
	component: IndeterminateDirective,
	render: (args) => ({
		props: args,
		template: `
			<fieldset class='bg-grey-25 flex flex-col gap-4'>
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

export const Indeterminate: StoryObj<IndeterminateDirective> = {};
