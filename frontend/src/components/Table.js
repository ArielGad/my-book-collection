import React, {Component} from "react";
import Button from './Button'

class Table extends Component {

    render() {
        const {books, onDeleteBookHandle} = this.props;
        return (
            <table className="highlight">
                <thead className="table-header">
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Language</th>
                    <th>Date Published</th>
                </tr>
                </thead>

                <tbody>
                {books.map(book =>
                    <tr key={book.id}>
                        <td><a href={book.wiki_link} target="_blank" rel="noopener noreferrer">{book.title}</a></td>
                        <td>{book.author}</td>
                        <td>{book.language}</td>
                        <td>{book.date_published}</td>
                        <td>{<Button onClick={() => onDeleteBookHandle(book.id)}>Delete Book</Button>}</td>

                    </tr>)}
                </tbody>

            </table>
        );
    }
}
export default Table;