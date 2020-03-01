import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootRedcuer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootRedcuer, applyMiddleware(...middlewares));

export default store;