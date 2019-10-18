import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';


const useStyles = makeStyles(theme => ({
    fab: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

export default function AddButton(props) {
    const classes = useStyles();
    return (
        <Tooltip title="Add new book">
            <Fab onClick={props.onClick}
                 color="primary"
                 aria-label="add"
                 className={classes.fab}>
                <AddIcon/>
            </Fab>
        </Tooltip>
    );
}