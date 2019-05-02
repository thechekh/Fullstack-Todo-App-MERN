import React, { Component } from 'react';
import {connect} from 'react-redux'
import './style.css';
import Task from "../Task/index";

class TaskList extends Component {
  render() {
      const {tasks} = this.props

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
            tasks: state.tasks
        }
    }

    let foundTasks = state.tasks.filter(task => {
        if (task.task.indexOf(state.query) !== -1) {
            return task
        }
        return false
    })

    return {
        tasks: foundTasks
    }
}

export default connect(mapStateToProps)(TaskList);