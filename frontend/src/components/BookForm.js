import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from "axios";

export default function BookForm(props) {

    const [state, setState] = useState(
        {
            author: '',
            date_published: '',
            language: '',
            title: '',
            wiki_link: '',
        }
    );

    const handleAdd = () => {
        const book_details = {
            "author": state.author,
            "date_published": state.date_published,
            "language": state.language,
            "title": state.title,
            "wiki_link": state.wiki_link,
        };

        axios.post('http://127.0.0.1:8000/api/', book_details)
            .then(() => props.onOkButtonChange())
            .catch(error => console.log('ERROR IS: ', error));

        props.handleClose();
    };

    const handleFieldsChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <div>
            <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Book Details</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        name="title"
                        onChange={handleFieldsChange}
                        margin="dense"
                        id="name"
                        label="Book Name"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        name="author"
                        onChange={handleFieldsChange}
                        margin="dense"
                        id="name"
                        label="Author"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        name="language"
                        onChange={handleFieldsChange}
                        margin="dense"
                        id="name"
                        label="Language"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        name="date_published"
                        onChange={handleFieldsChange}
                        margin="dense"
                        id="name"
                        label="Published Date"
                        type="text"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleAdd} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}