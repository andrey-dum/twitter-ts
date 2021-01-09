import produce, { Draft } from 'immer'
import { TweetsActions, TweetsAtionsType } from './actionCreators';
import { TweetsState, LoadingState } from './state';

const initialTweetState: TweetsState = {
    items: [],
    loadingState: LoadingState.NEVER
}

export const tweetsReducer = produce((draft: Draft<TweetsState>, action: TweetsActions) => {
    // const {type, payload} = action
    if (action.type === TweetsAtionsType.SET_TWEETS) {
        draft.items = action.payload
    }

}, initialTweetState)