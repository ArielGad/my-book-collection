import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import BookForm from '../forms/BookForm'


const useStyles = makeStyles(theme => ({
    fab: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));



export default function AddButton() {

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    return (
        <Tooltip title="Add new book">
            <Fab
                 color="primary"
                 aria-label="add"
                 className={classes.fab}>
                <AddIcon onClick={() => handleOpen()}/>
                <BookForm
                    open={open}
                    handleClose={handleClose}
                />
            </Fab>
        </Tooltip>
    );
}