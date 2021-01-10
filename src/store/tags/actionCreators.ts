import { TagsState, LoadingState } from './state';
import { Action } from 'redux';

export enum TagsAtionsType {
    SET_ITEMS = 'tags/SET_ITEMS',
    FETCH_ITEMS = 'tags/FETCH_ITEMS',
    SET_LOADING_STATE = 'tags/SET_LOADING_STATE',

}


export interface SetTagsItemsActionInterface extends Action<TagsAtionsType> {
    type: TagsAtionsType.SET_ITEMS;
    payload: TagsState['items'];
}
export interface FetchTagsActionInterface extends Action<TagsAtionsType> {
    type: TagsAtionsType.FETCH_ITEMS;
}

export interface SetTagsLoadingStateActionInterface extends Action<TagsAtionsType> {
    type: TagsAtionsType.SET_LOADING_STATE;
    payload: LoadingState;
}


// ActionsC
export const fetchTags = (): FetchTagsActionInterface  => ({
    type: TagsAtionsType.FETCH_ITEMS
})

export const setTags = (payload: TagsState['items']): SetTagsItemsActionInterface  => ({
    type: TagsAtionsType.SET_ITEMS,
    payload
})
export const setTagsLoadingState = (payload: LoadingState): SetTagsLoadingStateActionInterface  => ({
    type: TagsAtionsType.SET_LOADING_STATE,
    payload
})

export type TagsActions = 
SetTagsItemsActionInterface | SetTagsLoadingStateActionInterface 
    | FetchTagsActionInterface;