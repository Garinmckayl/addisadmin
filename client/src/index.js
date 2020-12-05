import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { initSagas } from './rootSaga'
import thunk from 'redux-thunk';
import { reducers } from './reducers';
import App from './app';
import './index.css';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducers, compose(applyMiddleware(sagaMiddleware,
thunk)));
  initSagas(sagaMiddleware)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);


