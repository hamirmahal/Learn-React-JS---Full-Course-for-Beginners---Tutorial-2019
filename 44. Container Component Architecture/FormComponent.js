import React from 'react';

function FormComponent(props) {
    return (
        <div className="App">
        <header className="App-header">
            {console.log('Rendering the App Component!')}
            <form onSubmit={props.handleSubmit}>
            <input
                name='firstName'
                onChange={props.handleChange}
                placeholder='Please enter your first name.'
                type='text'
                value={props.data.firstName} />
            <br />
            <input
                name='lastName'
                onChange={props.handleChange}
                placeholder='Please enter your last name.'
                type='text'
                value={props.data.lastName} />
            <br />
            <input
                name='age'
                onChange={props.handleChange}
                placeholder='Please enter your age.'
                type='text'
                value={props.data.age} />
            <br />
            <br />
            <label>
                <input
                checked={props.data.gender === 'femme'}
                name='gender'
                onChange={props.handleChange}
                type='radio'
                value='femme' /> femme
            </label>
            <br />
            <label>
                <input
                checked={props.data.gender === 'homme'}
                name='gender'
                onChange={props.handleChange}
                type='radio'
                value='homme' /> homme
            </label>
            <br />
            <label>
                <input
                checked={props.data.gender === 'nonbinary'}
                name='gender'
                onChange={props.handleChange}
                type='radio'
                value='nonbinary' /> nonbinary
            </label>
            <br />
            <br />
            <label>Which airport are you visiting?</label>
            <br />
            <select
                name='location'
                onChange={props.handleChange} >
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
                checked={props.data.glutenFree}
                name='glutenFree'
                onChange={props.handleChange}
                type='checkbox' /> Gluten-free?
            </label>
            <br />
            <br />
            <label>
                <input
                checked={props.data.halal}
                name='halal'
                onChange={props.handleChange}
                type='checkbox' /> Halal?
            </label>
            <br />
            <br />
            <label>
                <input
                checked={props.data.kosher}
                name='kosher'
                onChange={props.handleChange}
                type='checkbox' /> Kosher?
            </label>
            <br />
            <br />
            <label>
                <input
                checked={props.data.lactoseFree}
                name='lactoseFree'
                onChange={props.handleChange}
                type='checkbox' /> Lactose-free?
            </label>
            <br />
            <br />
            <label>
                <input
                checked={props.data.vegan}
                name='vegan'
                onChange={props.handleChange}
                type='checkbox' /> Vegan?
            </label>
            <br />
            <br />
            <label>
                <input
                checked={props.data.vegetarian}
                name='vegetarian'
                onChange={props.handleChange}
                type='checkbox' /> Vegetarian?
            </label>
            <br />
            <br />
            <button>Submit!</button>
            </form>
            {console.log('render() is finishing soon!')}
        </header>
        </div>
  );
}

export default FormComponent;