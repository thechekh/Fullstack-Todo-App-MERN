import {combineReducers} from 'redux'
import taskReducer from './tasks'
import searchReducer from './search'
import registerReducer from './register'


export default combineReducers({
    register:registerReducer,
    tasks:taskReducer,
    query: searchReducer,
})