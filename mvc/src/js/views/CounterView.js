import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

const CounterView = Backbone.View.extend({
  tagName: 'div',
  className: 'c-heading c-heading--1 u-txcenter',

  template: _.template($('#js-counter-template').html()),

  initialize: function() {
    this.listenTo(this.collection, 'change', this.render);
  },

  render: function() {
    this.$el.html(this.template({ count: this.collection.length }));
    return this; 
  }
});

export default CounterView;
