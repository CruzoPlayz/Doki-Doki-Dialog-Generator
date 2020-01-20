import { Module } from 'vuex';
import {
	ContentPack,
	Character,
	Background,
} from '@edave64/doki-doki-dialog-generator-pack-format/dist/v2/model';
import {
	assetWalker,
	normalizePath,
} from '@edave64/doki-doki-dialog-generator-pack-format/dist/v2/util';
import { normalizeContentPack } from '@edave64/doki-doki-dialog-generator-pack-format/dist/v2/parser';
import { convert as convertV1 } from '@edave64/doki-doki-dialog-generator-pack-format/dist/v2/convertV1';
// tslint:disable-next-line: max-line-length
import { normalizeCharacter as normalizeCharacterV1 } from '@edave64/doki-doki-dialog-generator-pack-format/dist/v1/parser';
import { isWebPSupported } from '@/asset-manager';
import { mergeContentPacks } from './merge';
import { IRootState } from '..';

export interface IContentState {
	contentPacks: Array<ContentPack<IAsset>>;
	current: ContentPack<IAsset>;
}

export interface IAsset {
	hq: string;
	lq: string;
	sourcePack: string;
}

function baseDir(url: string): string {
	return (
		url
			.split('/')
			.slice(0, -1)
			.join('/') + '/'
	);
}

// These types are assumed to always be supported
const baseTypes = new Set(['png', 'gif', 'bmp', 'svg']);

export default {
	namespaced: true,
	state: {
		contentPacks: [],
		current: {
			backgrounds: [],
			characters: [],
			fonts: [],
			poemStyles: [],
			sprites: [],
		},
	},
	mutations: {
		setContentPacks(state: IContentState, packs: Array<ContentPack<IAsset>>) {
			state.contentPacks = packs;
		},
		setCurrentContent(state: IContentState, content: ContentPack<IAsset>) {
			state.current = content;
		},
	},
	actions: {
		async contentPack({ commit, state }, contentPack: ContentPack) {
			const convertedPack = await convertContentPack(contentPack);
			commit('setContentPacks', [...state.contentPacks, convertedPack]);
			commit(
				'setCurrentContent',
				mergeContentPacks(state.current, convertedPack)
			);
		},

		async removeContentPacks({ commit, state }, packIds: Set<string>) {
			const newContentPacks = state.contentPacks.filter(
				pack => !packIds.has(pack.packId!)
			);
			commit('setContentPacks', newContentPacks);
			commit(
				'setCurrentContent',
				newContentPacks.reduce((acc, value) => mergeContentPacks(acc, value))
			);
		},

		async replaceContentPack(
			{ commit, state },
			{ contentPack }: IReplaceContentPackAction
		) {
			const convertedPack = await convertContentPack(contentPack);
			const packs = state.contentPacks;
			const packIdx = packs.findIndex(
				pack => pack.packId === contentPack.packId
			);
			if (packIdx === -1) {
				packs.push(convertedPack);
			} else {
				packs.splice(packIdx, 1, convertedPack);
			}
			commit('setContentPacks', packs);
			commit(
				'setCurrentContent',
				packs.reduce((acc, value) => mergeContentPacks(acc, value))
			);
		},

		async loadContentPacks({ dispatch }, urls: string | string[]) {
			if (typeof urls === 'string') {
				urls = [urls];
			}
			const contentPacks = await Promise.all(
				urls.map(async url => {
					const response = await fetch(url);
					if (response.status !== 200) {
						error(
							`Could not load content pack. Server responded with: ${response.statusText}`
						);
					}

					let json;
					try {
						json = await response.json();
					} catch (e) {
						error('Content pack is not valid json!');
					}

					let contentPack: ContentPack;
					try {
						const paths = {
							'./': baseDir(url),
							'/': baseDir(location.href) + 'assets/',
						};
						if (json.version === '2.0') {
							contentPack = normalizeContentPack(json, paths);
						} else {
							contentPack = convertV1(normalizeCharacterV1(json, paths), false);
						}
					} catch (e) {
						error('Content pack is not in a valid format!', e);
					}
					return contentPack;
				})
			);

			for (const contentPack of contentPacks) {
				await dispatch('contentPack', contentPack);
			}
		},
	},
	getters: {
		getCharacters({
			current,
		}): Map<Character<IAsset>['id'], Character<IAsset>> {
			const ret = new Map<Character<IAsset>['id'], Character<IAsset>>();
			for (const character of current.characters) {
				ret.set(character.id, character);
			}
			return ret;
		},
		getBackgrounds({
			current,
		}): Map<Background<IAsset>['label'], Background<IAsset>> {
			const ret = new Map<Background<IAsset>['label'], Background<IAsset>>();
			for (const background of current.backgrounds) {
				ret.set(background.label, background);
			}
			return ret;
		},
	},
} as Module<IContentState, IRootState>;

async function convertContentPack(
	pack: ContentPack
): Promise<ContentPack<IAsset>> {
	const types: ReadonlySet<string> = new Set(
		(await isWebPSupported()) ? ['webp', ...baseTypes] : baseTypes
	);

	return assetWalker(
		pack,
		(path: string, type: 'image' | 'font'): IAsset => {
			const replacementMap = new Map([
				['ext', '{lq:.lq:}.{format:webp:webp:png:png}'],
			]);
			const hq = normalizePath(path, replacementMap, types, false);
			const lq = normalizePath(path, replacementMap, types, true);

			return {
				hq,
				lq,
				sourcePack: pack.packId || 'buildIn',
			};
		}
	);
}

function error(msg: string, payload?: any): never {
	console.error(msg, payload);
	throw new Error(msg);
}

export interface IReplaceContentPackAction {
	contentPack: ContentPack;
}
