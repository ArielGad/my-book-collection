import React, {Component} from 'react';

import axios from 'axios';

import TableBooks from './components/Table'
import Navbar from './components/layout/Navbar'
import BookForm from './components/BookForm'




class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            books: [],
    };
        this.handleOkButtonChange = this.handleOkButtonChange.bind(this);
        this.onDeleteBookHandle = this.onDeleteBookHandle.bind(this);
        this.loadBooksFromServer = this.loadBooksFromServer.bind(this);
    }

    onDeleteBookHandle(bookId){
        axios.delete(`http://127.0.0.1:8000/api/${bookId}/`)
            .then(() => this.loadBooksFromServer())
            .catch(error => console.log('ERROR IS: ', error));
    }

    handleOkButtonChange(newBookList){
        const oldBooks = this.state.books;
        const updatedBookList = [...oldBooks, ...newBookList];
        this.setState({books: updatedBookList})
    }

    loadBooksFromServer() {
        const url = 'http://127.0.0.1:8000/api/';
        axios(url)
            .then(result => this.setState({books: result.data}))
            .catch(error => console.error(error));
    }

    componentDidMount(){
        this.loadBooksFromServer();
    }

    render() {
        const {books} = this.state;
        return (
            <div>
                <Navbar/>
                <BookForm onOkButtonChange={this.handleOkButtonChange}/>
                <TableBooks books={books} onDeleteBookHandle={this.onDeleteBookHandle} />
            </div>
        );
    }
}

export default App;
