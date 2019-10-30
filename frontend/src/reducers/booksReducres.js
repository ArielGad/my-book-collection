import {ADD_BOOK, GET_BOOKS, DELETE_BOOK, EDIT_BOOK, SEARCH_CONTENT} from '../actions/types'

const initialState = {
    books: [],
    searchContentValue: '',
};

const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BOOKS:
            return {
                ...state,
                books: action.payload
            };

        case ADD_BOOK:
            return {
                ...state,
                books: state.books.concat(action.payload),
            };

        case DELETE_BOOK:
            return {
                ...state,
                books: state.books.filter(book => book.id !== action.payload),
            };

        case EDIT_BOOK:
            const notEditedBooks = state.books.filter(book => book.id !== action.payload.id);
            return {
                ...state,
                books: notEditedBooks.concat(action.payload),
            };
        case SEARCH_CONTENT:
            return {
                ...state,
                searchContentValue: action.payload.toLowerCase(),
            };

        default:
            return state
    }
};

export default booksReducer