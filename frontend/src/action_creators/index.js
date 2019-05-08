import { DELETE_TASK, UPDATE_TASK, ADD_TASK, SEARCH_TASK, GET_TASKS, userConstants } from '../constants'


export function getTodos(id) {

    return function action(dispatch) {

        const options = { method: "GET" }


        fetch(`http://localhost:4002/todo/${id}`, options)
             .then(response => response.json()
             .then(data => dispatch(
                 {
                    type: GET_TASKS,
                    payload: data,
                })))
            
    }
}
/* export function fetchTodos(){
	return function(dispatch){
		axios.get(`${ROOT_URL}/todos`, 
			{ headers: { Authorization: localStorage.getItem('token') } })
		.then(response => {
			dispatch({ type: FETCH_TODOS, payload: response });
		})
		.catch(() => {	
			console.log('error');
		})
	}	
} */
export function addTodos(task, id) {
console.log(task,id);
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

/* export function addTodo(todo){
	return function(dispatch){
		axios.post(`${ROOT_URL}/todo`, { text: todo }, 
			{ headers: { Authorization: localStorage.getItem('token') } })
		.then(response => {
			dispatch({ type: ADD_TODO, payload: response })
		})
		.catch(() => {	
			console.log('error');
        })
    }
} */
	
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
   
    return function action(dispatch) {

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ taskid })
        }

        fetch(`http://localhost:4002/${id}/complete`, options)
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