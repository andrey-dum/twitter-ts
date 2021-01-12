import { makeStyles } from "@material-ui/core";

export const useHomeStyles = makeStyles((theme) => ({
    wrapper: {
      height: '100vh',
    },
    logo: {
        fontSize: 36,
    },
    sidebar: {
        position: 'sticky',
        top: 0,
        
    },
    rightSide: {
        position: 'sticky',
        top: 0,
        padding: '15px 0',
        '& h6': {
            fontWeight: 700
        },
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
    feedHeader: {
        position: 'sticky',
        top: 0,
        backgroundColor: '#fff',
        zIndex: 999,
        borderBottom: '1px solid #ededed',
        display: 'flex',
    },
    tweetBoxDivider: {
        borderBottom: '8px solid #ededed',
    },
    tweetBox: {
       
        padding: 15,
        '& textarea': {
            width: '100%',
            border: '0',
            fontSize: 20,
            outline: 'none',
            fontFamily: 'inherit',
            resize: 'none',
            marginLeft: 10,
        },
    },
    tweetBoxActions: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    tweetBox__Body: {
        display: 'flex',
    },
    addFormBottomRight: {
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
        '& > span': {
            marginRight: 26
        }
    },
    addFromCircleProgress: {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        '& div.MuiCircularProgress-root': {
           position: 'absolute',
           right: 0,
          
        }
    },

    tweet: {
        padding: 15,
        display: 'flex',
        borderBottom: '1px solid #ededed',
        '& a': {
            color: 'inherit',
            display: 'flex',
            textDecoration: 'none'
        }
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
    },
    righBlock: {
        margin: '20px 0',
        '& h6': {
            marginBottom: 15,
        }
    },
    actualTheme: {
        borderBottom: '1px solid #ededed',
        borderTop: '1px solid #ededed',
        padding: '10px',
        '& a': {
            display: 'block',
            color: 'inherit',
            textDecoration: 'none',
        },
        '&:hover': {
            backgroundColor: '#f2f2f2',
            cursor: 'pointer'
        },
        '& small': {
            color: 'gray'
        },
    },
    readUser: {
        display: 'flex',
        borderBottom: '1px solid #ededed',
        borderTop: '1px solid #ededed',
        padding: '10px',
        justifyContent: 'space-between',
        alignItems: 'center',
        '& svg': {
            fontSize: 30
        },
        '&:hover': {
            backgroundColor: '#f2f2f2',
            cursor: 'pointer'
        },
    },
    readUserInfo: {
        display: 'flex',
        alignItems: 'center',
    },
    readUserAvatar: {
        marginRight: 15
    },
    
  }));