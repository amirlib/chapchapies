import { inject, Injectable } from '@angular/core';
import { HttpService, MimeType } from '../../common';

@Injectable({ providedIn: 'root' })
export class IconsService {
	http = inject(HttpService);

	private cache: Map<string, Promise<HTMLImageElement | null>> = new Map();

	async load(url: string): Promise<HTMLImageElement | null> {
		const cachedIcon = this.cache.get(url);

		if (cachedIcon) return cachedIcon;

		const promise = this.loadUrl(url);

		this.cache.set(url, promise);

		return await promise;
	}

	private async loadUrl(url: string) {
		try {
			return await this.loadLocalImage(url);
		} catch (e) {
			this.cache.delete(url);

			throw e;
		}
	}

	private async loadLocalImage(url: string) {
		const blob = await this.http.getBlob(url);
		const mimeType = blob.type;

		if (mimeType === MimeType.HTML) throw new Error('Not an image!');

		return this.createImageElement(url);
	}

	private createImageElement(href: string) {
		const img = document.createElement('img');

		img.setAttribute('height', '100%');
		img.setAttribute('referrerpolicy', 'no-referrer');
		img.setAttribute('src', href);
		img.setAttribute('width', '100%');

		return img;
	}
}
