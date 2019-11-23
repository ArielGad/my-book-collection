import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {editBook} from '../../actions/index';
import { connect } from 'react-redux';
import {getSingleBookDetails} from '../../selectors/selectors'
import PropTypes from 'prop-types';


function EditBookDetailsForm(props){
    // Need to isolate id from state, since we don't want an ID as a field
    const bookId = props.bookDetails.id;
    const propsWithoutId = Object.assign({}, props.bookDetails);
    delete propsWithoutId.id;

    const [state, setState] = useState(propsWithoutId);

    const handleOnChange = (event) => {
         setState({
             ...state,
             [event.target.name]: event.target.value,
         });
    };

    const onSaveChangesHandle = () => {
        props.editBook(bookId, state);
        props.handleClose();
    };

    return (
        <div>
            <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Edit Fields</DialogTitle>
                <DialogContent>
                    {Object.entries(state).map(([key, val]) => <TextField key={key}
                        autoFocus
                        margin="dense"
                        id="name"
                        type="text"
                        name={key}
                        label={key}
                        value={val}
                        onChange={handleOnChange}
                        fullWidth
                    />)}
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={onSaveChangesHandle} color="primary">
                        Save Changes
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        bookDetails: getSingleBookDetails(ownProps)
    }
};

function mapDispatchToProps(dispatch) {
    return {
        editBook: (bookId, newFieldValues) => dispatch(editBook(bookId, newFieldValues))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditBookDetailsForm);

EditBookDetailsForm.propTypes = {
    open: PropTypes.func,
    handleClose: PropTypes.func,
};