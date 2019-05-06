import React, { Component } from 'react';
import {connect} from 'react-redux'
import './style.css';
import Task from "../Task/index";
import { getTodos } from '../../../action_creators'

class TaskList extends Component {


 componentDidMount() {
    const {todo} = this.props
     console.log(todo);
    this.props.getTodos()
} 
  render() {
      const {tasks} = this.props
console.log("taskss",tasks);
      const taskComponents = tasks.map(task =>
          <Task key={task.id} task={task}>{task.task}</Task>
      )

      return  <div className="task-list">
          {taskComponents}
      </div>

  }
}


let mapStateToProps = state => {
    if (!state.query) {
        return {
           /*  tasks: state.tasks */
          tasks:state.authentication.user.todo
        }
    }


    let foundTasks = state.tasks.filter(task => {
        if (task.text.indexOf(state.query) !== -1) {
            return task
        }
        return false
    })
    return {
        tasks: foundTasks
    }
}

export default connect(mapStateToProps,{getTodos})(TaskList);