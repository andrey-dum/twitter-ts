import { TweetsState } from './../../store/tweets/state';
import axios from 'axios'




export const tweetsApi = {
    fetchTweets(): Promise<TweetsState['items']> {
        return axios.get('http://localhost:3000/tweets.json').then(({data}) => data)
    }
}