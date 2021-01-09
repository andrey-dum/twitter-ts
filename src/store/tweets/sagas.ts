import { TweetsAtionsType } from './actionCreators';
import { takeEvery } from 'redux-saga/effects'


export function* fetchTweetsRequest() {
  console.log('Saga work')
}


export function* tweetsSaga() {
  yield takeEvery(TweetsAtionsType.FETCH_TWEETS, fetchTweetsRequest)
}