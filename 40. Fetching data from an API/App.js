import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    console.log("Ran first line of constructor!")
    super()
    this.state = {
      arr: {},
      fetchURL: "https://swapi.dev/api/people/83",
      isLoading: null
    }
    console.log("Ran last line of constructor!")
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log("Running componentDidMount!")
    console.log("About to set this.state.isLoading")
    this.setState({isLoading: true})
    console.log("isLoading is %o", this.state.isLoading)
    fetch(this.state.fetchURL)
      .then(responseFromFetch => responseFromFetch.json())
      .then(responseFromFetchInJSON => {
        console.log("About to setState({})")
        this.setState({
          arr: responseFromFetchInJSON,
          isLoading: false
        })
        console.log("Finished setState({})")
      })
    console.log("this.state.arr.name is %o in cDM",
      this.state.arr.name)
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
      console.log("%o", this.state.todos[id-1].completed)
      return {
        todos: newArray
      }
    })
    console.log("Finished running handleClick(%d).", id)
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {console.log("Rendering the App Component!")}
        {console.log("isLoading is %o",
          this.state.isLoading)}
        {this.state.isLoading ? 
          <p>
            Fetching data from {this.state.fetchURL}
          </p> : this.state.arr.name}
        {console.log("this.state.arr.name is %o",
          this.state.arr.name)}
        {console.log("render() is finishing soon!")}
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
} // Closing brace for this component

export default App;
