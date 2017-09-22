import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

import BookView from './BookView';
import dispatcher from '../dispatcher'

const BookshelfView = Backbone.View.extend({
  el: '#js-bookshelf',

  events: {
    'click .js-remove': 'removeBook'
  },

  initialize: function() {
    dispatcher.on('updatedBookshelf', this.render.bind(this));
  },

  createGridItem: function(book) {
    const container = $('<div>', { 
      'class': 'c-grid__item c-faderemove' 
    });

    const deleteBox = $('<a>', { 
      'class': 'c-faderemove__target js-remove', 
      'data-cid': book.cid 
    });

    const view = new BookView({ model: book });
    
    container.append(view.render().el);
    container.append(deleteBox);

    return container;
  },

  render: function() {
    this.$el.html('');

    this.collection.each((book) => {
      const bookElement = this.createGridItem(book);
      this.$el.append(bookElement);
    });
    return this;
  },

  removeBook: function(e) {
    const cid = e.target.dataset.cid;
    this.collection.remove(cid);
  }
});

export default BookshelfView;