import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from 'prop-types';


const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));


function DeleteButton(props) {
    const classes = useStyles();
    return (
        <Tooltip title="Delete book">
            <IconButton onClick={props.onClick} className={classes.button} aria-label="delete">
                <DeleteIcon/>
            </IconButton>
        </Tooltip>
    );
}

DeleteButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default DeleteButton