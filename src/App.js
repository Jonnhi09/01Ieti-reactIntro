import React, { Component } from 'react';
import './App.css';
import {TodoApp} from './TodoApp';

class App extends Component {
  render() {
    /*const todos = [{id:"LR-1", text:"Learn React", priority:5, dueDate: new Date() },
            {id:"LA-2", text:"Learn about APIs", priority:4, dueDate: new Date(2018,8,30) },
            {id:"WT-3", text:"write TODO App", priority:3, dueDate: new Date(2018,9,30) }];*/
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Todo-List
          </h1>
          <TodoApp />
        </header>
      </div>
    );
  }
}

export default App;
