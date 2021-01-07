import React from 'react'
import { Button, makeStyles, Typography } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import { ModalDialog } from '../components/Dialog/ModalDialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) =>({
    wrapper: {
        display: 'flex',
        height: '100vh',
    },
    blueBlock: {
        backgroundColor: '#71c9f8',
        flex: 0.5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'relative'
    },
    loginTwitterBigIcon: {
        width: '190%',
        height: '190%',
        position: 'absolute',
        left: '80%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 0
    },
    blueBlockList: {
        listStyle: 'none',
        position: 'relative',
        margin: 0,
        padding: 0,
        width: 380,
        zIndex: 10,
        '& h6': {
            display: 'flex',
            alignItems: 'center',
            color: '#fff',
            fontWeight: 700,
            fontSize: 20,
            marginBottom: 25,
            '& svg': {
                fontSize: 32,
                marginRight: 15,
            }
        },
    },
    loginBlock: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0.5,
        
    },
    
    loginTwitterIcon: {
        fontSize: 45,
    },
    loginBlockWrapper: {
        width: 380,
    },
    loginBlockTitle: {
        fontWeight: 700,
        marginTop: 15,
        marginBottom: 42,
        fontSize: 32
    },
}))

 

export const SignIn: React.FC = (): React.ReactElement => {
    const classes = useStyles()

    const [open, setOpen] = React.useState<'signIn' | 'signUp'>();

    const handleClickOpenSignIn = (): void => {
        setOpen('signIn');
    };
    const handleClickOpenSignUp = (): void => {
        setOpen('signUp');
    };

    const handleClose = (): void => {
        setOpen(undefined);
    };

    return (
        <div className={classes.wrapper}>
            <ModalDialog 
                open={open === 'signIn'} 
                title={'Войти в Твиттер'} 
                handleClose={handleClose}
            >
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="password"
                        label="Password"
                        type="password"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Отмена
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Войти
                    </Button>
                </DialogActions>
            </ModalDialog>

            <ModalDialog 
                open={open === 'signUp'} 
                title={'Создайте учетную запись'} 
                handleClose={handleClose}
            >
                 <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="password"
                        label="Password"
                        type="password"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Отмена
                    </Button>
                    <Button onClick={handleClose} color="primary" variant="contained">
                        Далее
                    </Button>
                </DialogActions>
            </ModalDialog>

            <div className={classes.blueBlock}>
                <TwitterIcon color="primary" className={classes.loginTwitterBigIcon} />
                <ul className={classes.blueBlockList}>
                    <li>
                        <Typography variant="h6">
                            <SearchIcon />
                            Читайте о том, что вам интересно.
                        </Typography>
                    </li>
                    <li>
                        <Typography variant="h6">
                            <PeopleOutlineIcon />
                            Узнайте, о чем говорят в мире.
                        </Typography>
                    </li>
                    <li>
                        <Typography variant="h6">
                            <ChatBubbleOutlineIcon />
                            Присоединяйтесь к общению.
                        </Typography>
                    </li>
                </ul>
            </div>
            <div className={classes.loginBlock}>
                <div className={classes.loginBlockWrapper}>
                    <TwitterIcon color="primary" className={classes.loginTwitterIcon} />
                    <Typography className={classes.loginBlockTitle} variant="h4">Узнайте, что происходит в мире прямо сейчас</Typography>
                    <Typography><b>Присоединяйтесь к Твиттеру прямо сейчас!</b></Typography>
                    <Button onClick={handleClickOpenSignUp} style={{marginBottom: 20, marginTop: 10}} variant="contained" color="primary" fullWidth>Зарегистрироваться</Button>
                    <Button onClick={handleClickOpenSignIn} variant="outlined" color="primary" fullWidth>Войти</Button>
                </div>
            </div>
        </div>
    )
}

