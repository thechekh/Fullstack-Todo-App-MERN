import React, { Component } from 'react';
import {deleteTask, updateTask, updateTaskStatus} from '../../AC'
import {connect} from 'react-redux'
import './style.css';
import icoEdit from './ico-edit.svg'
import icoCompleted from './ico-complited.svg'
import icoNotCompleted from './ico-notComplited.svg'
import icoDelete from './ico-delete.svg'
import icoSave from './ico-save.svg'

class Task extends Component {

    state = {
        edit: false,
        text: this.props.children,
        isCompleted: this.props.task.isCompleted
    }

    editTask = ev => {
        this.setState({edit: true});
    }

    handleDelete = ev => {
        ev.preventDefault()
        const {task, deleteTask} = this.props
        deleteTask(task.id)
    }

    saveTask = ev => {
        ev.preventDefault()
        if (this.state.text) {
            this.setState({edit: false})
            const {task, updateTask} = this.props
            task.task = this.state.text
            updateTask(task)
        }
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
        const {task, updateTaskStatus} = this.props
        updateTaskStatus(task)
        this.setState({
            isCompleted: !this.state.isCompleted
        })
    }

    getTaskStatus () {
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

    getBody() {
        if (this.state.edit) {
            return (
                <div className="task_wrapper">
                    <img src={icoSave}
                         onClick={this.saveTask}
                         className="task-edit__ico"
                         alt="save"
                    />
                    <input
                        className="task__input"
                        onChange={this.handleChange}
                        onKeyPress={this.handleKeyPress}
                        value={this.state.text}
                    />
                </div>
        )} else {
            return (
                <div className="task_wrapper">
                    {this.getTaskStatus()}
                    <img src={icoEdit}
                         onClick={this.editTask}
                         className="task-edit__ico"
                         alt="edit"
                    />
                    <img src={icoDelete}
                         onClick={this.handleDelete}
                         className="task-delete__ico"
                         alt="delete"
                    />
                    <div className="task__text">{this.state.text}</div>
                </div>
        )}
    }

    render() {
        return (
            <div className="task">
                {this.getBody()}
            </div>
        )
    }
}

export default connect(null, { deleteTask, updateTask, updateTaskStatus })(Task);