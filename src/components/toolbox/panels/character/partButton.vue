<template>
	<div
		:class="{ part: true, active: false /*background === value*/ }"
		:style="style"
		@click="$emit('click')"
	></div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { getAAsset, getAsset } from '@/asset-manager';
import environment from '@/environments/environment';
import { ErrorAsset } from '@/models/error-asset';
import { IAsset } from '@/store/content';
import { DeepReadonly } from '../../../../util/readonly';

export interface IPartButtonImage {
	images: IPartImage[];
	size: DeepReadonly<[number, number]>;
	offset: DeepReadonly<[number, number]>;
}

export interface IPartImage {
	asset: IAsset | string;
	offset: DeepReadonly<[number, number]>;
}

const spriteSize = 960;

@Component({
	components: {},
})
export default class PartButton extends Vue {
	@Prop({ required: true }) private readonly part!: IPartButtonImage;
	@Prop({ required: true }) private readonly value!: number;
	@Prop({ default: 150, type: Number })
	private readonly size!: number;

	private lookups: Array<HTMLImageElement | ErrorAsset | null> = [];
	private loaded = false;

	private async created() {
		this.lookups = await Promise.all(
			this.part.images.map((image) => {
				if (typeof image.asset === 'string') {
					return getAsset(image.asset, false);
				} else {
					return getAAsset(image.asset, false);
				}
			})
		);
	}

	private get scaleX(): number {
		return this.size / this.part.size[0];
	}

	private get scaleY(): number {
		return this.size / this.part.size[1];
	}

	private get backgroundSize(): string {
		return `${Math.floor(spriteSize * this.scaleX)}px ${Math.floor(
			spriteSize * this.scaleY
		)}px`;
	}

	private get backgroundPosition(): string {
		return (
			`${Math.floor(this.part.offset[0] * -this.scaleX)}px ` +
			`${Math.floor(this.part.offset[1] * -this.scaleY)}px`
		);
	}

	private get style(): { [id: string]: string } {
		const images = (this.lookups.filter(
			(lookup) => lookup instanceof HTMLImageElement
		) as HTMLImageElement[]).map(
			(lookup) => `url('${lookup.src.replace("'", "\\'")}')`
		);
		return {
			backgroundImage: images.join(','),
			height: this.size + 'px',
			width: this.size + 'px',
			backgroundPosition: this.backgroundPosition,
			backgroundSize: this.backgroundSize,
		};
	}
}
</script>

<style lang="scss" scoped>
.part {
	margin-top: 4px;
	text-shadow: 0 0 2px black;
	color: white;
	box-shadow: inset 0 0 1px 3px rgba(0, 0, 0, 0.5);
	text-align: center;
	user-select: none;
	vertical-align: middle;

	&.active {
		box-shadow: inset 0 0 1px 3px rgba(255, 255, 255, 0.5);
	}
}

.partList:not(.vertical) .part {
	display: inline-block;
}

.partList.vertical .part {
	display: block;
}
</style>
