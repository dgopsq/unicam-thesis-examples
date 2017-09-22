import Backbone from 'backbone';
import BookModel from './BookModel';

import bookshelfDb from '../../../db.json';

const BookshelfCollection = Backbone.Collection.extend({
  model: BookModel,
});

// We need a pre-populated singleton
const BCInstance = new BookshelfCollection();
BCInstance.add(bookshelfDb);

export default BCInstance;
