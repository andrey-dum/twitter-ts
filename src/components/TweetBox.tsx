import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import { Avatar, Button, CircularProgress, IconButton, Snackbar, TextareaAutosize } from '@material-ui/core';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import GifOutlinedIcon from '@material-ui/icons/GifOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';
import { useHomeStyles } from '../pages/Home/theme'
import { fetchAddTweet } from '../store/tweets/actionCreators';
import { selectAddTweetFormState } from '../store/tweets/selectors';
import { AddTweetFormState } from '../store/tweets/state';


interface TweetBoxProps {
    classes: ReturnType<typeof useHomeStyles>;
    maxRows?: number;
}



export const TweetBox: React.FC<TweetBoxProps> = ({
    classes,
    maxRows=20
    }: TweetBoxProps): React.ReactElement => {
        
    const dispatch = useDispatch()
    const addFormState = useSelector(selectAddTweetFormState)
    //notification
    const [open, setOpen] = React.useState(false);
    
    React.useEffect(() => {
        if(addFormState === AddTweetFormState.ERROR) {
            setOpen(true)
        }
    }, [addFormState])


    const [text, setText] = React.useState<string>('');
    const textLimitPercent = (text.length / 280) * 100;

    const MAX_LENGTH = 280
    const textCount = MAX_LENGTH - text.length

    const handleChangeTextarea = (e: React.FormEvent<HTMLTextAreaElement>): void => {
        if(e.currentTarget.value) {
            setText(e.currentTarget.value)
        }
    }
  
    const handleAddTweet = (): void => {
        dispatch(fetchAddTweet(text))
        setText('')
    }

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.tweetBox}>
            <Snackbar
                open={open}
                onClose={handleClose}
                message="Ошибка при добавлении 😦"
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            />
            <div className={classes.tweetBox__Body}>
                <Avatar src={'https://api.time.com/wp-content/uploads/2015/01/jon-jones.jpg'} />
                
                <div style={{width: '100%'}}>

                    <TextareaAutosize
                        value={text}
                        onChange={handleChangeTextarea}
                        rowsMin={4}
                        rowsMax={maxRows}
                        placeholder="Что происходит?" />

                    <div className={classes.tweetBoxActions}>
                        <div className="tweetBoxIcons">
                            <IconButton aria-label="TwitterIcon">
                                <ImageOutlinedIcon /> 
                            </IconButton>
                            <IconButton aria-label="TwitterIcon">
                                <GifOutlinedIcon /> 
                            </IconButton>
                            <IconButton aria-label="TwitterIcon">
                                <SentimentSatisfiedOutlinedIcon /> 
                            </IconButton>
                            <IconButton aria-label="TwitterIcon">
                                <EventOutlinedIcon /> 
                            </IconButton>
                        </div>
                        <div className={classes.addFormBottomRight}>
                            {text && <span>{textCount}</span>}
                            <div className={classes.addFromCircleProgress}>
                                <CircularProgress 
                                    variant="determinate"
                                    size={20} 
                                    thickness={4} 
                                    value={text.length >= MAX_LENGTH ? 100 : textLimitPercent}
                                    style={text.length >= MAX_LENGTH ? {color: 'red'} : undefined}    
                                />
                                <CircularProgress
                                    style={{ color: 'rgba(0, 0, 0, 0.1)' }}
                                    variant="determinate"
                                    size={20}
                                    thickness={4}
                                    value={100}
                                />
                            </div>
                            <Button
                                onClick={handleAddTweet}
                                style={{marginLeft: '14px'}}
                                variant="contained"
                                color="primary"
                                disabled={text.length > MAX_LENGTH || text.length < 2}
                                
                            >Твитнуть</Button>
                        </div>
                    
                    </div>
                </div>
            </div>
            
        </div>
    )
}
