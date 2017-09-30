const initialState = {
  books: []
};

function bookshelfReducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_BOOK':
      return Object.assign({}, state, {
        books: [].concat(
          action.payload,
          state.books
        )
      });

    case 'REMOVE_BOOK':
      return Object.assign({}, state, {
        books: state.books.filter(
          (book, index) => index != action.payload.index 
        )
      });

    default:
      return state;
  }
};

export default bookshelfReducer;