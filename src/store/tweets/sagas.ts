import { tweetsApi } from './../../services/api/tweetsApi';

import { setTweets, TweetsAtionsType, setTweetsLoadingState } from './actionCreators';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { LoadingState } from './state';


export function* fetchTweetsRequest() {
  try {
    const dataItems = yield call(tweetsApi.fetchTweets);
    yield put(setTweets(dataItems))
  } catch (error) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));
  }
  
}


export function* tweetsSaga() {
  yield takeLatest(TweetsAtionsType.FETCH_TWEETS, fetchTweetsRequest)
}