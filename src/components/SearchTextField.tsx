import { InputBase, withStyles } from '@material-ui/core';
import React from 'react'


export const SearchtextField = withStyles((theme) => ({ 
    input: {
        fontSize: 15,
        padding: '5px 0',
    },
}))(InputBase);
