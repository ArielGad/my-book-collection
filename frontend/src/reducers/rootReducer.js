import { combineReducers } from 'redux';
import booksReducer from './booksReducres'
import loadingReducer from './loadingReducer'

export default combineReducers({
    booksReducer,
    loadingReducer,
});