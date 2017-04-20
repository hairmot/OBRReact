import React from 'react';
import thunkMiddleware from 'redux-thunk'
import ReactDOM from 'react-dom';
import OBRContainer from './Components/OBRContainer';
import {createStore, applyMiddleware} from 'redux';
import Reducer from './Reducers';
import { Provider } from 'react-redux';

let store = createStore(Reducer, applyMiddleware(thunkMiddleware));
ReactDOM.render(
  <Provider store={store}>
    <OBRContainer />
  </Provider>,
  document.getElementById('root')
);
