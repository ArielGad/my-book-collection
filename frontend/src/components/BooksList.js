import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteButton from './buttons/DeleteButton';
import EditButton from './buttons/EditButton';
import {connect} from 'react-redux';
import {deleteBook} from '../actions/index';

const useStyles = makeStyles({
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    tableWrapper: {
        maxHeight: 440,
        overflow: 'auto',
    },
});


function BooksList(props) {
    const classes = useStyles();
    const {books, deleteBook} = props;
    return (
        <Paper className={classes.root}>
            <div className={classes.tableWrapper}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell><strong>Title</strong></TableCell>
                            <TableCell align="right"><strong>Author</strong></TableCell>
                            <TableCell align="right"><strong>Language</strong></TableCell>
                            <TableCell align="right"><strong>Date Published</strong></TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {books.map(book =>
                            <TableRow key={book.id}>
                                <TableCell component="th" scope="row"><a href={book.wiki_link} target="_blank"
                                                                         rel="noopener noreferrer">{book.title}</a></TableCell>
                                <TableCell align="right">{book.author}</TableCell>
                                <TableCell align="right">{book.language}</TableCell>
                                <TableCell align="right">{book.date_published}</TableCell>
                                <TableCell align="right">{<DeleteButton
                                    onClick={() => deleteBook(book.id)}/>}</TableCell>
                                <TableCell align="left">{<EditButton bookDetails={book}/>}</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </Paper>
    );
}

function mapStateToProps(state) {
    return {books: state.booksReducer.books.filter(book =>
            book.title.toLowerCase()
                .includes(state.booksReducer.searchContentValue) ||
            book.author.toLowerCase()
                .includes(state.booksReducer.searchContentValue))};
}

function mapDispatchToProps(dispatch) {
    return {deleteBook: (bookId) => dispatch(deleteBook(bookId)),}
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);