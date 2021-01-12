import { tweetReducer } from './tweet/tweetReducer';
import { tweetsReducer } from './tweets/tweetsReducer';
import { tagsReducer } from './tags/tagsReducer';
import {combineReducers} from 'redux'

export const rootReducer = combineReducers({
    tweets: tweetsReducer,
    tags: tagsReducer,
    tweet: tweetReducer
})