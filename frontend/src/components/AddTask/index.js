import React, { Component } from 'react';
import './style.css';
import {addTask} from '../../AC'
import {connect} from 'react-redux'
import addTaskIco from './ico-add.svg'

class AddTask extends Component {

    state = {
        text: ''
    }
componentDidUpdate() {

  console.log(this.props);
  
}

     handleClick( ev){
        ev.preventDefault()
        if (this.state.text) {
             this.props.addTask(this.state)
            this.setState({
                text: ''
            })
        }
    }

    handleChange = ev => {
        this.setState({
            text: ev.target.value
        })

    }

    handleKeyPress = ev=> {

        if (ev.key === 'Enter') {
            this.handleClick(ev)
        }
    }

    render() {
        return (
            <div className="add-task">
                <form>
                    <img src={addTaskIco} className="add-task__ico" onClick={this.handleClick} alt="add"/>
                    <input className="add-task__input"
                           value={this.state.text}
                           onChange={this.handleChange}
                           onKeyPress={this.handleKeyPress}
                           type="text"
                           placeholder="Add new task"
                    />
                </form>
            </div>
        );
    }
}

export default connect(null, { addTask })(AddTask);