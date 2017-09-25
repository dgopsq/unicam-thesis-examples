import BookshelfDispatcher from './BookshelfDispatcher';

const Actions = {
  addBook: function(title, author) {
    BookshelfDispatcher.dispatch({
      type: 'ADD_BOOK',
      payload: {
        title: title,
        author: author
      }
    });
  },

  removeBook: function(index) {
    BookshelfDispatcher.dispatch({
      type: 'REMOVE_BOOK',
      payload: {
        index: index
      }
    });
  }
};

export default Actions;