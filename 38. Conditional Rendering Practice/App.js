import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log("Running componentDidMount!")
    console.log("Completed running of componentDidMount!")
  }

  handleClick() {
    console.log("The value of loggedIn before was")
    console.log(this.state.loggedIn)
    this.setState(previousStateVariable => {
      return {
        loggedIn: !previousStateVariable.loggedIn
      }
    })
    console.log("Finished running handleClick().")
  }

  render() {
    console.log("Rendering the App component!")
    console.log("loggedIn is now %o", this.state.loggedIn)
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {this.state.loggedIn ?
          <p>You are logged in.</p> :
          <p>You are logged out.</p>}
        <button type="button" onClick={this.handleClick}>
          {this.state.loggedIn ?
          <p>log out</p> : <p>log in</p>}
        </button>
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
