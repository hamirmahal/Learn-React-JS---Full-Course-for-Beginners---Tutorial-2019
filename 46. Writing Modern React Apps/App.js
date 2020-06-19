import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = { name : ''  };

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState(  { [name]  : value } );
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form>
          <input
            name='name'
            onChange={this.handleChange}
            type='text'
            value={this.state.name}
          />
        </form>
        <h1>
          this.state.name
          is {this.state.name}
        </h1>
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
} // Closing brace for App class component

export default App;
