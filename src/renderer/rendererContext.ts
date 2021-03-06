import { RenderAbortedException } from './renderAbortedException';
import { Renderer } from './renderer';
import { ErrorAsset } from '@/models/error-asset';

const opacityFactor = 100;

export class RenderContext {
	private aborted: boolean = false;

	public constructor(
		public fsCtx: CanvasRenderingContext2D,
		public readonly hq: boolean,
		public readonly preview: boolean
	) {}

	public drawText(
		params: { text: string; align?: CanvasTextAlign; font?: string } & IRPos &
			IOOutline &
			IOFill
	) {
		if (this.aborted) throw new RenderAbortedException();
		this.fsCtx.save();

		const { font, align, x = 0, y = 0, text = '' } = {
			...{
				font: '20px aller',
				align: 'left' as CanvasTextAlign,
			},
			...params,
		};

		this.fsCtx.lineJoin = 'round';
		this.fsCtx.textAlign = align;
		this.fsCtx.font = font;

		if (params.outline) {
			this.fsCtx.strokeStyle = params.outline.style;
			this.fsCtx.lineWidth = params.outline.width;
			this.fsCtx.strokeText(text, x, y);
		}

		if (params.fill) {
			this.fsCtx.fillStyle = params.fill.style;
			this.fsCtx.fillText(text, x, y);
		}

		this.fsCtx.restore();
	}

	public measureText(
		params: {
			text: string;
			align?: CanvasTextAlign;
			font?: string;
		} & IOOutline &
			IOFill
	): TextMetrics {
		if (this.aborted) throw new RenderAbortedException();
		this.fsCtx.save();

		const { font, align, text = '' } = {
			...{
				font: '20px aller',
				align: 'left' as CanvasTextAlign,
			},
			...params,
		};

		this.fsCtx.lineJoin = 'round';
		this.fsCtx.textAlign = align;
		this.fsCtx.font = font;

		if (params.outline) {
			this.fsCtx.strokeStyle = params.outline.style;
			this.fsCtx.lineWidth = params.outline.width;
		}

		if (params.fill) {
			this.fsCtx.fillStyle = params.fill.style;
		}
		const ret = this.fsCtx.measureText(text);
		this.fsCtx.restore();
		return ret;
	}

	public drawImage(
		params: {
			image: HTMLImageElement | ErrorAsset | Renderer;
			flip?: boolean;
		} & IRPos &
			IOSize &
			IOShadow &
			IOOpacity
	): void {
		if (this.aborted) throw new RenderAbortedException();
		if (params.image instanceof ErrorAsset) return;
		const { image, flip, x, y, w, h, opacity } = {
			flip: false,
			w: params.image.width,
			h: params.image.height,
			opacity: 100,
			...params,
		};

		this.fsCtx.save();

		if (opacity < opacityFactor) {
			this.fsCtx.globalAlpha = opacity / opacityFactor;
		}

		if (params.shadow) {
			const shadow = params.shadow;
			if (shadow.color) {
				this.fsCtx.shadowColor = shadow.color;
			}
			if (shadow.blur) {
				this.fsCtx.shadowBlur = shadow.blur;
			}
			if (shadow.offsetX) {
				this.fsCtx.shadowOffsetX = shadow.offsetX;
			}
			if (shadow.offsetY) {
				this.fsCtx.shadowOffsetY = shadow.offsetY;
			}
		}

		this.fsCtx.translate(x + w / 2, y + h / 2);
		this.fsCtx.scale(flip ? -1 : 1, 1);

		if (image instanceof Renderer) {
			image.paintOnto(this.fsCtx, -w / 2, -h / 2, w, h);
		} else {
			this.fsCtx.drawImage(image as HTMLImageElement, -w / 2, -h / 2, w, h);
		}

		this.fsCtx.restore();
	}

	public drawRect({
		x,
		y,
		w,
		h,
		outline,
		fill,
		composition,
	}: IRPos & IRSize & IOOutline & IOFill & IOComposition) {
		if (this.aborted) throw new RenderAbortedException();
		this.fsCtx.save();
		this.fsCtx.beginPath();
		this.fsCtx.rect(x, y, w, h);

		if (composition) {
			this.fsCtx.globalCompositeOperation = composition;
		}

		if (fill) {
			this.fsCtx.fillStyle = fill.style;
			this.fsCtx.fill();
		}
		if (outline) {
			this.fsCtx.strokeStyle = outline.style;
			this.fsCtx.lineWidth = outline.width;
			this.fsCtx.stroke();
		}
		this.fsCtx.restore();
	}

	public drawPath({
		outline,
		fill,
		path,
	}: { path: (ctx: CanvasPath) => void } & IOOutline & IOFill) {
		if (this.aborted) throw new RenderAbortedException();
		this.fsCtx.save();
		this.fsCtx.beginPath();
		path(this.fsCtx);

		if (fill) {
			this.fsCtx.fillStyle = fill.style;
			this.fsCtx.fill();
		}
		if (outline) {
			this.fsCtx.strokeStyle = outline.style;
			this.fsCtx.lineWidth = outline.width;
			this.fsCtx.stroke();
		}
		this.fsCtx.restore();
	}

	public patternFrom(
		image: HTMLImageElement | Renderer,
		repetition: 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat' = 'repeat'
	): CanvasPattern {
		if (image instanceof Renderer) {
			image = (image as any).previewCanvas;
		}
		return this.fsCtx.createPattern(
			(image as any) as CanvasImageSource,
			repetition
		)!;
	}

	public customTransform(
		transform: (transformContext: CanvasRenderingContext2D) => void,
		render: (rx: RenderContext) => void
	) {
		this.fsCtx.save();
		transform(this.fsCtx);
		render(this);
		this.fsCtx.restore();
	}

	public linearGradient(
		x0: number,
		y0: number,
		x1: number,
		y1: number
	): CanvasGradient {
		return this.fsCtx.createLinearGradient(x0, y0, x1, y1);
	}

	public abort(): void {
		this.aborted = true;
	}
}

const optSize = { w: 0, h: 0 };
const optShadow = {
	blur: 0,
	color: 'none',
	offsetX: 0,
	offsetY: 0,
};

export interface IShadow {
	blur?: number;
	color?: string;
	offsetX?: number;
	offsetY?: number;
}

export interface IOutline {
	style: string;
	width: number;
}

export interface IFill {
	style: string | CanvasGradient | CanvasPattern;
}

interface IOShadow {
	shadow?: IShadow;
}

interface IOComposition {
	composition?: CanvasRenderingContext2D['globalCompositeOperation'];
}

interface IRPos {
	x: number;
	y: number;
}

interface IRSize {
	w: number;
	h: number;
}

interface IOSize {
	w?: number;
	h?: number;
}

interface IOOutline {
	outline?: IOutline;
}
interface IOOpacity {
	opacity?: number;
}

interface IOFill {
	fill?: IFill;
}
