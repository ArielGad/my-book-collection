import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddButton from './buttons/AddButton'
import axios from "axios";

export default function BookForm(props) {
    const [open, setOpen] = useState(false);
    const [bookName, setBookName] = useState('');
    const [author, setAuthor] = useState('');
    const [language, setLanguage] = useState('');
    const [publishedDate, setPublishedDate] = useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAdd = () => {
        const book_details = {
            "author": author,
            "date_published": publishedDate,
            "language": language,
            "title": bookName,
            "wiki_link": ""
        };

        axios.post('http://127.0.0.1:8000/api/', book_details)
            .then(response => props.onOkButtonChange([response.data]))
            .catch(error => console.log('ERROR IS: ', error));

        handleClose();
    };

    const handleBookNameChange = (event) => {
        setBookName(event.target.value)
    };

    const handleAuthorNameChange = (event) => {
        setAuthor(event.target.value)
    };


    const handleLanguageChange = (event) => {
        setLanguage(event.target.value)
    };


    const handlePublishedDateChange = (event) => {
        setPublishedDate(event.target.value)
    };


    return (
        <div>
            <AddButton onClick={handleClickOpen}/>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Book Details</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        onChange={handleBookNameChange}
                        value={bookName}
                        margin="dense"
                        id="name"
                        label="Book Name"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        onChange={handleAuthorNameChange}
                        value={author}
                        margin="dense"
                        id="name"
                        label="Author"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        onChange={handleLanguageChange}
                        value={language}
                        margin="dense"
                        id="name"
                        label="Language"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        onChange={handlePublishedDateChange}
                        value={publishedDate}
                        margin="dense"
                        id="name"
                        label="Published Date"
                        type="text"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
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