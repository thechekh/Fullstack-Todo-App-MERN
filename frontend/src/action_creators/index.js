import { DELETE_TASK, UPDATE_TASK, ADD_TASK, SEARCH_TASK, GET_TASKS } from '../constants'

export function getTodos(id) {

    return function action(dispatch) {

        const options = { method: "GET" }


        fetch(`http://localhost:4001/${id}`, options)
             .then(response=>response.json().then(data => dispatch(
                {
                    type: GET_TASKS,
                    payload: data,
                })
            ))  
    }
}
export function addTodos(task,id) {

    return function action(dispatch) {

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ task,id})
        }

        fetch(`http://localhost:4001/${id}`, options)
        .then(response => response.json().then(data => dispatch(
                {
                    type: ADD_TASK,
                    payload: data,
                })
            ))

    }
}
export function deleteTodos(id) {

    return function action(dispatch) {

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
          
        }

        fetch(`http://localhost:4001/${id}`, options)
           .then(response => response.json().then(data => dispatch(
                {
                    type:DELETE_TASK,
                    payload: data,
                })
            ))

    }
}

export function toggleTodos(id) {

    return function action(dispatch) {

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
          
        }

        fetch(`http://localhost:4001/${id}/complete`, options)
            .then(response => response.json().then(data => console.log(data)/* dispatch(
                {
                    type:UPDATE_TASK_STATUS,
                    payload: data,
                }) */
            ))

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