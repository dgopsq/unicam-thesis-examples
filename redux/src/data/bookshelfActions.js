const addBook = (title, author) => ({
  type: 'ADD_BOOK',
  payload: {
    title: title,
    author: author
  }
});

const removeBook = (index) => ({
  type: 'REMOVE_BOOK',
  payload: {
    index: index
  }
});

export {
  addBook,
  removeBook
};