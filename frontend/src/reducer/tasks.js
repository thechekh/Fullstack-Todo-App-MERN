
import { DELETE_TASK, UPDATE_TASK, ADD_TASK, UPDATE_TASK_STATUS, GET_TASKS } from '../constants'



export default (state=[], action) => {
    const { type, payload } = action
    switch (type) {
        case GET_TASKS:
        return payload;
      

        case DELETE_TASK:
        console.log("redsuserpayid",payload.id);
   

            const newState= state.filter(task => task._id !== payload.id)
            console.log(newState);
            return newState
        case UPDATE_TASK:
            const updatedTasks = state.map(task => {

                if (task.id === payload.task.id) {
                    return { ...payload.task }
                }
                return task
            })
            return updatedTasks

        case ADD_TASK:
      
         
          const newTasks = state.concat({
              user:payload.user,
              _id: payload._id,
            text: payload.text,
              completed:false,
          })
          console.log(newTasks);

            return newTasks
            
      

        case UPDATE_TASK_STATUS:
            const updatedStatusTasks = state.map(task => {

                if (task._id === payload._id) {
                    const newtask = { ...payload }
                    newtask.isCompleted = !newtask.isCompleted
                    return newtask
                }
                return task
            })
            return updatedStatusTasks

        default:
            return state
    }
}