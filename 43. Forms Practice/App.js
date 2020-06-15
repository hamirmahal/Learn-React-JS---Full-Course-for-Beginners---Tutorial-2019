import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    console.log("Ran first line of constructor!");
    super();
    this.state = {
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      location: '',
      glutenFree: false,
      halal: false,
      kosher: false,
      lactoseFree: false,
      vegan: false,
      vegetarian: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log('Finished running constructor!');
  }

  componentDidMount() {
    console.log('Running componentDidMount!');
    console.log('Completed running of componentDidMount!');
  }

  handleChange(event) {
    let {checked, name, type, value} = event.target;
    console.log('Checked is %o', checked);
    console.log('Name is %o', name);
    console.log('Type is %o', type);
    console.log('Value was %o', value);
    if (type === 'checkbox')
      value = checked;
    console.log('Value is %o', value);
    this.setState({
      [name]: value
    })
  }

  handleSubmit() {
    let dietRestrictions = '';
    if (this.state.glutenFree)
      dietRestrictions += 'Gluten-Free';
    if (this.state.halal && dietRestrictions !== '')
      dietRestrictions += ', Halal';
    if (this.state.halal && dietRestrictions === '')
      dietRestrictions += 'Halal';
    if (this.state.kosher && dietRestrictions !== '')
      dietRestrictions += ', Kosher';
    if (this.state.kosher && dietRestrictions === '')
      dietRestrictions += 'Kosher';
    if (this.state.lactoseFree && dietRestrictions !== '')
      dietRestrictions += ', Lactose-Free';
    if (this.state.lactoseFree && dietRestrictions === '')
      dietRestrictions += 'Lactose-Free';
    if (this.state.vegan && dietRestrictions !== '')
      dietRestrictions += ', Vegan';
    if (this.state.vegan && dietRestrictions === '')
      dietRestrictions += 'Vegan';
    if (this.state.vegetarian && dietRestrictions !== '')
      dietRestrictions += ', Vegetarian';
    if (this.state.vegetarian && dietRestrictions === '')
      dietRestrictions += 'Vegetarian';
    if (dietRestrictions === '')
      dietRestrictions = 'none';
    alert('First name: ' + this.state.firstName +
    '\nLast name: ' + this.state.lastName +
    '\nAge: ' + this.state.age +
    '\nGender: ' + this.state.gender +
    '\nLocation: ' + this.state.location +
    '\nDietary restrictions: ' + dietRestrictions);
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {console.log('Rendering the App Component!')}
        <form onSubmit={this.handleSubmit}>
          <input
            name='firstName'
            onChange={this.handleChange}
            placeholder='Please enter your first name.'
            type='text'
            value={this.state.firstName} />
          <br />
          <input
            name='lastName'
            onChange={this.handleChange}
            placeholder='Please enter your last name.'
            type='text'
            value={this.state.lastName} />
          <br />
          <input
            name='age'
            onChange={this.handleChange}
            placeholder='Please enter your age.'
            type='text'
            value={this.state.age} />
          <br />
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
          <br />
          <label>Which airport are you visiting?</label>
          <br />
          <select
            name='location'
            onChange={this.handleChange} >
            <option value=''>---</option>
            <option value='ACV'>ACV</option>
            <option value='BFL'>BFL</option>
            <option value='BUR'>BUR</option>
            <option value='FAT'>FAT</option>
            <option value='LGB'>LGB</option>
            <option value='LAX'>LAX</option>
            <option value='MMH'>MMH</option>
            <option value='MRY'>MRY</option>
            <option value='OAK'>OAK</option>
            <option value='ONT'>ONT</option>
            <option value='SNA'>SNA</option>
            <option value='PSP'>PSP</option>
            <option value='RDD'>RDD</option>
            <option value='SMF'>SMF</option>
            <option value='SAN'>SAN</option>
            <option value='SFO'>SFO</option>
            <option value='SJC'>SJC</option>
            <option value='SBP'>SBP</option>
            <option value='SBA'>SBA</option>
            <option value='SMX'>SMX</option>
            <option value='STS'>STS</option>
            <option value='SCK'>SCK</option>
          </select>
          <br />
          <br />
          <label>
            <input
              checked={this.state.glutenFree}
              name='glutenFree'
              onChange={this.handleChange}
              type='checkbox' /> Gluten-free?
          </label>
          <br />
          <br />
          <label>
            <input
              checked={this.state.halal}
              name='halal'
              onChange={this.handleChange}
              type='checkbox' /> Halal?
          </label>
          <br />
          <br />
          <label>
            <input
              checked={this.state.kosher}
              name='kosher'
              onChange={this.handleChange}
              type='checkbox' /> Kosher?
          </label>
          <br />
          <br />
          <label>
            <input
              checked={this.state.lactoseFree}
              name='lactoseFree'
              onChange={this.handleChange}
              type='checkbox' /> Lactose-free?
          </label>
          <br />
          <br />
          <label>
            <input
              checked={this.state.vegan}
              name='vegan'
              onChange={this.handleChange}
              type='checkbox' /> Vegan?
          </label>
          <br />
          <br />
          <label>
            <input
              checked={this.state.vegetarian}
              name='vegetarian'
              onChange={this.handleChange}
              type='checkbox' /> Vegetarian?
          </label>
          <br />
          <br />
          <button>Submit!</button>
        </form>
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
