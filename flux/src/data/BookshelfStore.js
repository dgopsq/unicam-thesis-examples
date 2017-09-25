import { EventEmitter } from 'events';
import ReduceStore from 'flux/utils';

import BookshelfDispatcher from './BookshelfDispatcher';
import defaultDB from '../../db.json';

const CHANGE_EVENT = 'change';

class BookshelfStore extends EventEmitter {
  constructor() {
    super();
    
    this.state = defaultDB;

    BookshelfDispatcher.register(
      this._registerActions.bind(this)
    );
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  getBooks() {
    return this.state;
  }

  _registerActions(action) {
    switch(action.type) {
      case 'ADD_BOOK':
        return this._addBook(
          action.payload.title,
          action.payload.author
        );

      case 'REMOVE_BOOK':
        return this._removeBook(
          action.payload.index
        );
    }
  }

  _addBook(title, author) {
    this.state.unshift({
      title: title,
      author: author
    });

    this.emit(CHANGE_EVENT);
  }

  _removeBook(index) {
    this.state.splice(index, 1);

    this.emit(CHANGE_EVENT);
  }
}

export default new BookshelfStore();