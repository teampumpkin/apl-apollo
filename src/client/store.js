import { createStore, applyMiddleware, compose } from 'redux';
import AppReducers from './reducers/reducers.index';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let __DEV__;
// middleware that logs actions
const loggerMiddleware = createLogger({
  predicate: (getState, action) => __DEV__
});

let AppStore = createStore(
  AppReducers,
  {},
  composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware))
);

export default AppStore;
