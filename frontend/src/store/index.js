import {createStore} from 'redux'
import reducer from '../reducer/index'

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

//dev only
window.store = store

export default store