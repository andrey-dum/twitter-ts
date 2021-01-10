import { TagsState } from './tags/state';
import { TweetsState } from './tweets/state';
import { createStore, compose, applyMiddleware } from 'redux'
import { rootReducer } from './index';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const sagaMiddleware = createSagaMiddleware()

export interface RootState {
    tweets: TweetsState;
    tags: TagsState;
}

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(
    sagaMiddleware
)))


sagaMiddleware.run(rootSaga)