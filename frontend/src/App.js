import React, {Component} from 'react';

import axios from 'axios';

import Table from './components/Table'
import Button from './components/Button'
import Popup from './components/Popup'


class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            books: [],
            showPopup: false,
    };

        this.togglePopup = this.togglePopup.bind(this);
        this.handleOkButtonChange = this.handleOkButtonChange.bind(this);
        this.onDeleteBookHandle = this.onDeleteBookHandle.bind(this);
        this.loadBooksFromServer = this.loadBooksFromServer.bind(this);
    }

    onDeleteBookHandle(bookId){
        axios.delete(`http://127.0.0.1:8000/api/${bookId}/`)
            .then(() => this.loadBooksFromServer())
            .catch(error => console.log('ERROR IS: ', error));
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
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
        const {books, showPopup} = this.state;
        return (
            <div >
                <Button onClick={this.togglePopup}>Add a book</Button>
                {showPopup ?
                    <Popup closePopup={this.togglePopup} onOkButtonChange={this.handleOkButtonChange}/>
                    : null
                }
                <Table books={books} onDeleteBookHandle={this.onDeleteBookHandle}/>
            </div>
        );
    }
}

export default App;
