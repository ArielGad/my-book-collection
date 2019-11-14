export const getSingleBookDetails = (props) => props.bookDetails;

export const getFilteredBooks = (state) => {
    return (
        state.booksReducer.books.filter(book =>
        book.title.toLowerCase()
            .includes(state.booksReducer.searchContentValue) ||
        book.author.toLowerCase()
            .includes(state.booksReducer.searchContentValue))
    )
};

export const needToDisplayLoader = (state) => state.loadingReducer;