import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      unreadMessages: [
        "This is a test string.",
        "Second email message",
        "The contents of these strings aren't relevant.",
        "This is email message number four."
      ]
    }
  }

  componentDidMount() {
    console.log("Running componentDidMount!")
    console.log("Completed running of componentDidMount!")
  }

  render() {
    console.log("Rendering the App component!")
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {this.state.unreadMessages.length > 0 && 
        <p>
          You
          have {this.state.unreadMessages.length} unread
          messages!
        </p>}
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
