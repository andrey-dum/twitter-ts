import React from 'react'
import { makeStyles, withStyles, } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';

import { Avatar, Button, InputBase, TextField, Typography } from '@material-ui/core';
import { Tweet } from '../components/Tweet';
import { SidebarMenu } from '../components/SidebarMenu';

// const StyledBadge = withStyles((theme) => ({
//     badge: {
//       right: -3,
//       top: 13,
//       border: `2px solid ${theme.palette.background.paper}`,
//       padding: '0 4px',
//     },
//   }))(Badge);
  

export const useHomeStyles = makeStyles((theme) => ({
    wrapper: {
      height: '100vh',
    },
    logo: {
        fontSize: 36,
    },
    sideMenu: {
        listStyleType: 'none',
        padding: 0,
        margin: 0,
        marginBottom: 30,
        '& li': {
          display: 'flex',
          alignItems: 'center',
          borderRadius: 26,
          cursor: 'pointer',
          marginBottom: 8,
        },
        '& li:hover': {
            backgroundColor: 'rgba(29, 161, 242, .12)',
            '& svg': {
                color: 'rgb(29, 161, 242)',
            },
            '& h6': {
                color: 'rgb(29, 161, 242)',
            }
        },
        '& svg': {
            fontSize: 25,
        },
        '& h6': {
            fontWeight: 700,
            fontSize: 20,
            marginLeft: 10,
        }
    },
    search: {
        marginTop: 15,
        backgroundColor: 'rgb(222 231 236)',
        borderRadius: 30,
        padding: '5px 10px',
        display: 'flex',
        alignItems: 'center',
        '& svg': {
            marginRight: 8
        }
    },
    feed: {
        borderRight: '1px solid #ededed',
        borderLeft: '1px solid #ededed',
        height: '100%',
        '& h6': {
            padding: 10,
            fontWeight: 'bold',
        }
    },
    tweet: {
        padding: 15,
        display: 'flex',
        borderBottom: '1px solid #ededed',
    },
    tweetBox: {
        borderBottom: '8px solid #ededed',
        padding: 15,
    },
    tweetBody: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 10,
        
    },
    tweetHeader: {
        display: 'flex',
        alignItems: 'center',
    },
    tweetHeaderName: {
        '& span': {
            color: 'gray',
        }
    },
    btnsGroup: {
        display: 'flex',
        justifyContent: 'space-between',
        width: 450,
        padding: '10px 0',
        '& svg': {
            fill: 'gray'
           
        }
    }
    
  }));

  const SearchtextField = withStyles((theme) => ({ 
    
    input: {
        fontSize: 15,
        padding: '5px 0',
    },

  }))(InputBase);


export const Home = () => {
    const classes = useHomeStyles();

    return (
        <Container className={classes.wrapper} maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <IconButton aria-label="TwitterIcon" color="primary">
                        <TwitterIcon className={classes.logo} />
                    </IconButton>
                    
                    <SidebarMenu classes={classes} />
                    
                </Grid>
                <Grid item xs={6}>
                    <div className={classes.feed}>
                        <Typography variant="h6">Главная</Typography>
                        <div className={classes.tweetBox}>
                            <Avatar src={'https://api.time.com/wp-content/uploads/2015/01/jon-jones.jpg'} />
                            <input placeholder="Что происходит" type="text"/>
                            <div className="tweetBoxActions">
                                <div className="tweetBoxIcons">
                                <SearchIcon /> 
                                <SearchIcon /> 
                                </div>
                                <Button
                                    variant="contained"
                                    color="primary"
                                >Твитнуть</Button>
                            </div>
                        </div>

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
                </Grid>
            </Grid>
        </Container>
    )
}
