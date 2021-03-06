<template>
	<div class="panel">
		<h1>{{ sprite.subType === 'poem' ? 'Poem' : 'Console' }}</h1>
		<text-editor
			v-if="textEditor"
			title="Poem Text"
			v-model="text"
			@leave="textEditor = false"
		/>
		<template v-else>
			<div id="notification_text">
				<label for="notification_text">Text:</label>
				<textarea v-model="text" id="notification_text" @keydown.stop />
				<button @click="textEditor = true">Formatting</button>
			</div>
			<template v-if="sprite.subType === 'poem'">
				<select v-model="poemBackground" @keydown.stop>
					<option
						v-for="(background, idx) of backgrounds"
						:value="idx"
						:key="idx"
						>{{ background.name }}</option
					>
				</select>
				<select v-model="poemStyle" @keydown.stop>
					<option
						v-for="(style, idx) of poemTextStyles"
						:value="idx"
						:key="idx"
						>{{ style.name }}</option
					>
				</select>
			</template>
			<position-and-size :obj="sprite" />
			<layers :obj="sprite" />
			<opacity :obj="sprite" />
			<toggle v-model="flip" label="Flip?" />
			<delete :obj="sprite" />
		</template>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from 'vue-property-decorator';
import { isWebPSupported } from '@/asset-manager';
import { Character } from '@/renderables/character';
import Toggle from '@/components/toggle.vue';
import PositionAndSize from '@/components/toolbox/commonsFieldsets/positionAndSize.vue';
import Layers from '@/components/toolbox/commonsFieldsets/layers.vue';
import Opacity from '@/components/toolbox/commonsFieldsets/opacity.vue';
import Delete from '@/components/toolbox/commonsFieldsets/delete.vue';
import { IRenderable } from '@/renderables/renderable';
import { Sprite } from '@/renderables/sprite';
import { ISprite } from '@/store/objectTypes/sprite';
import { ICommand } from '@/eventbus/command';
import eventBus from '@/eventbus/event-bus';
import { IHistorySupport } from '@/plugins/vuex-history';
import {
	IObjectSetOnTopAction,
	ISetObjectFlipMutation,
	ISetObjectPositionMutation,
	ISetObjectOpacityMutation,
	IObjectShiftLayerAction,
} from '@/store/objects';
import { PanelMixin } from './panelMixin';
import { Store } from 'vuex';
import { IRootState } from '@/store';
import { DeepReadonly } from '@/util/readonly';
import TextEditor from '../subpanels/text/text.vue';
import {
	IPoem,
	ISetBackgroundMutation,
	ISetFontMutation,
	ISetTextMutation,
} from '@/store/objectTypes/poem';
import {
	poemBackgrounds,
	poemTextStyles,
	IPoemTextStyle,
} from '../../../constants/poem';

@Component({
	components: {
		Toggle,
		PositionAndSize,
		Layers,
		Opacity,
		Delete,
		TextEditor,
	},
})
export default class PoemPanel extends Mixins(PanelMixin) {
	public $store!: Store<IRootState>;

	private vuexHistory!: IHistorySupport;
	private textEditor: boolean = false;

	private get backgrounds(): Array<{ name: string; file: string }> {
		return poemBackgrounds;
	}

	private get poemTextStyles(): IPoemTextStyle[] {
		return poemTextStyles;
	}

	private get sprite(): IPoem {
		const obj = this.$store.state.objects.objects[
			this.$store.state.ui.selection!
		];
		if (obj.type !== 'poem') return undefined!;
		return obj as IPoem;
	}

	private get flip() {
		return this.sprite.flip;
	}

	private set flip(newValue: boolean) {
		this.vuexHistory.transaction(() => {
			this.$store.commit('objects/setFlip', {
				id: this.sprite.id,
				flip: newValue,
			} as ISetObjectFlipMutation);
		});
	}

	private get text() {
		return this.sprite.text;
	}

	private set text(newValue: string) {
		this.vuexHistory.transaction(() => {
			this.$store.commit('objects/setPoemText', {
				id: this.sprite.id,
				text: newValue,
			} as ISetTextMutation);
		});
	}

	private get poemStyle() {
		return this.sprite.font;
	}

	private set poemStyle(newValue: number) {
		this.vuexHistory.transaction(() => {
			this.$store.commit('objects/setPoemFont', {
				id: this.sprite.id,
				font: newValue,
			} as ISetFontMutation);
		});
	}

	private get poemBackground() {
		return this.sprite.background;
	}

	private set poemBackground(newValue: number) {
		this.vuexHistory.transaction(() => {
			this.$store.commit('objects/setPoemBackground', {
				id: this.sprite.id,
				background: newValue,
			} as ISetBackgroundMutation);
		});
	}
}
</script>

<style lang="scss" scoped>
fieldset {
	border: 3px solid #ffbde1;
	> .list {
		* {
			overflow: hidden;
			width: 100%;
			height: 24px;
			text-overflow: ellipsis;
			padding: 2px;

			&.active {
				background-color: #ffbde1;
			}
		}
	}
}

.current_button {
	input {
		width: 145px;
	}
}

.panel {
	&.vertical {
		#notification_text {
			width: 173px;

			textarea {
				width: 100%;
			}
		}

		fieldset.buttons {
			width: 100%;

			> .list {
				max-height: 200px;
				width: 172px;

				* {
					width: 100%;
					text-overflow: ellipsis;
					padding: 2px;
				}
			}
		}
	}

	textarea {
		display: block;
		height: 114px;
	}
}

.panel:not(.vertical) {
	.list {
		max-height: 140px;
		max-width: 172px;
	}
}
</style>
