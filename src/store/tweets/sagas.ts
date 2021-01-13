import { tweetsApi } from '../../services/api/tweetsApi';

import {
  setTweets, 
  setAddTweetFormState,
  setTweetsLoadingState,
  addTweet } from './actionCreators';
import {
  TweetsAtionsType, 
  FetchAddTweetActionInterface } from './actionTypes';
import { call, put, takeLatest } from 'redux-saga/effects'
import { LoadingState, Tweet, AddTweetFormState } from './state';


export function* fetchTweetsRequest() {
  try {
    const dataItems = yield call(tweetsApi.fetchTweets);
    yield put(setTweets(dataItems))
  } catch (error) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));
  }
  
}

export function* fetchAddTweetRequest({ payload }: FetchAddTweetActionInterface) {
  try {
    const data: Tweet = {
      // id: Date.now(),
      _id: Date.now().toString(),
      text: payload,
      user: {
        fullname: 'test test',
        username: 'test',
        avatarUrl: 'https://qph.fs.quoracdn.net/main-qimg-220cbc8eee555db1048c5ed1870430f5'
      }
    }
    const item = yield call(tweetsApi.addTweet, data);
    yield put(addTweet(item))
  } catch (error) {
    yield put(setAddTweetFormState(AddTweetFormState.ERROR));
  }
  
}


export function* tweetsSaga() {
  yield takeLatest(TweetsAtionsType.FETCH_TWEETS, fetchTweetsRequest)
  yield takeLatest(TweetsAtionsType.FETCH_ADD_TWEET, fetchAddTweetRequest)
}