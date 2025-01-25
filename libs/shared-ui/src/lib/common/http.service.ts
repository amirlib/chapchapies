import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export enum MimeType {
	HTML = 'text/html',
}

@Injectable({ providedIn: 'root' })
export class HttpService {
	http = inject(HttpClient);

	async getBlob(url: string) {
		return await lastValueFrom(this.http.get(url, { responseType: 'blob' }));
	}
}
