import { Browser } from './browser';

export class Edge extends Browser {
	public async saveToFile(
		downloadCanvas: HTMLCanvasElement,
		filename: string,
		format: string = 'image/png',
		quality: number = 1
	): Promise<string> {
		let url = downloadCanvas.toDataURL(format, quality);
		const blob = this.dataURItoBlob(url, format);

		if (window.URL && window.URL.createObjectURL) {
			url = URL.createObjectURL(blob);
		}

		// IE-specific code
		window.navigator.msSaveBlob(blob, filename);
		return url;
	}
}
