//dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

//imports
import App from './App';
import RootReducer from './rootReducer'

//middleware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//store
const store = createStore, composeEnhancers

ReactDOM.render(<App />, document.getElementById('root'));

