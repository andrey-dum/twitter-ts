import { tagsApi } from './../../services/api/tagsApi';

import { setTags, TagsAtionsType, setTagsLoadingState } from './actionCreators';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { LoadingState } from './state';


export function* fetchTagsRequest() {
  try {
    const items = yield call(tagsApi.fetchTags);
    yield put(setTags(items))
  } catch (error) {
    yield put(setTagsLoadingState(LoadingState.ERROR));
  }
  
}


export function* tagsSaga() {
  yield takeLatest(TagsAtionsType.FETCH_ITEMS, fetchTagsRequest)
}