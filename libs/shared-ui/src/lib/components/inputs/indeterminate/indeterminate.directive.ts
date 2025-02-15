import { Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
	// eslint-disable-next-line @angular-eslint/directive-selector
	selector: 'input[type=checkbox][indeterminate]',
})
export class IndeterminateDirective {
	elem = inject(ElementRef);

	indeterminate = input.required({
		transform: (value: boolean) => {
			this.elem.nativeElement.indeterminate = value;

			return value;
		},
	});
}
