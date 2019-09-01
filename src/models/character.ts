import { characterPositions } from './constants';
import { RenderContext } from '../renderer/rendererContext';
import {
	characters,
	getAsset,
	Pose,
	ICharacter,
	IHeads,
} from '../asset-manager';
import { Renderer } from '../renderer/renderer';
import { IRenderable } from './renderable';
import { IDragable } from './dragable';

export type CharacterIds =
	| 'ddlc.monika'
	| 'ddlc.natsuki'
	| 'ddlc.sayori'
	| 'ddlc.yuri'
	| 'ddlc.fan.mc_classic'
	| 'ddlc.fan.femc';
export type Part = 'variant' | 'left' | 'right' | 'head';

export class Character implements IRenderable, IDragable {
	public infront: boolean = false;
	public close: boolean = false;
	public flip: boolean = false;
	private lq: boolean = true;
	private selected: boolean = false;
	private poseId: number = 0;
	private posePositions = {
		variant: 0,
		left: 0,
		right: 0,
		head: 0,
		headType: 0,
	};
	private localRenderer = new Renderer(960, 960);
	private dirty = true;
	private hitDetectionFallback = true;

	private freeMove: boolean = false;
	private pPos: number = 4;
	private pX: number = characterPositions[3]!;
	private pY: number = 0;

	public constructor(
		public readonly name: CharacterIds,
		private readonly invalidator: Invalidator
	) {}

	public get label() {
		return this.data.name;
	}

	public select() {
		this.selected = true;
	}

	public unselect() {
		this.selected = false;
	}

	public get data(): ICharacter<any> {
		return characters[this.name];
	}

	public get pose(): Pose<any> {
		return this.data.poses[this.poseId];
	}

	public getParts(): Part[] {
		const pose = this.pose;
		const head: Array<'head'> =
			this.pose.compatibleHeads.length > 0 ? ['head'] : [];

		if ('variant' in pose) {
			return [...head, 'variant'];
		}
		if ('left' in pose) {
			return [...head, 'left', 'right'];
		}
		return head;
	}

	public get currentHeads(): IHeads | null {
		if (!this.pose.compatibleHeads || this.pose.compatibleHeads.length === 0) {
			return null;
		}
		const heads = this.data.heads[
			this.pose.compatibleHeads[this.posePositions.headType]
		];
		if (heads instanceof Array) {
			return {
				all: heads,
			};
		}
		return heads;
	}

	public async updateLocalCanvas() {
		await this.localRenderer.render(async rx => {
			const pose = this.pose as Pose<any>;
			const assets: string[] = [];
			const partKeys = this.getParts();

			const poseFolder =
				(this.data.folder ? this.data.folder + '/' : '') +
				(this.pose.folder ? this.pose.folder + '/' : '');

			const headFolder =
				(this.data.folder ? this.data.folder + '/' : '') +
				(this.currentHeads && this.currentHeads.folder
					? this.currentHeads.folder + '/'
					: '');

			if ((pose as any).static) {
				assets.push(poseFolder + (pose as any).static);
			} else {
				for (const key of partKeys) {
					if (key === 'head') continue;
					assets.push(poseFolder + (pose as any)[key][this.posePositions[key]]);
				}
			}

			const head = this.currentHeads
				? headFolder + this.currentHeads.all[this.posePositions.head]
				: null;

			const [headAsset, ...bodyParts] = await Promise.all([
				head ? getAsset(head, rx.hq) : Promise.resolve(null),
				...assets.map(asset => getAsset(asset, rx.hq)),
			]);

			const drawHead = () => {
				if (headAsset) {
					const headAnchor = this.pose.headAnchor
						? this.pose.headAnchor
						: [0, 0];

					rx.drawImage({
						image: headAsset,
						x: headAnchor[0],
						y: (this.name === 'ddlc.monika' ? 1 : 0) + headAnchor[1],
					});
				}
			};

			if (!this.pose.headInForeground) {
				drawHead();
			}

			for (const bodyPart of bodyParts) {
				rx.drawImage({ image: bodyPart!, x: 0, y: 0 });
			}

			if (this.pose.headInForeground) {
				drawHead();
			}
		});
	}

	public async render(rx: RenderContext) {
		if (this.dirty || this.lq !== !rx.hq) {
			await this.updateLocalCanvas();
		}

		const zoom = this.close ? 1.6 : 0.8;
		const size = 960 * zoom;
		const x = this.pX - size / 2;
		const y = (this.close ? -100 : 0) + this.pY;

		rx.drawImage({
			image: this.localRenderer,
			x,
			y,
			w: size,
			h: size,
			flip: this.flip,
			shadow: this.selected ? { blur: 20, color: 'red' } : undefined,
		});
	}

