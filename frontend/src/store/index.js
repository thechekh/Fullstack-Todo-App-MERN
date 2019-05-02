import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer/index'
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const store = createStore(
    reducer,
    composeEnhancers(
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
    ))
);export default store