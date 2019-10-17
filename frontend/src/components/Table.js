import React, {Component} from "react";
import Button from './Button'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const classes = {
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
};

class TableARIEL extends Component {
    render() {

        const {books, onDeleteBookHandle} = this.props;
        return (
            <Paper className={classes.root}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell align="right">Author</TableCell>
                            <TableCell align="right">Language</TableCell>
                            <TableCell align="right">Date Published</TableCell>
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
                                <TableCell align="right">{<Button onClick={() => onDeleteBookHandle(book.id)}>Delete
                                    Book</Button>}</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}
export default TableARIEL;