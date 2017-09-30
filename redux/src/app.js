// Styles
import NormalizeCSS from './css/normalize.css';
import AppCSS from './css/app.css';

// Application
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import Bookshelf from './components/Bookshelf';
import bookshelfReducer from './data/bookshelfReducer';
import defaultDB from '../db.json';

const initialState = {
  books: defaultDB
};

let store = createStore(
  bookshelfReducer,
  initialState
);

ReactDOM.render(
  <Bookshelf store={store} />,
  document.getElementById('app')
);