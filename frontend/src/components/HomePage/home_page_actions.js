import { DELETE_TASK, UPDATE_TASK_STATUS, ADD_TASK, SEARCH_TASK, GET_TASKS } from '../../constants'
import { ROOT_URL } from '../../constants'
export const getTodos = (id) => {
    return (dispatch) => {

        const options = { method: "GET" }

        fetch(`${ROOT_URL}/todo/${id}`, options)
            .then(response => response.json()
                .then(data => dispatch(
                    {
                        type: GET_TASKS,
                        payload: data,
                    })
                    , (err) => console.log(err))
                , (err) => console.log(err));

    }
}
export const addTodos = (task, id) => {
    return (dispatch) => {

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ task })
        }

        fetch(`${ROOT_URL}/todo/${id}`, options)
            .then(response => response.json()
                .then(data => dispatch(
                    {
                        type: ADD_TASK,
                        payload: data,
                    })
                ))

    }
}

export const deleteTodos = (taskid) => {
    return (dispatch) => {

        const options = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ taskid })

        }
        fetch(`${ROOT_URL}/todo/delete`, options)
            .then(response => response.json()
                .then(data => dispatch(
                    {
                        type: DELETE_TASK,
                        payload: data,
                    })
                ))

    }
}
export const toggleTodos = (id, taskid) => {
    return (dispatch) => {

        const options = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ taskid })
        }

        fetch(`${ROOT_URL}/todo/${id}`, options)
            .then(response => response.json()
                .then(data => dispatch(
                    {
                        type: UPDATE_TASK_STATUS,
                        payload: data,
                    })

                ))
    }
}
export const searchTask = (query) => {
    return {
        type: SEARCH_TASK,
        payload: { query }
    }
}