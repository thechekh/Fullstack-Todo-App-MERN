import {combineReducers} from 'redux'
import taskReducer from './tasks'
import searchReducer from './search'


export default combineReducers({
    tasks: taskReducer,
    query: searchReducer
})