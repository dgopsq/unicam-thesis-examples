import Backbone from 'backbone';
import BookModel from './BookModel';
import dispatcher from '../dispatcher';

import bookshelfDb from '../../../db.json';

const BookshelfCollection = Backbone.Collection.extend({
  model: BookModel,

  initialize: function() {
    this.on('update', this.onUpdate);
  },
  
  onUpdate: function(bookshelf) {
    // Dispatch a global event
    dispatcher.trigger('updatedBookshelf', bookshelf);
  },
});

// We need a pre-populated singleton
const BCInstance = new BookshelfCollection();
BCInstance.add(bookshelfDb);

export default BCInstance;
