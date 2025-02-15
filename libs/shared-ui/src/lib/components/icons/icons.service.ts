import { inject, Injectable } from '@angular/core';
import { HttpService, MimeType } from '../../common';

@Injectable({ providedIn: 'root' })
export class IconsService {
	http = inject(HttpService);

	private cache: Map<string, Promise<SVGElement | null>> = new Map();

	async load(url: string): Promise<SVGElement | null> {
		const cachedIcon = this.cache.get(url);

		if (cachedIcon) return cachedIcon;

		const promise = this.loadUrl(url);

		this.cache.set(url, promise);

		return await promise;
	}

	private async loadUrl(url: string) {
		try {
			return await this.loadLocalSvg(url);
		} catch (e) {
			this.cache.delete(url);

			throw e;
		}
	}

	private async loadLocalSvg(url: string) {
		const blob = await this.http.getBlob(url);
		const mimeType = blob.type;

		if (mimeType === MimeType.HTML) throw new Error('Not an image!');

		return this.createSvg(blob);
	}

	private async createSvg(blob: Blob) {
		return new DOMParser().parseFromString(await blob.text(), 'image/svg+xml').querySelector('svg');
	}
}
