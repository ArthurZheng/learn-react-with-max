import React from 'react';

// import Aux from '../Aux/Aux';
import './Person.css';

const inLineStyle = {
    backgroundColor: 'red',
    font: 'inherit',
    border: 'solid 2px blue',
    padding: '15px',
    cursor: 'pointer',
}

const Person = ({name, age, click, children, nameChanged, deletePerson}) => (
    <div className="Person">
        <button  style={inLineStyle} onClick={click}>Click to Change</button>
        <button  style={inLineStyle} onClick={deletePerson}>Click to Delete</button>
        <p>I am a person! My name is {name} and I am {age} years old.</p>
        <h2>{children}</h2>
        <input type="text" onChange={nameChanged} value={name} />
        <hr />
    </div>
)
export default Person;