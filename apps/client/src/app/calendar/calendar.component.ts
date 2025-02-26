import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	selector: 'calendar',
	template: '',
	host: {
		class: 'grid grid-cols-6',
	},
	imports: [],
})
export class CalendarComponent {}
