import React from 'react'
import { IconButton } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router-dom';

export const BackButton: React.FC = ():React.ReactElement => {
    const history = useHistory()
    
    const handleClick = (): void => {
        history.goBack()
    }

    return (
        <IconButton color="primary" onClick={handleClick}>
            <ArrowBackIcon/>
        </IconButton>
    )
}
