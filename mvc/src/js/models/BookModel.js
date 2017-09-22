import Backbone from 'backbone';

const BookModel = Backbone.Model.extend({
  defaults: function() {
    return {
      title: 'No title',
      author: 'No author'
    };
  }
});

export default BookModel;