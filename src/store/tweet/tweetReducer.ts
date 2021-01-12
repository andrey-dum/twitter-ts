import produce, { Draft } from 'immer'
import { TweetActions} from './actionCreators';
import { TweetAtionsType } from './actionTypes';
import { TweetState, LoadingState } from './state';

const initialTagsState: TweetState = {
    data: undefined,
    loadingState: LoadingState.NEVER
}

export const tweetReducer = produce((draft: Draft<TweetState>, action: TweetActions) => {
    switch (action.type) {
        case TweetAtionsType.SET_TWEET_DATA:
            draft.data = action.payload
            draft.loadingState = LoadingState.LOADED; 
            break;
        // case TweetAtionsType.UNSET_TWEET_DATA:
        //     draft.data = undefined
        //     break;
            
        case TweetAtionsType.FETCH_TWEET_DATA:
            draft.data = undefined;
            draft.loadingState = LoadingState.LOADING;
            break;

        case TweetAtionsType.SET_LOADING_STATE:
            draft.loadingState = action.payload
            break;

        default:
            break;
    }

}, initialTagsState)