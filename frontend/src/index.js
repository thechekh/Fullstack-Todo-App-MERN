import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoginPage from './components/LoginPage'
import Todo from './components/Todo/index';
import registerServiceWorker from './registerServiceWorker';
import store from './store/index'
import {Provider} from 'react-redux'


ReactDOM.render(
    <Provider store={store}>
        <Todo />
        <LoginPage/>
    </Provider>    ,
    document.getElementById('root'));
registerServiceWorker();
