import React from 'react';
import thunkMiddleware from 'redux-thunk'
import ReactDOM from 'react-dom';
import App from './Components/App';
import {createStore, applyMiddleware} from 'redux';
import Reducer from './Reducers';
import { Provider } from 'react-redux';

let store = createStore(Reducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
