<template>
	<div class="panel" @dragenter="dragEnter" @mouseleave="$refs.dt.hide()">
		<drop-target ref="dt" class="drop-target" @drop="addImageFile"
			>Drop here to add as a new background</drop-target
		>
		<h1>Background</h1>
		<color v-if="colorSelect" v-model="bgColor" @leave="colorSelect = false" />
		<template v-else>
			<background-settings @change-color="colorSelect = true" />

			<background-button
				v-for="background of backgrounds"
				:key="background"
				:backgroundId="background"
				@input="setBackground(background)"
			/>
			<div class="btn upload-background" @click="$refs.upload.click()">
				Upload
				<input type="file" ref="upload" @change="onFileUpload" />
			</div>
			<button class="upload-background" @click="addByUrl">Add by URL</button>
			<button
				class="upload-background"
				title="Not yet implemented"
				disabled="disabled"
			>
				<i class="material-icons">extension</i> Search in content packs
			</button>
		</template>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from 'vue-property-decorator';
import { registerAsset, getAsset } from '@/asset-manager';
import BackgroundButton from './background/button.vue';
import BackgroundSettings from './background/settings.vue';
import DropTarget from '../drop-target.vue';
import { State } from 'vuex-class-decorator';
import { Store } from 'vuex';
import { IRootState } from '@/store';
import { IAsset, ReplaceContentPackAction } from '@/store/content';
import {
	Background,
	ContentPack,
} from '@edave64/doki-doki-dialog-generator-pack-format/dist/v2/model';
import { ISetCurrentMutation, ISetColorMutation } from '@/store/panels';
import { PanelMixin } from './panelMixin';
import { IHistorySupport } from '@/plugins/vuex-history';
import Color from '../subpanels/color/color.vue';

const uploadedBackgroundsPack: ContentPack<string> = {
	packId: 'dddg.buildin.uploadedBackgrounds',
	dependencies: [],
	packCredits: [],
	characters: [],
	fonts: [],
	sprites: [],
	poemStyles: [],
	poemBackgrounds: [],
	backgrounds: [],
	colors: [],
};

@Component({
	components: {
		BackgroundButton,
		BackgroundSettings,
		DropTarget,
		Color,
	},
})
export default class BackgroundsPanel extends Mixins(PanelMixin) {
	public $store!: Store<IRootState>;

	private colorSelect: boolean = false;

	private vuexHistory!: IHistorySupport;

	private get backgrounds(): Array<Background<IAsset>['id']> {
		return [
			...this.$store.state.content.current.backgrounds.map(
				background => background.id
			),
			'buildin.static-color',
			'buildin.transparent',
		];
	}

	private setBackground(id: Background<IAsset>['id']) {
		this.$store.commit('panels/setCurrentBackground', {
			current: id,
			panelId: this.$store.state.panels.currentPanel,
		} as ISetCurrentMutation);
	}

	private get bgColor(): string {
		return this.$store.state.panels.panels[
			this.$store.state.panels.currentPanel
		].background.color;
	}

	private set bgColor(color: string) {
		this.vuexHistory.transaction(() => {
			this.$store.commit('panels/setBackgroundColor', {
				color,
			} as ISetColorMutation);
		});
	}

	private onFileUpload(e: Event) {
		const uploadInput = this.$refs.upload as HTMLInputElement;
		if (!uploadInput.files) return;
		for (const file of uploadInput.files) {
			this.addImageFile(file);
		}
	}

	private addImageFile(file: File) {
		const url = URL.createObjectURL(file);
		this.addNewCustomBackground(file.name, file.name, url);
	}

	private addByUrl() {
		const url = prompt('Enter the URL of the image');
		if (!url) return;
		const lastSegment = url.split('/').slice(-1)[0];
		this.addNewCustomBackground(lastSegment, lastSegment, url);
	}

	private addNewCustomBackground(
		id: Background<IAsset>['id'],
		label: string,
		url: string
	) {
		uploadedBackgroundsPack.backgrounds.push({
			id,
			label,
			variants: [[url]],
		});
		this.vuexHistory.transaction(() => {
			this.$store.dispatch('content/replaceContentPack', {
				contentPack: uploadedBackgroundsPack,
			} as ReplaceContentPackAction);
			this.setBackground(id);
		});
	}

	private dragEnter(e: DragEvent) {
		if (!e.dataTransfer) return;
		e.dataTransfer.effectAllowed = 'none';
		if (
			!Array.from(e.dataTransfer.items).find(item =>
				item.type.match(/^image.*$/)
			)
		) {
			return;
		}
		e.dataTransfer.effectAllowed = 'link';
		(this.$refs.dt as DropTarget).show();
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
	> div,
	button {
		&:not(.drop-target) {
			width: 12rem;
		}
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
