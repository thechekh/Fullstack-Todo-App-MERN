import {combineReducers} from 'redux'
import taskReducer from './tasks'
import searchReducer from './search'
import authReducer from './auth'


export default combineReducers({
    authentication:authReducer,
    tasks:taskReducer,
    query: searchReducer,
})

