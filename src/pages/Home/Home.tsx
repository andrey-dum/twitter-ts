import React from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import SearchIcon from '@material-ui/icons/Search';

import { Avatar, Typography } from '@material-ui/core';
import { Tweet } from '../../components/Tweet';
import { SidebarMenu } from '../../components/SidebarMenu';

import { TweetBox } from '../../components/TweetBox';
import { useHomeStyles } from './theme';
import { SearchtextField } from '../../components/SearchTextField';



export const Home: React.FC = (): React.ReactElement => {
    const classes = useHomeStyles();

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

                        <Tweet 
                            classes={classes}
                            text={
                                `React – A JavaScript library for building user interfacesreactjs.org
                                React · Declarative React makes it painless to create interactive UIs. · Component-Based Build encapsulated components that manage their own state, then ...`
                            }
                            user={{
                                fullname: 'Jon Jones', 
                                username: 'bones',
                                avatarUrl: 'https://api.time.com/wp-content/uploads/2015/01/jon-jones.jpg'
                            }}
                        />
                        <Tweet 
                            classes={classes}
                            text={
                                `React – A JavaScript library for building user interfacesreactjs.org
                                React · Declarative React makes it painless to create interactive UIs. · Component-Based Build encapsulated components that manage their own state, then ...`
                            }
                            user={{
                                fullname: 'Jon Jones', 
                                username: 'bones',
                                avatarUrl: 'https://api.time.com/wp-content/uploads/2015/01/jon-jones.jpg'
                            }}
                        />
                        <Tweet 
                            classes={classes}
                            text={
                                `React – A JavaScript library for building user interfacesreactjs.org
                                React · Declarative React makes it painless to create interactive UIs. · Component-Based Build encapsulated components that manage their own state, then ...`
                            }
                            user={{
                                fullname: 'Jon Jones', 
                                username: 'bones',
                                avatarUrl: 'https://api.time.com/wp-content/uploads/2015/01/jon-jones.jpg'
                            }}
                        />
                        <Tweet 
                            classes={classes}
                            text={
                                `React – A JavaScript library for building user interfacesreactjs.org
                                React · Declarative React makes it painless to create interactive UIs. · Component-Based Build encapsulated components that manage their own state, then ...`
                            }
                            user={{
                                fullname: 'Jon Jones', 
                                username: 'bones',
                                avatarUrl: 'https://api.time.com/wp-content/uploads/2015/01/jon-jones.jpg'
                            }}
                        />
                        <Tweet 
                            classes={classes}
                            text={
                                `React – A JavaScript library for building user interfacesreactjs.org
                                React · Declarative React makes it painless to create interactive UIs. · Component-Based Build encapsulated components that manage their own state, then ...`
                            }
                            user={{
                                fullname: 'Jon Jones', 
                                username: 'bones',
                                avatarUrl: 'https://api.time.com/wp-content/uploads/2015/01/jon-jones.jpg'
                            }}
                        />
                        <Tweet 
                            classes={classes}
                            text={
                                `React – A JavaScript library for building user interfacesreactjs.org
                                React · Declarative React makes it painless to create interactive UIs. · Component-Based Build encapsulated components that manage their own state, then ...`
                            }
                            user={{
                                fullname: 'Jon Jones', 
                                username: 'bones',
                                avatarUrl: 'https://api.time.com/wp-content/uploads/2015/01/jon-jones.jpg'
                            }}
                        />
                        <Tweet 
                            classes={classes}
                            text={
                                `React – A JavaScript library for building user interfacesreactjs.org
                                React · Declarative React makes it painless to create interactive UIs. · Component-Based Build encapsulated components that manage their own state, then ...`
                            }
                            user={{
                                fullname: 'Jon Jones', 
                                username: 'bones',
                                avatarUrl: 'https://api.time.com/wp-content/uploads/2015/01/jon-jones.jpg'
                            }}
                        />
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
