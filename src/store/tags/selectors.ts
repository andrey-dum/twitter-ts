import { createSelector } from 'reselect';
import { RootState } from '../store';
import { LoadingState, TagsState } from './state';

export const selectTags = (state: RootState): TagsState => state.tags;

export const selectTagsItems = createSelector(selectTags, tags => tags.items)


export const selectLoadingState = (state: RootState): LoadingState => selectTags(state).loadingState

export const selectTagsLoading = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADING;
export const selectTagsLoaded = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADED;