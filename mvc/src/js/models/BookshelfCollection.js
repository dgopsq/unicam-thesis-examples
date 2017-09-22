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

// Creazione e popolazione della collezione
// esportata come Singleton
const BCInstance = new BookshelfCollection();
BCInstance.add(bookshelfDb);

export default BCInstance;