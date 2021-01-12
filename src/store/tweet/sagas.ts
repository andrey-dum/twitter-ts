import { Tweet } from './../tweets/state';
import { tweetsApi } from './../../services/api/tweetsApi';

import { TweetAtionsType, FetchTweetDataActionInterface } from './actionTypes';
import { setTweetData, setTweetDataLoadingState } from './actionCreators';
import { call, put, takeEvery } from 'redux-saga/effects'
import { LoadingState } from './state';

export function* fetchTweetRequest({ payload: tweetId}: FetchTweetDataActionInterface) {
  try {
    const tweetData: Tweet[] = yield call(tweetsApi.fetchTweetData, tweetId);
    
    yield put(setTweetData(tweetData[0]))
  } catch (error) {
    yield put(setTweetDataLoadingState(LoadingState.ERROR));
  }
  
}

export function* tweetSaga() {
  yield takeEvery(TweetAtionsType.FETCH_TWEET_DATA, fetchTweetRequest)
}