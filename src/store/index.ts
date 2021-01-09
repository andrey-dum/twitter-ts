import { tweetsReducer } from './tweets/tweetsReducer';
import {combineReducers} from 'redux'

export const rootReducer = combineReducers({
    tweets: tweetsReducer
})