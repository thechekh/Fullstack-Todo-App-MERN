import React, { Component } from 'react';
import { deleteTask, updateTask, updateTaskStatus } from '../../../action_creators'
import { deleteTodos } from '../../../action_creators'
import {toggleTodos} from '../../../action_creators'
import { connect } from 'react-redux'
import './style.css';
import icoCompleted from './ico-complited.svg'
import icoNotCompleted from './ico-notComplited.svg'
import icoDelete from './ico-delete.svg'


class Task extends Component {

    state = {

        text: this.props.children,
        isCompleted: this.props.task.isCompleted
    }



    handleDelete = ev => {
        ev.preventDefault()
       
        const { task } = this.props
        console.log("taskid where clicked",task._id);
        this.props.deleteTodos(task._id)
    }



    handleChange = ev => {
        this.setState({
            text: ev.target.value
        })
    }

    handleKeyPress = ev => {
        if (ev.key === 'Enter') {
            this.saveTask(ev)
        }
    }

    handleToggleStatus = ev => {
        ev.preventDefault()
        const { task, toggleTodos} = this.props
       toggleTodos(task._id)
        this.setState({
            isCompleted: !this.state.isCompleted
        })
    }

    getTaskStatus() {
        if (this.state.isCompleted) {
            return <img src={icoCompleted}
                onClick={this.handleToggleStatus}
                className="task-status__ico"
                alt="status done"
            />
        } else {
            return <img
                src={icoNotCompleted}
                onClick={this.handleToggleStatus}
                className="task-status__ico"
                alt="status not done"
            />
        }
    }




    render() {
        return (
            <div className="task">

                <div className="task_wrapper">
                    {this.getTaskStatus()}

                    <img src={icoDelete}
                        onClick={this.handleDelete}
                        className="task-delete__ico"
                        alt="delete"
                    />
                    <div className="task__text">{this.state.text}</div>
                </div>
            </div>
        )
    }
}

export default connect(null, { /* deleteTask */ deleteTodos, updateTask,toggleTodos })(Task);