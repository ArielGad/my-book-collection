import axios from "axios";
import {GET_BOOKS, ADD_BOOK, DELETE_BOOK, EDIT_BOOK, SEARCH_CONTENT} from "../actions/types";


export function loadBooksFromServer() {
    return function(dispatch){
        const url = 'http://127.0.0.1:8000/api/';
        return axios.get(url)
            .then(res => {dispatch({type: GET_BOOKS, payload: res.data})
        });
    };
}

export function postBookToServer(book_details) {
    return function (dispatch) {
        return axios.post('http://127.0.0.1:8000/api/', book_details)
            .then(res => {dispatch({type: ADD_BOOK, payload: res.data})})
            .catch(error => console.log('ERROR IS: ', error));


    }
}

export function deleteBook(bookId) {
    return function (dispatch) {
        const command = `http://127.0.0.1:8000/api/${bookId}/`;
        return axios.delete(command)
            .then(() => {dispatch({type: DELETE_BOOK, payload: bookId})})

    }
}

export function editBook(bookId, newFieldValues) {
    return function (dispatch) {
        const command = `http://127.0.0.1:8000/api/${bookId}/`;
        return axios.put(command, newFieldValues)
            .then(res => {dispatch({type: EDIT_BOOK, payload:res.data})})

    }

}

export function searchContent(contentToSearch) {
    return {
        type: SEARCH_CONTENT,
        payload: contentToSearch,
    }
    
}