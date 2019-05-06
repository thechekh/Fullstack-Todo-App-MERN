import {combineReducers} from 'redux'
import taskReducer from './tasks'
import searchReducer from './search'
import registerReducer from './register'
import authReducer from './auth'


export default combineReducers({
    authentication:authReducer,
    register:registerReducer,
    tasks:taskReducer,
    query: searchReducer,
})