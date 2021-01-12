import { TweetAtionsType, FetchTweetDataActionInterface, SetTweetDataLoadingStateActionInterface, SetTweetDataActionInterface } from './actionTypes';
import { LoadingState, TweetState } from './state';

// ActionsC
export const fetchTweetData = (payload: string): FetchTweetDataActionInterface  => ({
    type: TweetAtionsType.FETCH_TWEET_DATA,
    payload
})

export const setTweetData = (payload: TweetState['data']): SetTweetDataActionInterface  => ({
    type: TweetAtionsType.SET_TWEET_DATA,
    payload
})
export const setTweetDataLoadingState = (payload: LoadingState): SetTweetDataLoadingStateActionInterface  => ({
    type: TweetAtionsType.SET_LOADING_STATE,
    payload
})

// export const unsetTweetData = (): UnsetTweetDataActionInterface  => ({
//     type: TweetAtionsType.UNSET_TWEET_DATA
// })

export type TweetActions = 
FetchTweetDataActionInterface | SetTweetDataActionInterface 
    | SetTweetDataLoadingStateActionInterface;