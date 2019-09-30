import React, {Component} from 'react';
import './App.css';
import axios from 'axios';


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


class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            books: [],
            error: null,
        };
    }


    componentDidMount(){
        const url = 'http://127.0.0.1:8000/api/';
        axios(url)
            .then(result => this.setState({books:result.data}))
            .catch(error => this.setState({error}));
    }

    render() {
        const {books} = this.state;
        return (
            <div className="page">
                <Table books={books}/>
            </div>
        );
    }
}

export default App;
