import { Action } from 'redux';
import { TweetsState } from './../tweets/state';

export enum TweetsAtionsType {
    SET_TWEETS = 'tweets/SET_TWEETS',
    FETCH_TWEETS = 'tweets/FETCH_TWEETS',

}


export interface SetTweetsActionInterface extends Action<TweetsAtionsType> {
    type: TweetsAtionsType.SET_TWEETS;
    payload: TweetsState['items'];
}
export interface FetchTweetsActionInterface extends Action<TweetsAtionsType> {
    type: TweetsAtionsType.FETCH_TWEETS;
}


// Actions
export const fetchTweets = (): FetchTweetsActionInterface  => ({
    type: TweetsAtionsType.FETCH_TWEETS
})

export const setTweets = (payload: TweetsState['items']): SetTweetsActionInterface  => ({
    type: TweetsAtionsType.SET_TWEETS,
    payload
})

export type TweetsActions = SetTweetsActionInterface;