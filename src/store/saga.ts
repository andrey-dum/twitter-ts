import { all } from "redux-saga/effects";
import { tagsSaga } from "./tags/sagas";
import { tweetsSaga } from './tweets/sagas'
import { tweetSaga } from './tweet/sagas'


export default function* rootSaga() {
    yield all([
      tweetsSaga(),
      tagsSaga(),
      tweetSaga()
    ])
  }

  
