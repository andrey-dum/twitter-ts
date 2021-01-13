import { Tweet } from './../../store/tweets/state';

import { TweetsState } from '../../store/tweets/state';
import axios from 'axios'

export const tweetsApi = {
    fetchTweets(): Promise<TweetsState['items']> {
        return axios.get('/tweets').then(({data}) => data)
        // return axios.get('http://localhost:3000/db.json').then(({data}) => data.tweets)
    },
    fetchTweetData(tweetId: string): Promise<Tweet[]> {
        return axios.get(`/tweets/?_id=${tweetId}`).then(({data}) => data)
    },
    addTweet(payload: Tweet): Promise<Tweet> {
        return axios.post(`/tweets`, payload).then(({data}) => data)
    }
}
