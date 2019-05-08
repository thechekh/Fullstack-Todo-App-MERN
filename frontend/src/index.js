import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from './store/index'
import {Provider} from 'react-redux'
import MainApp from './components/MainApp';

ReactDOM.render(
    <Provider store={store}>
        <MainApp/>
    </Provider>  ,  
    document.getElementById('root'));
registerServiceWorker();
