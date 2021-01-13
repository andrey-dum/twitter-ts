import { Action } from 'redux';
import { LoadingState, Tweet, AddTweetFormState } from './state';
import { TweetsState } from './state';

export enum TweetsAtionsType {
    SET_TWEETS = 'tweets/SET_TWEETS',
    FETCH_TWEETS = 'tweets/FETCH_TWEETS',
    SET_LOADING_STATE = 'tweets/SET_LOADING_STATE',
    ADD_TWEET = 'tweets/ADD_TWEET',
    FETCH_ADD_TWEET = 'tweets/FETCH_ADD_TWEET',
    SET_ADD_FORM_STATE = 'tweets/SET_ADD_FORM_STATE',

}


export interface SetAddFormStateActionInterface extends Action<TweetsAtionsType> {
    type: TweetsAtionsType.SET_ADD_FORM_STATE;
    payload: AddTweetFormState;
}


export interface SetTweetsActionInterface extends Action<TweetsAtionsType> {
    type: TweetsAtionsType.SET_TWEETS;
    payload: TweetsState['items'];
}
export interface FetchAddTweetActionInterface extends Action<TweetsAtionsType> {
    type: TweetsAtionsType.FETCH_ADD_TWEET;
    payload: string;
}
export interface AddTweetActionInterface extends Action<TweetsAtionsType> {
    type: TweetsAtionsType.ADD_TWEET;
    payload: Tweet;
}
export interface FetchTweetsActionInterface extends Action<TweetsAtionsType> {
    type: TweetsAtionsType.FETCH_TWEETS;
}

export interface SetTweetsLoadingStateActionInterface extends Action<TweetsAtionsType> {
    type: TweetsAtionsType.SET_LOADING_STATE;
    payload: LoadingState;
}