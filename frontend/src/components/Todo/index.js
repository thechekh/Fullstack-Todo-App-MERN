import React, { Component } from 'react';
import Header from './Header/index'
import './style.css';
import Search from "./Search/index";
import AddTask from "./AddTask/index"
import TaskList from "./TaskList/index"

class Todo extends Component {

 


  render() {

    return (

      <div>
        <Header />
        <Search />
        <AddTask />
        <TaskList />
      </div>
    );
  }
}

export default Todo;
