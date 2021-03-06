import { ICommand } from '@/eventbus/command';
import {
	IObjectsState,
	ICreateObjectMutation,
	IObject,
	ISetObjectPositionMutation,
	ISetObjectFlipMutation,
} from '@/store/objects';
import { MutationTree, ActionTree } from 'vuex';
import { NameboxY, TextBoxWidth, TextBoxHeight } from '@/constants/textBox';
import { IRootState } from '..';
import {
	ChoiceSpacing,
	ChoiceButtonColor,
	ChoiceY,
	ChoiceButtonWidth,
} from '@/constants/choices';

export interface IChoice {
	text: string;
	selected: boolean;
}

export interface IChoices extends IObject {
	type: 'choice';
	customColor: string;
	choices: IChoice[];
	choiceDistance: number;
}

export const choiceMutations: MutationTree<IObjectsState> = {
	setChoices(state, command: ISetChoicesMutation) {
		const obj = state.objects[command.id] as IChoices;
		obj.choices = command.choices;
		++obj.version;
	},
	setChoiceColor(state, command: ISetChoiceColorMutation) {
		const obj = state.objects[command.id] as IChoices;
		obj.customColor = command.customColor;
		++obj.version;
	},
	setChoiceDistance(state, command: ISetChoiceDistanceMutation) {
		const obj = state.objects[command.id] as IChoices;
		obj.choiceDistance = command.choiceDistance;
		++obj.version;
	},
};

let lastChoiceId = 0;

export const choiceActions: ActionTree<IObjectsState, IRootState> = {
	createChoice({ commit, rootState }, command: ICreateChoicesAction): string {
		const id = 'choice_' + ++lastChoiceId;
		commit('create', {
			object: {
				x: 640,
				y: ChoiceY,
				width: ChoiceButtonWidth,
				height: 0,
				panelId: rootState.panels.currentPanel,
				flip: false,
				id,
				onTop: true,
				opacity: 100,
				type: 'choice',
				version: 0,
				preserveRatio: false,
				ratio: TextBoxWidth / TextBoxHeight,
				choiceDistance: ChoiceSpacing,
				choices: [
					{
						selected: false,
						text: 'Click here to edit choice',
					},
				],
				customColor: ChoiceButtonColor,
			} as IChoices,
		} as ICreateObjectMutation);
		return id;
	},

	addChoice({ state, commit }, command: IAddChoiceAction) {
		const obj = state.objects[command.id] as IChoices;
		commit('setChoices', {
			id: command.id,
			choices: [
				...obj.choices,
				{
					selected: false,
					text: command.text,
				},
			],
		} as ISetChoicesMutation);
	},

	removeChoise({ state, commit }, command: IRemoveChoiceAction) {
		const obj = state.objects[command.id] as IChoices;
		const choices = [...obj.choices];
		if (!choices[command.choiceIdx]) return;
		choices.splice(command.choiceIdx, 1);
		commit('setChoices', {
			id: command.id,
			choices,
		} as ISetChoicesMutation);
	},

	setChoiceText({ state, commit }, command: ISetChoiceTextAction) {
		const obj = state.objects[command.id] as IChoices;
		const choices = [...obj.choices];
		if (!choices[command.choiceIdx]) return;
		choices[command.choiceIdx].text = command.text;
		commit('setChoices', {
			id: command.id,
			choices,
		} as ISetChoicesMutation);
	},
};

export interface ISetChoicesMutation extends ICommand {
	readonly choices: IChoices['choices'];
}

export interface ISetChoiceColorMutation extends ICommand {
	readonly customColor: IChoices['customColor'];
}

export interface ISetChoiceDistanceMutation extends ICommand {
	readonly choiceDistance: IChoices['choiceDistance'];
}

export interface ICreateChoicesAction extends ICommand {}

export interface IAddChoiceAction extends ICommand {
	readonly text: string;
}

export interface ISetChoiceTextAction extends ICommand {
	readonly choiceIdx: number;
	readonly text: string;
}

export interface IRemoveChoiceAction extends ICommand {
	readonly choiceIdx: number;
}
