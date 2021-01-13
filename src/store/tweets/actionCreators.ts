import { 
    SetTweetsActionInterface, 
    SetAddFormStateActionInterface, 
    FetchAddTweetActionInterface,
    AddTweetActionInterface,
    SetTweetsLoadingStateActionInterface, 
    TweetsAtionsType } from './actionTypes';

import { FetchTweetsActionInterface } from './actionTypes';
import { LoadingState, Tweet, AddTweetFormState, TweetsState } from './state';




// ActionsC
export const fetchTweets = (): FetchTweetsActionInterface  => ({
    type: TweetsAtionsType.FETCH_TWEETS
})

export const setTweets = (payload: TweetsState['items']): SetTweetsActionInterface  => ({
    type: TweetsAtionsType.SET_TWEETS,
    payload
})

export const setAddTweetFormState = (payload: AddTweetFormState): SetAddFormStateActionInterface  => ({
    type: TweetsAtionsType.SET_ADD_FORM_STATE,
    payload
})

export const fetchAddTweet = (payload: string): FetchAddTweetActionInterface  => ({
    type: TweetsAtionsType.FETCH_ADD_TWEET,
    payload
})
export const addTweet = (payload: Tweet): AddTweetActionInterface  => ({
    type: TweetsAtionsType.ADD_TWEET,
    payload
})

export const setTweetsLoadingState = (payload: LoadingState): SetTweetsLoadingStateActionInterface  => ({
    type: TweetsAtionsType.SET_LOADING_STATE,
    payload
})

export type TweetsActions = 
SetTweetsActionInterface | 
SetTweetsLoadingStateActionInterface 
| FetchTweetsActionInterface 
| FetchAddTweetActionInterface 
| AddTweetActionInterface
| SetAddFormStateActionInterface;