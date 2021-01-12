import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectTweetData, selectTweetLoading } from '../store/tweet/selectors'
import { Tweet } from './Tweet'
import { fetchTweetData, setTweetData } from '../store/tweet/actionCreators';
import { useParams } from 'react-router-dom';
import { useHomeStyles } from '../pages/Home/theme';
import { CircularProgress } from '@material-ui/core';

// interface FullTweetProps {

// }

export const FullTweet: React.FC = (
   
): React.ReactElement | null => {
    const classes = useHomeStyles()

    const tweet = useSelector(selectTweetData)
    const isLoading = useSelector(selectTweetLoading)

    const dispatch = useDispatch()

    const params: {id?: string} = useParams()
    const tweetId = params.id

    React.useEffect(() => {
        if(tweetId) {
            dispatch(fetchTweetData(tweetId)) 
        }
        return () => {dispatch(setTweetData(undefined))}
    }, [dispatch, tweetId]);

    if(!tweet) {
        return null
    }

    return (
        <>
        { isLoading 
            ? <div style={{textAlign: 'center', marginTop: '40px'}}><CircularProgress /></div>
            : <Tweet
                // key={tweet._id}
                // _id={tweet._id}
                // text={tweet.text}
                // user={tweet.user}
                {...tweet}
                classes={classes}
            />
        }</>
    )
}
