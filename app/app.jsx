import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators, createStore, applyMiddleware } from 'redux';
import { connect, Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import Deskmark from 'components/Deskmark';
import rootReducer from 'reducers';
import * as actionCreators from 'actions';

import 'bootstrap/scss/bootstrap.scss';

// create store with middlewares
const store = applyMiddleware(
  thunkMiddleware
)(createStore)(rootReducer);

// create root component based on component Deskmark
const App = connect(
  state => ({ state }),
  dispatch => ({
    actions: bindActionCreators(actionCreators, dispatch),
  })
)(Deskmark);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
