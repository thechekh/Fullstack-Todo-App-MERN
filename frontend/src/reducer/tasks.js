import {tasks} from '../fixtures'
import {DELETE_TASK, UPDATE_TASK, ADD_TASK, UPDATE_TASK_STATUS} from '../constants'

export default (state = tasks, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_TASK:
            return state.filter(task => task.id !== payload.id)
        case UPDATE_TASK:
            const updatedTasks = state.map(task => {

                if(task.id === payload.task.id){
                    return { ...payload.task}
                }
                return task
            })
            return updatedTasks

        case ADD_TASK:
            const lastId = state[state.length - 1].id + 1

            const newTasks = state.concat({
                id: lastId,
                task: payload.text.text,
                isCompleted: false
            })
            return newTasks

        case UPDATE_TASK_STATUS:
            const updatedStatusTasks = state.map(task => {

                if(task.id === payload.task.id){
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