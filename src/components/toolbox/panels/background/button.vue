<template>
	<div
		:class="{ background: true, active: isActive }"
		:title="title"
		:style="style"
		@click="$emit('input', backgroundId)"
	>{{ title }}</div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { color } from '@/renderables/background';
import { isWebPSupported, getAAsset } from '@/asset-manager';
import { Background } from '@edave64/doki-doki-dialog-generator-pack-format/dist/v2/model';
import { IAsset, BackgroundLookup } from '@/store/content';
import { ErrorAsset } from '@/models/error-asset';
import { Store } from 'vuex';
import { IRootState } from '@/store';
import { IPanel } from '@/store/panels';

@Component({
	components: {},
})
export default class BackgroundButton extends Vue {
	public $store!: Store<IRootState>;
	@Prop({ required: true }) private readonly backgroundId!: string;

	private isWebPSupported: boolean | null = null;
	private assets: Array<HTMLImageElement | ErrorAsset> = [];

	private get background(): Readonly<IPanel['background']> {
		const currentPanel = this.$store.state.panels.currentPanel;
		return this.$store.state.panels.panels[currentPanel].background;
	}

	private get bgData(): Background<IAsset> | null {
		const backgrounds: BackgroundLookup = this.$store.getters[
			'content/getBackgrounds'
		];
		return backgrounds.get(this.backgroundId) || null;
	}

	private get isActive(): boolean {
		return this.backgroundId === this.background.current;
	}

	private async created() {
		if (this.bgData) {
			this.assets = await Promise.all(
				this.bgData.variants[0].map(asset => getAAsset(asset, false))
			);
		}
	}

	private get title(): string {
		switch (this.backgroundId) {
			case 'buildin.static-color':
				return 'Static color';
			case 'buildin.transparent':
				return 'Transparent';
		}
		return this.bgData!.label || '';
	}

	private get style(): { [id: string]: string } {
		switch (this.backgroundId) {
			case 'buildin.static-color':
				return {
					'background-color': this.background.color,
				};
			case 'buildin.transparent':
				return {};
		}
		const variant = this.bgData!.variants[0];
		const urls = (this.assets.filter(
			img => img instanceof HTMLImageElement
		) as HTMLImageElement[])
			.map(img => `url('${img.src}')`)
			.join(',');
		return {
			backgroundImage: urls,
		};
	}
}
</script>

<style lang="scss" scoped>
.background {
	margin-top: 4px;
	background-size: cover;
	text-shadow: 0 0 4px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
		1px 1px 0 #000;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: inset 0 0 1px 3px rgba(0, 0, 0, 0.5);
	height: 48px;
	min-height: 48px;
	text-align: center;
	user-select: none;

	&.active {
		box-shadow: inset 0 0 1px 3px rgba(255, 255, 255, 0.5);
	}
}
</style>
