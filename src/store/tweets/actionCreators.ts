import { LoadingState } from './state';
import { Action } from 'redux';
import { TweetsState } from './state';

export enum TweetsAtionsType {
    SET_TWEETS = 'tweets/SET_TWEETS',
    FETCH_TWEETS = 'tweets/FETCH_TWEETS',
    SET_LOADING_STATE = 'tweets/SET_LOADING_STATE',

}


export interface SetTweetsActionInterface extends Action<TweetsAtionsType> {
    type: TweetsAtionsType.SET_TWEETS;
    payload: TweetsState['items'];
}
export interface FetchTweetsActionInterface extends Action<TweetsAtionsType> {
    type: TweetsAtionsType.FETCH_TWEETS;
}

export interface SetTweetsLoadingStateActionInterface extends Action<TweetsAtionsType> {
    type: TweetsAtionsType.SET_LOADING_STATE;
    payload: LoadingState;
}


// ActionsC
export const fetchTweets = (): FetchTweetsActionInterface  => ({
    type: TweetsAtionsType.FETCH_TWEETS
})

export const setTweets = (payload: TweetsState['items']): SetTweetsActionInterface  => ({
    type: TweetsAtionsType.SET_TWEETS,
    payload
})
export const setTweetsLoadingState = (payload: LoadingState): SetTweetsLoadingStateActionInterface  => ({
    type: TweetsAtionsType.SET_LOADING_STATE,
    payload
})

export type TweetsActions = SetTweetsActionInterface | SetTweetsLoadingStateActionInterface | FetchTweetsActionInterface;