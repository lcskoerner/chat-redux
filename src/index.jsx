// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';
import App from './components/app';
import '../assets/stylesheets/application.scss';
import messagesReducer from './reducers/messages_reducer';
import selectedChannelReducer from './reducers/selected_channel_reducer';
import currentUserNameReducer from './reducers/current_username_reducer';

// State and reducers

const identityReducer = (state = null) => state;

const initialState = {
  messages: [],
  channels: ['general', 'react', 'paris'],
  selectedChannel: 'general',
  currentUserName: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`,
};

const reducers = combineReducers({
  messages: messagesReducer,
  channels: identityReducer,
  selectedChannel: selectedChannelReducer,
  currentUserName: currentUserNameReducer
});

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(reduxPromise, logger));
const store = createStore(reducers, initialState, middlewares);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
