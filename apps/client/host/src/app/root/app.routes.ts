import { Routes } from '@angular/router';
import { AppContainerComponent } from '../container';
import { CalendarComponent } from '../calendar';

export const appRoutes: Routes = [
	{
		children: [
			{
				component: CalendarComponent,
				path: '',
				title: 'Chapchapies - Calendar',
			},
		],
		component: AppContainerComponent,
		path: '',
	},
];
