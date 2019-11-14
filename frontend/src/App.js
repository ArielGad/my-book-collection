import React, {Component} from 'react';

import BooksList from './components/BooksList'
import Navbar from './components/layout/Navbar'
import AddButton from './components/buttons/AddButton'
import { connect } from 'react-redux'
import {loadBooksFromServer} from './actions/index'


class App extends Component {

    componentDidMount(){
        this.props.loadBooksFromServer();
    }

    render() {
        return (
            <div>
                <Navbar/>
                <AddButton/>
                <BooksList/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadBooksFromServer: () => dispatch(loadBooksFromServer())
    };
};

export default connect(null, mapDispatchToProps)(App);
