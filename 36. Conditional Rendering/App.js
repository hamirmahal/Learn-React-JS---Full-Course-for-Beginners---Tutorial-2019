import React from 'react';
import logo from './logo.svg';
import './App.css';

import Conditional from './components/Conditional'

class App extends React.Component {
  constructor() {
    super()
    this.timeout = 5000
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    console.log("Running componentDidMount!")
    console.log("About to run setTimeout()")
    // Faking an API call.
    setTimeout(() => {
      console.log("I should see this after")
      console.log("%d seconds.", this.timeout/1000)
      this.setState({
        isLoading: false
      })
      console.log("Finished running setTimeout()!")
    }, this.timeout);
  }

  render() {
    console.log("Rendering the App component!")
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {this.state.isLoading ?
        <p>We are currently still loading.</p> :
        <Conditional timeout={this.timeout}/>}
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
