<template>
	<fieldset>
		<legend>Settings:</legend>
		<template v-if="isColor">
			<label for="bg_color">Color:</label>
			<input id="bg_color" type="color" v-model="color" />
		</template>
		<table v-if="isVariant">
			<tr>
				<td colspan="3">
					<toggle v-model="flipped" label="Flipped?" />
				</td>
			</tr>
			<tr v-if="hasVariants">
				<td>
					<button @click="seekVariant(-1)">&lt;</button>
				</td>
				<td>Variant</td>
				<td>
					<button @click="seekVariant(1)">&gt;</button>
				</td>
			</tr>
			<tr>
				<td colspan="3">
					<select v-model="scaling" @keydown.stop>
						<option value="0">None</option>
						<option value="1">Stretch</option>
						<option value="2">Cover</option>
					</select>
				</td>
			</tr>
		</table>
	</fieldset>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { isWebPSupported } from '@/asset-manager';
import Toggle from '@/components/toggle.vue';
import { State } from 'vuex-class-decorator';
import { Background } from '@edave64/doki-doki-dialog-generator-pack-format/dist/v2/model';
import { Store } from 'vuex';
import { IRootState } from '@/store';
import { IAsset } from '@/store/content';
import { IHistorySupport } from '@/plugins/vuex-history';
import {
	ISetColorMutation,
	ISetFlipMutation,
	ISeekVariantAction,
	ScalingModes,
	ISetScalingMutation,
} from '@/store/background';

@Component({
	components: { Toggle },
})
export default class BackgroundSettings extends Vue {
	public $store!: Store<IRootState>;
	@State('current', { namespace: 'background' })
	private currentBackgroundId!: string;

	private get history(): IHistorySupport {
		return this.$root as any;
	}

	private get bgData(): Background<IAsset> | null {
		return (
			this.$store.state.content.current.backgrounds.find(
				background => background.label === this.currentBackgroundId
			) || null
		);
	}

	private get isColor(): boolean {
		return this.currentBackgroundId === 'buildin.static-color';
	}

	private get color(): string {
		return this.$store.state.background.color;
	}

	private set color(color: string) {
		this.history.transaction(() => {
			this.$store.commit('background/setColor', {
				color,
			} as ISetColorMutation);
		});
	}

	private get flipped(): boolean {
		return this.$store.state.background.flipped;
	}

	private set flipped(flipped: boolean) {
		this.history.transaction(() => {
			this.$store.commit('background/setFlipped', {
				flipped,
			} as ISetFlipMutation);
		});
	}

	private get scaling(): string {
		return this.$store.state.background.scaling.toString();
	}

	private set scaling(scaling: string) {
		this.history.transaction(() => {
			this.$store.commit('background/setScaling', {
				scaling: parseInt(scaling),
			} as ISetScalingMutation);
		});
	}

	private get isVariant() {
		return !!this.bgData;
	}

	private get hasVariants() {
		return this.bgData ? this.bgData.variants.length > 1 : false;
	}

	private seekVariant(delta: 1 | -1) {
		this.history.transaction(() => {
			this.$store.dispatch('background/seekVariant', {
				delta,
			} as ISeekVariantAction);
		});
	}
}
</script>

<style lang="scss" scoped>
fieldset {
	min-height: 135px;
}

button {
	width: 24px;
}

select {
	width: 100%;
}
</style>