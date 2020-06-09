import React from 'react';
import logo from './logo.svg';
import './App.css';

import todoData from './todoData';
import TodoComponent from './TodoComponent';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todoData
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log("Running componentDidMount!")
    console.log("Completed running of componentDidMount!")
  }

  handleClick(id) {
    console.log("The todo item with id %i", id)
    console.log("is %o.", this.state.todos[id - 1])
    console.log("todoItem[%i].completed was", id)
    console.log("%o", this.state.todos[id - 1].completed)
    this.setState(prev => {
      let newArray = prev.todos.map(todoItem => {
        if (todoItem.id === id)
          todoItem.completed = !todoItem.completed;
        return todoItem
      })
      console.log("todoItem[%i].completed is now", id)
      console.log("%o", this.state.todos[id - 1].completed)
      return {
        todos: newArray
      }
    })
    console.log("Finished running handleClick(%d).", id)
  }

  render() {
    console.log("Rendering the App component!")
    let stateTodoDataAsArray = this.state.todos.map(e =>
      <TodoComponent
        key={e.id}
        id={e.id}
        text={e.text}
        completed={e.completed}
        method={this.handleClick}
      />
    )
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {stateTodoDataAsArray}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </header>
      </div>
    );
  }
}

export default App;
