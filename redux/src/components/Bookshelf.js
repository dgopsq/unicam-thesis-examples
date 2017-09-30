import React from 'react';
import {connect } from 'react-redux';

import Navbar from './Navbar';
import AddForm from './AddForm';
import Counter from './Counter';
import BooksGrid from './BooksGrid';

import {addBook, removeBook } from '../data/BookshelfActions';

const mapStateToProps = state => ({
  books: state.books
});

const mapDispatchToProps = dispatch => ({
  handleAddBook: (title, author) => {
    dispatch(addBook(title, author));
  },

  handleRemoveBook: index => {
    dispatch(removeBook(index));
  }
});

class Bookshelf extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar>Bookshelf</Navbar>

        <div className="u-mt1">
          <AddForm onAddBook={this.props.handleAddBook} />
        </div>

        <div className="u-mt1">
          <Counter count={this.props.books.length} />
        </div>

        <div className="u-mt3">
          <BooksGrid
            onRemoveBook={this.props.handleRemoveBook}
            books={this.props.books} />
        </div>

        <footer className="u-mt1"></footer>
      </div>
    )
  }
}

const ConnectedBookshelf = connect(
  mapStateToProps,
  mapDispatchToProps
)(Bookshelf);

export default ConnectedBookshelf;
