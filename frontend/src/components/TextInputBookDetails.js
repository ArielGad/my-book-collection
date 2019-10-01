import React, {Component} from 'react';

import axios from 'axios';

import Button from './Button'

class TextInputBookDetails extends Component {
    constructor(props){
        super(props);

        this.state = {
            book_name: '',
            author_name: '',
            language: '',
            published_date: '',
        };

        this.handleBookNameChange = this.handleBookNameChange.bind(this);
        this.handleAuthorNameChange = this.handleAuthorNameChange.bind(this);
        this.handleLanguageChange = this.handleLanguageChange.bind(this);
        this.handlePublishedDateChange = this.handlePublishedDateChange.bind(this);
        this.postNewBookAndUpdateState = this.postNewBookAndUpdateState.bind(this);
    }

    handleBookNameChange(event){
        this.setState({book_name: event.target.value})
    }

    handleAuthorNameChange(event){
        this.setState({author_name: event.target.value})
    }


    handleLanguageChange(event){
        this.setState({language: event.target.value})
    }


    handlePublishedDateChange(event){
        this.setState({published_date: event.target.value})
    }

    postNewBookAndUpdateState(){
        const book_details = {
            "author": this.state.author_name,
            "date_published": this.state.published_date,
            "language": this.state.language,
            "title": this.state.book_name,
            "wiki_link": ""
        };

        axios.post('http://127.0.0.1:8000/api/', book_details)
            .then(response => this.props.onOkButtonChange([response.data]))
            .catch(error => console.log('ERROR IS: ', error));

        this.props.closePopup();
    }

    render() {
        return (

            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input placeholder="" id="book_name" type="text" value={this.state.book_name} onChange={this.handleBookNameChange} className="validate"/>
                                <label htmlFor="book_name" className="active">Book Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input placeholder="" id="author_name" value={this.state.author_name} onChange={this.handleAuthorNameChange} type="text" className="validate"/>
                                <label htmlFor="author_name" className="active">Author Name</label>
                        </div>

                        <div className="input-field col s6">
                            <input placeholder="" id="language" value={this.state.language} onChange={this.handleLanguageChange} type="text" className="validate"/>
                            <label htmlFor="language" className="active">Language</label>
                        </div>

                        <div className="input-field col s6">
                            <input placeholder="" id="published_date" value={this.state.published_date} onChange={this.handlePublishedDateChange} type="text" className="validate"/>
                            <label htmlFor="published_date" className="active">Published Date</label>
                        </div>
                    </div>
                </form>
                <Button onClick={() => this.postNewBookAndUpdateState()}>Ok</Button>
                <Button onClick={this.props.closePopup}>Cancel</Button>
            </div>

        );
    }
}

export default TextInputBookDetails;