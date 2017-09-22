import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

const BookView = Backbone.View.extend({
  tagName: 'div',
  className: 'c-singlebook',

  template: _.template($('#js-book-template').html()),

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

export default BookView;