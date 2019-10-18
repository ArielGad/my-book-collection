import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteButton from './buttons/DeleteButton'

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


function TableBooks(props) {
    const classes = useStyles();
    const {books, onDeleteBookHandle} = props;
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
                                    onClick={() => onDeleteBookHandle(book.id)}/>}</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </Paper>
    );
}

export default TableBooks;