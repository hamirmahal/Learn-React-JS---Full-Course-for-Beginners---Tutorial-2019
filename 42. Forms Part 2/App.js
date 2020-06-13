import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    console.log("Ran first line of constructor!");
    super();
    this.state = {
      age: 25,
      favoritePrimaryColor: '',
      gender: '',
      isGoing: false,
      name: ''
    };
    this.handleChange = this.handleChange.bind(this);
    console.log('Finished running constructor!');
  }

  componentDidMount() {
    console.log('Running componentDidMount!');
    console.log('Completed running of componentDidMount!');
  }

  handleChange(event) {
    const eventName = event.target.name;
    console.log(eventName);
    const eventType = event.target.type;
    console.log(eventType);
    const eventValue = eventType === 'checkbox' ?
      event.target.checked : event.target.value;
    console.log(eventValue);
    this.setState({
      [eventName]: eventValue
    })
  }

  handleSubmit() {
    alert('You submitted the form!')
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {console.log('Rendering the App Component!')}
        <form onSubmit={this.handleSubmit}>
          <input
            name='name'
            onChange={this.handleChange}
            placeholder='Hello! Please enter your name.'
            type='text'
            value={this.state.name} />
          <br />
          <input
            name='age'
            onChange={this.handleChange}
            placeholder='Hello! Please enter your age.'
            type='text'
            value={this.state.age} />
          <br />
          <label>
            <input
              checked={this.state.gender === 'femme'}
              name='gender'
              onChange={this.handleChange}
              type='radio'
              value='femme' /> femme
          </label>
          <br />
          <label>
            <input
              checked={this.state.gender === 'homme'}
              name='gender'
              onChange={this.handleChange}
              type='radio'
              value='homme' /> homme
          </label>
          <br />
          <label>
            <input
              checked={this.state.gender === 'nonbinary'}
              name='gender'
              onChange={this.handleChange}
              type='radio'
              value='nonbinary' /> nonbinary
          </label>
          <br />
          <label>
            <input
              checked={this.state.isGoing}
              name='isGoing'
              onChange={this.handleChange}
              type='checkbox' /> Is this person going?
          </label>
          <br />
          <label>Favorite primary color?</label>
          <br />
          <select
            name='favoritePrimaryColor'
            onChange={this.handleChange}
            value={this.state.favoritePrimaryColor}>
            <option value='blue'>blue</option>
            <option value='red'>red</option>
            <option value='yellow'>yellow</option>
          </select>
          <br />
          <button>Refresh page</button>
        </form>
        {alert('this.state.name is ' + this.state.name)}
        {alert('this.state.age is ' + this.state.age)}
        {alert('this.state.favoritePrimaryColor is ' 
          + this.state.favoritePrimaryColor)}
        {console.log('render() is finishing soon!')}
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
