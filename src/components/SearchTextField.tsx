import { InputBase, withStyles } from '@material-ui/core';


export const SearchtextField = withStyles((theme) => ({ 
    input: {
        fontSize: 15,
        padding: '5px 0',
    },
}))(InputBase);
