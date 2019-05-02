import { DELETE_TASK, UPDATE_TASK, ADD_TASK, UPDATE_TASK_STATUS, SEARCH_TASK, GET_TASKS } from '../constants'

export function getTodos() {
    const options = { method: "GET" }



return fetch(`http://localhost:4000/`, options).then(  
        function(response) {  
      if (response.status !== 200) {  
        console.log('err. status code: ' +  
          response.status);  
        return;  
      }
      response.json().then(function(data) {  
        console.log(data); 
        return data; 
      });  
    }  
  )   
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