import React from 'react';
import FormComponent from './FormComponent';

class Form extends React.Component {
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
      <FormComponent 
        data={this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default Form;
