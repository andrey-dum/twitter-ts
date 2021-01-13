import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectTweetData, selectTweetLoading } from '../store/tweet/selectors'
import { fetchTweetData, setTweetData } from '../store/tweet/actionCreators';
import { useParams } from 'react-router-dom';
import { useHomeStyles } from '../pages/Home/theme';
import { Avatar, CircularProgress } from '@material-ui/core';

// interface FullTweetProps {

// }

export const SingleTweet: React.FC = (
   
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
            :  <div className={classes.tweet}>
            
               
            <div className={classes.tweetBody}>
                <div className={classes.singleTweetHeaderWrap}>
                    <Avatar 
                        src={tweet.user.avatarUrl} 
                        alt={`${tweet.user.avatarUrl}`} 
                    /> 
                   <div className={classes.singleTweetHeader}>
                        <b>{tweet.user.fullname}</b> 
                        <span>@{tweet.user.username}</span>
                   </div>
                </div>
                
                <div>{tweet.text}</div>

                {/* <div className={classes.btnsGroup}>
                    <IconButton aria-label="TwitterIcon">
                        <StyledBadge badgeContent={4} color="secondary">
                            <ChatBubbleOutlineIcon />
                        </StyledBadge>
                    </IconButton>
            
                    <IconButton aria-label="TwitterIcon">
                        <StyledBadge badgeContent={4} color="secondary">
                            <RepeatIcon />
                        </StyledBadge>
                    </IconButton>
            
                    <IconButton aria-label="TwitterIcon">
                        <StyledBadge badgeContent={4} color="secondary">
                            <FavoriteBorderIcon />
                        </StyledBadge>
                    </IconButton>
            
                    <IconButton aria-label="TwitterIcon">
                        <StyledBadge badgeContent={4} color="secondary">
                            <SystemUpdateAltIcon />
                        </StyledBadge>
                    </IconButton>
                </div> */}
            </div>

        </div>  
        }</>
    )
}
