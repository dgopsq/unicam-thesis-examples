// Styles
import NormalizeCSS from './css/normalize.css';
import AppCSS from './css/app.css';

// Application
import React from 'react';
import ReactDOM from 'react-dom';

import Bookshelf from './components/Bookshelf';

ReactDOM.render(
  <Bookshelf />,
  document.getElementById('app')
);