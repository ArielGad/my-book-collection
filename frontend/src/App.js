import React, {Component} from 'react';

import axios from 'axios';

import Table from './components/Table'


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
