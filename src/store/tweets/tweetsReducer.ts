import produce, { Draft } from 'immer'
import { TweetsActions } from './actionCreators';
import { TweetsAtionsType } from './actionTypes';
import { TweetsState, LoadingState, AddTweetFormState } from './state';

const initialTweetState: TweetsState = {
    items: [],
    loadingState: LoadingState.NEVER,
    addTweetFormState: AddTweetFormState.NEVER
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

        case TweetsAtionsType.FETCH_ADD_TWEET:
            draft.addTweetFormState = AddTweetFormState.LOADING;
            break;
        case TweetsAtionsType.ADD_TWEET:
            draft.items.splice(0, 0, action.payload);
            // draft.items.push(action.payload);
            draft.addTweetFormState = AddTweetFormState.NEVER;
            break;

        case TweetsAtionsType.SET_ADD_FORM_STATE:
            draft.addTweetFormState = action.payload
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