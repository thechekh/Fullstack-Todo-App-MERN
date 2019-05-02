import {DELETE_TASK, UPDATE_TASK, ADD_TASK, UPDATE_TASK_STATUS, SEARCH_TASK} from '../constants'

export function deleteTask(id) {
    return {
        type: DELETE_TASK,
        payload: { id }
    }
}

export function updateTask(task) {
    return {
        type: UPDATE_TASK,
        payload: { task },
    }
}

export function updateTaskStatus(task) {
    return {
        type: UPDATE_TASK_STATUS,
        payload: { task },
    }
}

export function addTask(text) {
    return {
        type: ADD_TASK,
        payload: { text }
    }
}


export function searchTask(query) {
    return {
        type: SEARCH_TASK,
        payload: { query }
    }
}