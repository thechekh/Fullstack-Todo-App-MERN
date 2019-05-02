import { DELETE_TASK, UPDATE_TASK, ADD_TASK, UPDATE_TASK_STATUS, SEARCH_TASK, GET_TASKS } from '../constants'
export const getTodos = function () {
    return async function (dispatch) {
        const options = {method: "GET"}

        try {
            const res = await fetch(`http://localhost:4000/`, options);
            return dispatch({
                type: GET_TASKS,
                payload: res.data
            });
        }
        catch (err) {
            return console.log(err);
        }
    }
}
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