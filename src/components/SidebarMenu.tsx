import React from 'react'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { Button, Typography } from '@material-ui/core';
import { useHomeStyles } from '../pages/Home'

interface SidebarMenuProps {
    classes: ReturnType<typeof useHomeStyles>;
}


export const SidebarMenu: React.FC<SidebarMenuProps> = ({
    classes
}:SidebarMenuProps):React.ReactElement => {
    return (
        <div>
            <ul className={classes.sideMenu}>
                <li>
                    <IconButton aria-label="TwitterIcon">
                        <SearchIcon  />
                    </IconButton>
                    <Typography variant="h6">Search</Typography>
                </li>
                <li>
                    <IconButton aria-label="TwitterIcon">
                        <NotificationsNoneIcon />
                    </IconButton>
                    <Typography variant="h6">Уведомления</Typography>
                </li>
                <li>
                    <IconButton aria-label="TwitterIcon">
                        <MailOutlineIcon/>
                    </IconButton>
                    <Typography variant="h6">Сообщения</Typography>
                </li>
                <li>
                    <IconButton aria-label="TwitterIcon">
                        <BookmarkBorderIcon/>
                    </IconButton>
                    <Typography variant="h6">Закладки</Typography>
                </li>
                <li>
                    <IconButton aria-label="TwitterIcon">
                        <ListAltIcon />
                    </IconButton>
                    <Typography variant="h6">Список</Typography>
                </li>
                <li>
                    <IconButton aria-label="TwitterIcon">
                        <PermIdentityIcon /> 
                    </IconButton>
                    <Typography variant="h6">Профиль</Typography>
                </li>
            </ul>
            <Button 
                style={{width: '200px'}}
                onClick={() => {}} 
                color="primary" 
                variant="contained"
                fullWidth
                >
                Твитнуть
            </Button>
        </div>
    )
}
