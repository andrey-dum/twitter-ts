import React from 'react'
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import RepeatIcon from '@material-ui/icons/Repeat';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import { Avatar } from '@material-ui/core';
import { useHomeStyles } from '../pages/Home/theme'
import { withStyles, } from '@material-ui/core/styles';

interface TweetProps {
    classes: ReturnType<typeof useHomeStyles>;
    text: string;
    user: {
        fullname: string;
        username: string;
        avatarUrl: string;
    };
}

const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }))(Badge);

export const Tweet: React.FC<TweetProps> = ({
     classes, 
     user, 
     text 
    }: TweetProps):React.ReactElement => {

    return (
        <div className={classes.tweet}>
            <Avatar 
                src={user.avatarUrl} 
                alt={`${user.avatarUrl}`} 
            />    
            <div className={classes.tweetBody}>
                <div className={classes.tweetHeaderName}>
                    <b>{user.fullname}</b> <span>@{user.username}</span>
                    <span> 1 ч</span>
                </div>
                <div>{text}</div>

                <div className={classes.btnsGroup}>
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
                </div>
            </div>
        </div>
    )
}


