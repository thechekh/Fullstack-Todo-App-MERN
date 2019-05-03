import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Todo from './components/Todo/index';
import registerServiceWorker from './registerServiceWorker';
import store from './store/index'
import {Provider} from 'react-redux'


ReactDOM.render(
    <Provider store={store}>
        <Todo />
    </Provider>    ,
    document.getElementById('root'));
registerServiceWorker();
