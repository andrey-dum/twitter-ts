import React from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import SearchIcon from '@material-ui/icons/Search';

import { Avatar, CircularProgress, Typography } from '@material-ui/core';
import { Tweet } from '../../components/Tweet';
import { SidebarMenu } from '../../components/SidebarMenu';

import { TweetBox } from '../../components/TweetBox';
import { useHomeStyles } from './theme';
import { SearchtextField } from '../../components/SearchTextField';

import { useDispatch, useSelector } from 'react-redux'
import { fetchTweets } from '../../store/tweets/actionCreators';
import { selectTweetsLoading, selectTweetsItems } from '../../store/tweets/selectors';



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
                        <div className={classes.feedHeader}><Typography variant="h6">Главная</Typography></div> 
                        <TweetBox classes={classes} />
                        <div className={classes.tweetBoxDivider} />

                        { isLoading 
                            ? <div style={{textAlign: 'center', marginTop: '40px'}}><CircularProgress /></div> 
                            : tweets && tweets.map(tweet => (
                            <Tweet
                                key={tweet._id}
                                classes={classes}
                                text={tweet.text}
                            user={tweet.user}
                        />
                        ))}
                        
                      
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

                            <div className={classes.righBlock}>
                                <Typography variant="h6">Актуальные темы</Typography>
                                <div className={'actualTheme'}>
                                    <div><b> Киев</b></div>
                                    <small>Твитов: 1000</small>
                                </div>
                            </div>

                            <div className={classes.righBlock}>
                                <Typography variant="h6">Кого читать</Typography>
                                <div className={classes.readUser}>
                                    <Avatar />
                                    <div>
                                        <div><b> Andrey</b></div>
                                        <small>@andrey</small>
                                    </div>
                                    <PermIdentityIcon />
                                </div>
                            </div>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}
