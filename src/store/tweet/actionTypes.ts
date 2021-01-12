import { LoadingState, TweetState } from './state';
import { Action } from 'redux';


export enum TweetAtionsType {
    SET_TWEET_DATA = 'tweet/SET_TWEET_DATA',
    UNSET_TWEET_DATA = 'tweet/UNSET_TWEET_DATA',
    FETCH_TWEET_DATA = 'tweet/FETCH_TWEET_DATA',
    SET_LOADING_STATE = 'tweet/SET_LOADING_STATE',

}


export interface SetTweetDataActionInterface extends Action<TweetAtionsType> {
    type: TweetAtionsType.SET_TWEET_DATA;
    payload: TweetState['data']
}
// export interface UnsetTweetDataActionInterface extends Action<TweetAtionsType> {
//     type: TweetAtionsType.UNSET_TWEET_DATA;
// }
export interface FetchTweetDataActionInterface extends Action<TweetAtionsType> {
    type: TweetAtionsType.FETCH_TWEET_DATA;
    payload: string;
}

export interface SetTweetDataLoadingStateActionInterface extends Action<TweetAtionsType> {
    type: TweetAtionsType.SET_LOADING_STATE;
    payload: LoadingState;
}
