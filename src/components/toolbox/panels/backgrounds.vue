<template>
	<div class="panel">
		<h1>Background</h1>
		<background-settings :value="value" />

		<background-button
			v-for="background of backgrounds"
			:key="background"
			:background="background"
			@input="setBackground(background)"
		/>
		<div class="btn upload-background" @click="$refs.upload.click()">
			Upload
			<input type="file" ref="upload" @change="onFileUpload" />
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from 'vue-property-decorator';
import { registerAsset, getAsset } from '@/asset-manager';
import { IBackground, color } from '@/models/background';
import BackgroundButton from './background/button.vue';
import BackgroundSettings from './background/settings.vue';
import { State } from 'vuex-class-decorator';
import { Store } from 'vuex';
import { IRootState } from '../../../store';
import { IAsset, IReplaceContentPackAction } from '../../../store/content';
import {
	Background,
	ContentPack,
} from '@edave64/doki-doki-dialog-generator-pack-format/dist/v2/model';
import { ISetCurrentMutation } from '../../../store/background';
import { PanelMixin } from './panelMixin';

@Component({
	components: {
		BackgroundButton,
		BackgroundSettings,
	},
})
export default class BackgroundsPanel extends Mixins(PanelMixin) {
	public $store!: Store<IRootState>;

	@Prop({ required: true }) private readonly value!: IBackground;

	private uploadedBackgroundsPack: ContentPack<string> = {
		packId: 'buildin.uploadedBackgrounds',
		packCredits: '',
		characters: [],
		fonts: [],
		sprites: [],
		poemStyles: [],
		backgrounds: [],
	};
	private customPathLookup: { [name: string]: string } = {};
	private customBGCount = 0;

	private get backgrounds(): string[] {
		return [
			...this.$store.state.content.current.backgrounds.map(
				background => background.label
			),
			'buildin.static-color',
			'buildin.transparent',
		];
	}

	private setBackground(id: string) {
		this.$store.commit('background/setCurrent', {
			current: id,
		} as ISetCurrentMutation);
	}

	private onFileUpload(e: Event) {
		const uploadInput = this.$refs.upload as HTMLInputElement;
		if (!uploadInput.files) return;
		for (const file of uploadInput.files) {
			(nr => {
				const name = 'customBg' + nr;
				const url = registerAsset(name, file);
				this.uploadedBackgroundsPack.backgrounds.push({
					label: '',
					variants: [[url]],
				});
				this.$store.dispatch('content/replaceContentPack', {
					contentPack: this.uploadedBackgroundsPack,
				} as IReplaceContentPackAction);
				// backgrounds.push(new Background(name, file.name, true));
				this.$set(this.customPathLookup, name, url);
			})(++this.customBGCount);
		}
	}
}
</script>

<style lang="scss" scoped>
textarea {
	flex-grow: 1;
}

.upload-background {
	margin-top: 4px;
	background-size: cover;
	text-shadow: 0 0 2px white;
	color: black;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: inset 0 0 1px 3px rgba(0, 0, 0, 0.5);
	height: 48px;
	min-height: 48px;
	text-align: center;
	user-select: none;
	text-align: center;
	user-select: none;

	input {
		display: none;
	}
}

#panels:not(.vertical) > .panel {
	> div {
		width: 12rem;
	}
}

#panels.vertical > .panel {
	> div {
		text-align: center;
	}
}

.vertical {
	fieldset {
		width: calc(100% - 4px);
		input {
			width: 60px;
		}
	}
}
</style>