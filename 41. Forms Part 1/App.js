import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    console.log("Ran first line of constructor!")
    super();
    this.state = {
      age: 25,
      name: ''
    };
    this.handleChange = this.handleChange.bind(this);
    console.log("Finished running constructor!")
  }

  componentDidMount() {
    console.log("Running componentDidMount!")
    console.log("Completed running of componentDidMount!")
  }

  handleChange(event) {
    const eventName = event.target.name
    console.log(eventName)
    const eventValue = event.target.value
    this.setState({
      [eventName]: eventValue 
    })
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {console.log("Rendering the App Component!")}
        <form>
          <input
            name="name"
            onChange={this.handleChange}
            placeholder="Hello! Please enter your name."
            type="text"
            value={this.state.name} />
          <br />
          <input
            name="age"
            onChange={this.handleChange}
            placeholder="Hello! Please enter your age."
            type="text"
            value={this.state.age} />
        </form>
        {alert('this.state.name is ' + this.state.name)}
        {alert('this.state.age is ' + this.state.age)}
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
