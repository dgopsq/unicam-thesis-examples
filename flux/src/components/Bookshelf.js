import React from 'react';

import Navbar from './Navbar';
import AddForm from './AddForm';
import Counter from './Counter';
import BooksGrid from './BooksGrid';

import BookshelfStore from '../data/BookshelfStore';
import BookshelfActions from '../data/BookshelfActions';

class Bookshelf extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: BookshelfStore.getBooks() 
    };
  }

  componentWillMount() {
    BookshelfStore.addChangeListener(this._onChange.bind(this));
  }

  render() {
    return (
      <div>
        <Navbar>Bookshelf</Navbar>

        <div className="u-mt1">
          <AddForm onAddBook={this._handleAddBook} />
        </div>

        <div className="u-mt1">
          <Counter count={this.state.books.length} />
        </div>

        <div className="u-mt3">
          <BooksGrid
            onRemoveBook={this._handleRemoveBook}
            books={this.state.books} />
        </div>

        <footer className="u-mt1"></footer>
      </div>
    )
  }

  _onChange() {
    this.setState({ 
      books: BookshelfStore.getBooks() 
    });
  }

  _handleAddBook(title, author) {
    BookshelfActions.addBook(title, author);
  }

  _handleRemoveBook(index) {
    BookshelfActions.removeBook(index);
  }
}

export default Bookshelf;
