import Backbone from 'backbone';
import $ from 'jquery';

import BookshelfView from './BookshelfView';
import CounterView from './CounterView';
import bookshelfCollection from '../models/BookshelfCollection';

const AppView = Backbone.View.extend({
  el: '#app',

  events: {
    'click #book-submit': 'createBook'
  },

  initialize: function() {
    this.$list = $('#js-bookshelf');
    this.$counter = $('#js-counter');

    this.$formtitle = $('#book-title');
    this.$formauthor = $('#book-author');
    this.$formsubmit = $('#book-submit');

    this.render();
  },

  createBook: function() {
    const newBook = {
      title: this.$formtitle.val(),
      author: this.$formauthor.val()
    };

    if(!newBook.title || !newBook.author) {
      return false;
    }

    bookshelfCollection.add(newBook);
  },

  render: function() {
    const Bookshelf = new BookshelfView({ 
      collection: bookshelfCollection 
    });

    const Counter = new CounterView({
      collection: bookshelfCollection
    });

    this.$list.append(Bookshelf.render().el);
    this.$counter.append(Counter.render().el);
  },
});

export default AppView;