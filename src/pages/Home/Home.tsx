import React from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import { Avatar, CircularProgress, Typography } from '@material-ui/core';
import { Tweet } from '../../components/Tweet';
import { SidebarMenu } from '../../components/SidebarMenu';

import { TweetBox } from '../../components/TweetBox';
import { useHomeStyles } from './theme';
import { SearchtextField } from '../../components/SearchTextField';

import { useDispatch, useSelector } from 'react-redux'

import { selectTweetsLoading, selectTweetsItems } from '../../store/tweets/selectors';
import { fetchTweets } from '../../store/tweets/actionCreators';

import { Tags } from '../../components/Tags';
import { Route } from 'react-router-dom';


import {BackButton} from '../../components/BackButton';
import { FullTweet } from '../../components/FullTweet';

export const Home: React.FC = (): React.ReactElement => {
    const classes = useHomeStyles();

    const dispatch = useDispatch()
    const tweets = useSelector(selectTweetsItems)
    const isLoading = useSelector(selectTweetsLoading)
    

    React.useEffect(() => {
        dispatch(fetchTweets());
    }, [dispatch])

   
    return (
        <Container className={classes.wrapper} maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    
                    <SidebarMenu classes={classes} />
                    
                </Grid>
                <Grid item xs={6}>
                    <div className={classes.feed}>
                        <div className={classes.feedHeader}>
                            <Route path={'/home/:any'}>
                                <BackButton />
                            </Route>

                            <Route path={['/home', '/home/search']} exact>
                                <Typography variant="h6">Твиты</Typography>
                            </Route>
                            
                            <Route path={`/home/tweet/:_id`}>
                                <Typography variant="h6">Твитнуть</Typography>
                            </Route>

                        </div>

                        <Route path={`/home/tweet/:id`} component={FullTweet} exact>
                            
                        </Route>

                        <Route path={['/home', '/home/search']} exact>
                            <TweetBox classes={classes} />
                            <div className={classes.tweetBoxDivider} />
                        </Route>
                        
                        <Route path="/home" exact>
                            { isLoading 
                                    ? <div style={{textAlign: 'center', marginTop: '40px'}}><CircularProgress /></div> 
                                    : tweets && tweets.map(tweet => (
                                    <Tweet
                                        key={tweet._id}
                                        _id={tweet._id}
                                        classes={classes}
                                        text={tweet.text}
                                        user={tweet.user}
                                />
                                ))}
                        </Route>

                        
                        
                      
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <div className={classes.rightSide}>
                        <div className={classes.search}>
                            <SearchIcon />
                            <SearchtextField
                                autoFocus
                                margin="dense"
                                id="search"
                                placeholder="Поиск по твиттеру"
                                type="text"
                                fullWidth
                            />
                        </div>
                            <Tags classes={classes} />

                            <div className={classes.righBlock}>
                                <Typography variant="h6">Кого читать</Typography>
                                <div className={classes.readUser}>
                                    <div className={classes.readUserInfo}>
                                        <Avatar className={classes.readUserAvatar} />
                                        <div>
                                           <div><b> Andrey</b></div>
                                            <small>@andrey</small>
                                        </div>
                                    </div>
                                    <PersonAddOutlinedIcon color="primary" />
                                </div>
                            </div>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}
