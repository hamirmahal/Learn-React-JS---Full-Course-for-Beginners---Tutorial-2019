import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log("Running componentDidMount!")
    fetch("https://swapi.co/api/people/1")
      .then(responseFromFetch => responseFromFetch.json())
      .then(responseFromFetchInJSON => 
        console.log(responseFromFetchInJSON))
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
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
} // This is the closing brace for the functional component.

export default App;
