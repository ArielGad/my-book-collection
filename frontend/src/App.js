import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


class Table extends Component {

    render() {
        const {books} = this.props;
        return (
            <div className="table">
                <div className="table-header">
                    <span style={{width: '40%'}}>Author</span>
                    <span style={{width: '30%'}}>Title</span>
                    <span style={{width: '10%'}}>Date Published</span>
                </div>

                {books.map(book =>
                    <div key={book.id} className="table-row">
                        <span style={{width: '40%'}}>{book.author}</span>
                        <span style={{width: '30%'}}>{book.title}</span>
                        <span style={{width: '20%'}}>{book.date_published}</span>
                    </div>)}

            </div>
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
