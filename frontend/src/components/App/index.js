import React, { Component } from 'react';
import Header from '../Header/index'
import './style.css';
import Search from "../Search/index";
import AddTask from "../AddTask/index"
import TaskList from "../TaskList/index"


class App extends Component {

  state = {
      tasks: this.props.tasks
  }

  render() {
    return (
      <div>
          <Header />
          <Search />
          <AddTask />
          <TaskList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
