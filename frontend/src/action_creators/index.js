import { DELETE_TASK, UPDATE_TASK, ADD_TASK, UPDATE_TASK_STATUS, SEARCH_TASK, GET_TASKS } from '../constants'

export function getTodos() {

    return function action(dispatch) {

        const options = { method: "GET" }


        fetch(`http://localhost:4000/`, options).then(response =>
            response.json().then(data => dispatch(
                {
                    type: GET_TASKS,
                    payload: data,
                })
            ))
    }
}
export function addTodos(text) {

    return function action(dispatch) {

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text })
        }

        fetch(`http://localhost:4000/`, options).
            then(response => response.json().then(data => dispatch(
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

        fetch(`http://localhost:4000/${id}`, options).
            then(response => response.json().then(data => dispatch(
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

        fetch(`http://localhost:4000/${id}/complete`, options).
            then(response => response.json().then(data => dispatch(
                {
                    type:UPDATE_TASK_STATUS,
                    payload: data,
                })
            ))

    }
}



/* response.json().then((response)=>console.log(response) */

/*   .then(data => dispatch(
      {
          type: ADD_TASK,
          payload: data,
      })
  )) */


/* function(response) {  
      if (response.status !== 200) {  
        console.log('err. status code: ' +  
          response.status);  
        return;  
      }
      response.json().then(function(data) {  
        console.log(data); 
        return data; 
      });  
    }   */

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