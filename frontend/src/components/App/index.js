import React, { Component } from 'react';
import Header from '../Header/index'
import './style.css';
import Search from "../Search/index";
import AddTask from "../AddTask/index"
import TaskList from "../TaskList/index"
import { getTodos } from '../../action_creators'


class App extends Component {

 


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

export default App;
