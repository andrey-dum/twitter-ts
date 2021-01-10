import produce, { Draft } from 'immer'
import { TagsActions, TagsAtionsType } from './actionCreators';
import { TagsState, LoadingState } from './state';

const initialTagsState: TagsState = {
    items: [],
    loadingState: LoadingState.NEVER
}

export const tagsReducer = produce((draft: Draft<TagsState>, action: TagsActions) => {
    switch (action.type) {
        case TagsAtionsType.SET_ITEMS:
            draft.items = action.payload
            draft.loadingState = LoadingState.LOADED; 
            break;
            
        case TagsAtionsType.FETCH_ITEMS:
            draft.items = [];
            draft.loadingState = LoadingState.LOADING;
            break;

        case TagsAtionsType.SET_LOADING_STATE:
            draft.loadingState = action.payload
            break;

        default:
            break;
    }

}, initialTagsState)