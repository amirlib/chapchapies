import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [RouterOutlet],
	selector: 'chapchapies-container',
	template: ' <router-outlet></router-outlet> ',
})
export class AppContainerComponent {}
