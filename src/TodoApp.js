import React from 'react';
import {TodoList} from './TodoList';

export class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    var date = new Date();
    this.state = { items: [], text: '', priority: 1, dueDate: date, currentDate: date};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <br />
          <br />
          <div align="left">
          Text:&emsp;
          <input 
            id="new-text" 
            onChange={this.handleChange}
            value={this.state.text}
          />
          <br />
          Priority:&emsp;
          <select id="new-priority" onChange={this.handleChange}
            value={this.state.priority}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <br />
          Due date:&emsp;
          <input 
            type="date" 
            id="new-dueDate" 
            onChange={this.handleChange}
            value={this.state.dueDate}
          />
          <br />
          </div>
          <button>
            Add Todo: {this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    switch(e.target.id) {
      case "new-text":
        this.setState({ text: e.target.value});
        break;
      case "new-priority":
        this.setState({ priority: e.target.value});
        break;
      case "new-dueDate":
        this.setState({ dueDate: e.target.value});
        break;
      default:
        console.log("Default switch-case");
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if ((!this.state.text.length) || this.state.currentDate===this.state.dueDate) {
      alert("You must fill all fields!");
    } else { 
      const newItem = {
        id: this.state.items.length + 1,
        text: this.state.text,
        priority: this.state.priority,
        dueDate: this.state.dueDate
      };
      this.setState(prevState => ({
        items: prevState.items.concat(newItem),
        text: ''
      }));
    }
  }
}