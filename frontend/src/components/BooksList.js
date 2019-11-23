import React, { useState } from "react";
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
import CircularProgress from "@material-ui/core/CircularProgress";
import {getFilteredBooks, needToDisplayLoader} from '../selectors/selectors';
import _ from 'lodash';
import SwapVertIcon from '@material-ui/icons/SwapVert';
import PropTypes from 'prop-types';


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

    const SORT_OPTIONS = {
        NONE: list => list,
        TITLE: list => _.orderBy(list, [item => item.title.toLowerCase()], [!needToReverseSort ? 'asc': 'desc']),
        AUTHOR: list => _.orderBy(list, [item => item.author.toLowerCase()], [!needToReverseSort ? 'asc': 'desc']),
        DATE_PUBLISHED: list => _.orderBy(list, [item => item.date_published], [!needToReverseSort ? 'asc': 'desc']),
    };


    const onSort = (sortByColumn) => {
        setNeedToReverseSort(sortBy === sortByColumn && !needToReverseSort);
        setSortBy(sortByColumn);
    };

    // sort columns related
    const [sortBy, setSortBy] = useState('NONE');
    const [needToReverseSort, setNeedToReverseSort] = useState(false);

    const classes = useStyles();
    const {books, deleteBook, isFetching} = props;
    const sortedBooks = SORT_OPTIONS[sortBy](books);

    return (
        <Paper className={classes.root}>
            <div className={classes.tableWrapper}>
                {isFetching ?
                    <CircularProgress size={60} style={{ marginLeft:660, padding:100 }}/>
                    :
                    <Table stickyHeader aria-label="sticky table">
                        {/*TODO: extract TableCell into its own component*/}
                        <TableHead>
                            <TableRow>
                                <TableCell onClick={() => onSort('TITLE')}><strong>Title</strong><SwapVertIcon fontSize="small" color="primary" /></TableCell>
                                <TableCell onClick={() => onSort('AUTHOR')} align="right"><strong>Author</strong><SwapVertIcon fontSize="small" color="primary" /></TableCell>
                                <TableCell align="right"><strong>Language</strong></TableCell>
                                <TableCell onClick={() => onSort('DATE_PUBLISHED')} align="right"><strong>Date Published</strong><SwapVertIcon fontSize="small" color="primary" /></TableCell>
                                <TableCell align="right"><strong>Delete Book</strong></TableCell>
                                <TableCell align="left"><strong>Edit Book</strong></TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {sortedBooks.map(book =>
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
                </Table>}
            </div>
        </Paper>
    );
}

function mapStateToProps(state) {
    return {books: getFilteredBooks(state),
            isFetching: needToDisplayLoader(state)};
}

function mapDispatchToProps(dispatch) {
    return {deleteBook: (bookId) => dispatch(deleteBook(bookId)),}
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);

BooksList.propTypes = {
    books: PropTypes.array,
    deleteBook: PropTypes.func,
    isFetching: PropTypes.bool,
};
