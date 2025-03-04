import { ChangeDetectionStrategy, Component, computed, effect, ElementRef, inject, input } from '@angular/core';
import { AllIcons, getIconUrlFromName } from '@chapchapies/icons';
import { SizeEnum } from '../../common';
import { IconsService } from './icons.service';
import { derivedAsync } from 'ngxtension/derived-async';

const Size: Record<SizeEnum, string> = {
	xs: '16px',
	small: '18px',
	normal: '20px',
	large: '22px',
	xl: '24px',
	full: '100%',
};

@Component({
	selector: 'c-icon',
	template: '',
	styles: `
		:host {
			&.loading {
				@apply rounded-md bg-gray-100;
			}
		}
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconsComponent {
	el = inject(ElementRef<HTMLElement>);

	service = inject(IconsService);

	constructor() {
		this.el.nativeElement.appendChild(this.svg());
		this.el.nativeElement.classList.add('loading');

		effect(() => {
			this.setStyle();
		});
	}

	size = input(SizeEnum.normal, {
		transform: (size: SizeEnum | null | undefined) => (size ? Size[size] : SizeEnum.normal),
	});

	src = input.required({ transform: (src: AllIcons) => getIconUrlFromName(src) });

	loadedImage = derivedAsync(async () => {
		const url = this.src();

		if (!url) return null;

		const image = await this.service.load(url);

		if (!image) return null;

		return this.handleImageElement(image);
	});

	normalizedHeight = computed(() => this.size() ?? 'auto');

	normalizedWidth = computed(() => this.size() ?? 'auto');

	svg = computed(() => this.loadedImage() ?? document.createElement('svg'));

	private handleImageElement(element: SVGElement) {
		const newImage = element.cloneNode(true) as HTMLElement;

		this.setStyle();

		this.el.nativeElement.innerHTML = '';
		this.el.nativeElement.appendChild(newImage);
		this.el.nativeElement.classList.remove('loading');

		return newImage;
	}

	private setStyle() {
		this.svg().setAttribute(
			'style',
			`width: ${this.normalizedWidth()}; height: ${this.normalizedHeight()}; object-fit: cover`,
		);
	}
}
