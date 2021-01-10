import produce, { Draft } from 'immer'
import { TweetsActions, TweetsAtionsType } from './actionCreators';
import { TweetsState, LoadingState } from './state';

const initialTweetState: TweetsState = {
    items: [],
    loadingState: LoadingState.NEVER
}

export const tweetsReducer = produce((draft: Draft<TweetsState>, action: TweetsActions) => {
    // const {type, payload} = action
    switch (action.type) {
        case TweetsAtionsType.SET_TWEETS:
            draft.items = action.payload
            draft.loadingState = LoadingState.LOADED; 
            break;
            
        case TweetsAtionsType.FETCH_TWEETS:
            draft.items = [];
            draft.loadingState = LoadingState.LOADING;
            break;

        case TweetsAtionsType.SET_LOADING_STATE:
            draft.loadingState = action.payload
            break;

        default:
            break;
    }

    // if (action.type === TweetsAtionsType.SET_TWEETS) {
    //     draft.items = action.payload
    //     draft.loadingState = LoadingState.LOADED;
    // }

    // if (action.type === TweetsAtionsType.SET_LOADING_STATE) {
    //     draft.loadingState = action.payload
    // }


}, initialTweetState)