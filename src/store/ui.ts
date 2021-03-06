import { Module } from 'vuex';
import { IRootState } from '.';

export interface IUiState {
	vertical: boolean;
	nsfw: boolean;
	selection: string | null;
	lqRendering: boolean;
	lastDownload: string | null;
}

export default {
	namespaced: true,
	state: {
		vertical: false,
		lqRendering: true,
		nsfw: false,
		selection: null,
		lastDownload: null,
	},
	mutations: {
		setVertical(state, vertical: boolean) {
			state.vertical = vertical;
		},
		setNsfw(state, nsfw: boolean) {
			state.nsfw = nsfw;
		},
		setLqRendering(state, lqRendering: boolean) {
			state.lqRendering = lqRendering;
		},
		setSelection(state, selection: string | null) {
			state.selection = selection;
		},
		setLastDownload(state, download: string) {
			state.lastDownload = download;
		},
	},
} as Module<IUiState, IRootState>;
