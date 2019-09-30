import React, {Component} from "react";


class Table extends Component {
    render() {
        const {books} = this.props;
        return (
            <table className="highlight">
                <thead className="table-header">
                <tr>
                    <th>Author</th>
                    <th>Title</th>
                    <th>Date Published</th>
                </tr>
                </thead>

                <tbody>
                {books.map(book =>
                    <tr key={book.id}>
                        <td>{book.author}</td>
                        <td>{book.title}</td>
                        <td>{book.date_published}</td>
                    </tr>)}
                </tbody>

            </table>
        );
    }
}
export default Table;