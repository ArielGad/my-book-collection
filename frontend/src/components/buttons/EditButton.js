import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from '@material-ui/core/Tooltip';
import EditBookDetailsForm from '../forms/EditBookDetailsForm';

const useStyles = makeStyles(theme => ({
    fab: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));



export default function EditButton(props) {
    const classes = useStyles();

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const [open, setOpen] = useState(false);
    return (
        <Tooltip title="Edit fields">
            <Fab size="small" color="secondary" aria-label="edit" className={classes.fab}>
                <EditIcon onClick={() => handleOpen()}/>
                <EditBookDetailsForm
                    open={open}
                    handleClose={handleClose}
                    bookDetails={props.bookDetails}
                />
            </Fab>
        </Tooltip>
    );
}