	public hitTest(hx: number, hy: number): boolean {
		const zoom = this.close ? 1.6 : 0.8;
		const size = 960 * zoom;
		let x = (hx - this.pX + size / 2) / zoom;
		const y = (hy - (this.close ? -100 : 0) + this.pY) / zoom;

		if (this.flip) {
			x = 960 - x;
		}
		if (!this.hitDetectionFallback) {
			try {
				const data = this.localRenderer.getDataAt(x, y);
				return data[3] !== 0;
			} catch (e) {
				// On chrome for android, the hit test tends to fail because of cross-origin shinanigans, even though
				// we only ever load from one origin. ¯\_(ツ)_/¯
				// So we have a fallback that doesn't read the contents of the canvas. This looses accuracy, but at
				// least works always.
				if (e instanceof DOMException && e.message.includes('cross-origin')) {
					this.hitDetectionFallback = true;
				} else {
					throw e;
				}
			}
		}

		if (y < 50 || y > 680) return false;
		return Math.abs(x - 480) < 150;
	}

	public headl(): void {
		if (!this.currentHeads) return;
		--this.posePositions.head;
		if (this.posePositions.head < 0) {
			--this.posePositions.headType;
			if (this.posePositions.headType < 0) {
				this.posePositions.headType = this.pose.compatibleHeads.length - 1;
			}
			this.posePositions.head = this.currentHeads.all.length - 1;
		}
		this.dirty = true;
		this.invalidator();
	}

	public headr(): void {
		if (!this.currentHeads) return;
		++this.posePositions.head;
		if (this.posePositions.head >= this.currentHeads.all.length) {
			++this.posePositions.headType;
			if (this.posePositions.headType >= this.pose.compatibleHeads.length) {
				this.posePositions.headType = 0;
			}
			this.posePositions.head = 0;
		}
		this.dirty = true;
		this.invalidator();
	}

	public partl(part: Part) {
		if (part === 'head') return this.headl();
		if (!(this.pose as any)[part]) return;
		--this.posePositions[part];

		if (this.posePositions[part] < 0) {
			this.posePositions[part] = (this.pose as any)[part].length - 1;
		}
		this.dirty = true;
		this.invalidator();
	}

	public partr(part: Part) {
		if (part === 'head') return this.headr();
		if (!(this.pose as any)[part]) return;
		++this.posePositions[part];

		if (this.posePositions[part] >= (this.pose as any)[part].length) {
			this.posePositions[part] = 0;
		}
		this.dirty = true;
		this.invalidator();
	}

	public posel() {
		const oldHeadCollection = this.pose.compatibleHeads[
			this.posePositions.headType
		];
		--this.poseId;
		if (this.poseId < 0) {
			this.poseId = this.data.poses.length - 1;
		}
		const newHeadCollectionNr = this.pose.compatibleHeads.indexOf(
			oldHeadCollection
		);
		if (newHeadCollectionNr >= 0) {
			this.posePositions.headType = newHeadCollectionNr;
		} else {
			this.posePositions.headType = 0;
			this.posePositions.head = 0;
		}
		this.posePositions.left = 0;
		this.posePositions.right = 0;
		this.posePositions.variant = 0;
		this.dirty = true;
		this.invalidator();
	}

	public poser() {
		const oldHeadCollection = this.pose.compatibleHeads[
			this.posePositions.headType
		];
		++this.poseId;
		if (this.poseId >= this.data.poses.length) {
			this.poseId = 0;
		}
		const newHeadCollectionNr = this.pose.compatibleHeads.indexOf(
			oldHeadCollection
		);
		if (newHeadCollectionNr >= 0) {
			this.posePositions.headType = newHeadCollectionNr;
		} else {
			this.posePositions.headType = 0;
			this.posePositions.head = 0;
		}
		this.posePositions.left = 0;
		this.posePositions.right = 0;
		this.posePositions.variant = 0;
		this.dirty = true;
		this.invalidator();
	}

	public get allowFreeMove(): boolean {
		return this.freeMove;
	}

	public set allowFreeMove(allow: boolean) {
		if (allow) {
			this.freeMove = true;
		} else {
			this.freeMove = false;
			this.pos = this.closestCharacterSlot(this.pX);
			this.pY = 0;
		}
	}

	public get x(): number {
		return this.pX;
	}

	public set x(pos: number) {
		if (this.allowFreeMove) {
			this.pX = pos;
		} else {
			this.pos = this.closestCharacterSlot(pos);
		}
	}

	public get y(): number {
		return this.pY;
	}

	public set y(pos: number) {
		if (this.allowFreeMove) {
			this.pY = pos;
		} else {
			this.pY = 0;
		}
	}

	public get pos() {
		return this.pPos;
	}

	public set pos(pos: number) {
		if (this.allowFreeMove) return;
		if (pos < 0) pos = 0;
		if (pos >= characterPositions.length) pos = characterPositions.length - 1;

		this.pPos = pos;
		this.pX = characterPositions[pos];
	}

	private closestCharacterSlot(pos: number): number {
		const sorted = characterPositions
			.map((x, idx) => ({ pos: Math.abs(pos - x), idx }))
			.sort((a, b) => a.pos - b.pos);
		return sorted[0].idx;
	}
}