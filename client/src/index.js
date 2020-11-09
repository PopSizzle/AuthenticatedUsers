import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import reducer from './redux';

const store = configureStore({
  reducer,
});

ReactDOM.render(
  <Provider>
    <Router>
    <App />
  </Router>
  </Provider>,
  document.getElementById('root')
);
