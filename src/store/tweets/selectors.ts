import { createSelector } from 'reselect';
import { RootState } from '../store';
import { LoadingState, TweetsState, AddTweetFormState } from './state';

export const selectTweets = (state: RootState): TweetsState => state.tweets;
export const selectAddTweetFormState = (state: RootState): AddTweetFormState =>  selectTweets(state).addTweetFormState;

export const selectTweetsItems = createSelector(selectTweets, tweets => tweets.items)


export const selectLoadingState = (state: RootState): LoadingState => selectTweets(state).loadingState

export const selectTweetsLoading = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADING;
export const selectTweetsLoaded = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADED;

//export const selectAddTweetFromState = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADED;