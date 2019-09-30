import React, {Component} from "react";


class Table extends Component {
    render() {
        const {books} = this.props;
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

                    </tr>)}
                </tbody>

            </table>
        );
    }
}
export default Table;