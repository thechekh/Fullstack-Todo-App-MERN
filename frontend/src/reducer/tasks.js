
import { DELETE_TASK, UPDATE_TASK, ADD_TASK, UPDATE_TASK_STATUS, GET_TASKS } from '../constants'



export default (state=[], action) => {
    const { type, payload } = action
    switch (type) {
        case GET_TASKS:
        return payload
        

        case DELETE_TASK:
        console.log("redsuserpayid",payload.id);
   
            return state.filter(task => task._id !== payload.id)
        case UPDATE_TASK:
            const updatedTasks = state.map(task => {

                if (task.id === payload.task.id) {
                    return { ...payload.task }
                }
                return task
            })
            return updatedTasks

        case ADD_TASK:
      
          // constnewTasks={...state,...payload}
          const newTasks = state.concat({
              _id: payload._id,
              text: payload.text,
              createdAt:payload.createdAt,
          })
          console.log(newTasks);

            return newTasks
            
      

        case UPDATE_TASK_STATUS:
            const updatedStatusTasks = state.map(task => {

                if (task.id === payload.task.id) {
                    const upTask = { ...payload.task }
                    upTask.isCompleted = !upTask.isCompleted
                    return upTask
                }
                return task
            })
            return updatedStatusTasks

        default:
            return state
    }
}