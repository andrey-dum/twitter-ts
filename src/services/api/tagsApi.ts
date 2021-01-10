import { TagsState } from './../../store/tags/state';
import axios from 'axios'

export const tagsApi = {
    fetchTags(): Promise<TagsState['items']> {
        return axios.get('/tags').then(({data}) => data)
    }
}