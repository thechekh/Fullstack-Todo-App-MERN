import { DELETE_TASK, UPDATE_TASK_STATUS, UPDATE_TASK, ADD_TASK, SEARCH_TASK, GET_TASKS } from '../constants'
export function getTodos(id) {

    return function action(dispatch) {

        const options = { method: "GET" }

        fetch(`http://localhost:4002/todo/${id}`, options)
            .then(response => response.json()
                .then(data => dispatch(
                    {
                        type: GET_TASKS,
                        payload: data,
                    })
                )
            )

    }
}
export function addTodos(task, id) {
    console.log(task, id);
    return function action(dispatch) {

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ task })
        }

        fetch(`http://localhost:4002/todo/${id}`, options)
            .then(response => response.json().then(data => dispatch(
                {
                    type: ADD_TASK,
                    payload: data,
                })
            ))

    }
}


export function deleteTodos(id, taskid) {
    console.log("taskkkk", taskid, "idkkkkk", id);
    return function action(dispatch) {

        const options = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ taskid })

        }
        fetch(`http://localhost:4002/todo/${id}`, options)
            .then(response => response.json().then(data =>
                dispatch(
                    {
                        type: DELETE_TASK,
                        payload: data,
                    })
            ))

    }
}

export function toggleTodos(id, taskid) {
    console.log("taskide", taskid);
    return function action(dispatch) {

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ taskid })
        }

        fetch(`http://localhost:4002/todo/toggle/${id}`, options)
            .then(response => response.json().
                then(data => dispatch(
                    {
                        type: UPDATE_TASK_STATUS,
                        payload: data,
                    })

                ))
    }
}
export function searchTask(query) {
    return {
        type: SEARCH_TASK,
        payload: { query }
    }
}