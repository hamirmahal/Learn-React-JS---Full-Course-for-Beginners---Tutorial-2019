import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    console.log("Ran first line of constructor!")
    super();
    this.state = {
      age: -1,
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
    event.target.name === "nameField" ? 
      this.setState({name: event.target.value}) :
      this.setState({age: event.target.value});
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {console.log("Rendering the App Component!")}
        <form>
          <input
            name="nameField"
            onChange={this.handleChange}
            placeholder="Hello! Please enter your name."
            type="text" />
          <br />
          <input
            name="ageField"
            onChange={this.handleChange}
            placeholder="Hello! Please enter your age."
            type="text" />
        </form>
        {alert(this.state.name)}
        {alert(this.state.age)}
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
