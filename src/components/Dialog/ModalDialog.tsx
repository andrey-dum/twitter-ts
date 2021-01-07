import React from 'react'

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

interface ModalProps {
    title: string;
    children: React.ReactNode;
    //handleClickOpen: () => void;
    handleClose: () => void;
    open?: boolean | undefined;
}


export const ModalDialog: React.FC<ModalProps> = ({ title, children, handleClose, open=false}: ModalProps): React.ReactElement =>{


    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">{title}</DialogTitle>
            {children}
        </Dialog>
    )
}
