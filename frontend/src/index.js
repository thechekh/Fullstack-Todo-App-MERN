import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import HomePage from './components/HomePage'
import Todo from './components/Todo/index';
import registerServiceWorker from './registerServiceWorker';
import store from './store/index'
import {Provider} from 'react-redux'
import MainApp from './components/MainApp';


ReactDOM.render(
    <Provider store={store}>
        <Todo />
       { <MainApp/>}
    </Provider>  ,  
    document.getElementById('root'));
registerServiceWorker();
