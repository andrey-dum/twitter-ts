import { all } from "redux-saga/effects";
import { tagsSaga } from "./tags/sagas";
import { tweetsSaga } from './tweets/sagas'


export default function* rootSaga() {
    yield all([
      tweetsSaga(),
      tagsSaga()
    ])
  }

  
