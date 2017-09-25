import React from 'react';
import PropTypes from 'prop-types';

const BooksGrid = (props) => {
  const computedBooks = [];

  props.books.forEach((book, index) => {
    computedBooks.push(
      <div className="c-grid__item c-faderemove" key={index}>
        <div className="c-singlebook">
          <div className="c-singlebook__title">{book.title}</div>
          <div className="c-singlebook__author u-txright u-mt3">{book.author}</div>
        </div>
        <a className="c-faderemove__target" onClick={() => props.onRemoveBook(index)} />
      </div>
    );
  });

  return (
    <div className="c-grid">
      {computedBooks}
    </div>
  );
};

BooksGrid.propTypes = {
  books: PropTypes.array.isRequired,
  onRemoveBook: PropTypes.func.isRequired
};

export default BooksGrid;