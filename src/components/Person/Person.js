import React from 'react';

import Aux from '../Aux/Aux';

const Person = ({name, age, click, children, nameChanged}) => (
    <Aux>
        <button onClick={click}>Click to Change</button>
        <p>I am a person! My name is {name} and I am {age} years old.</p>
        <h2>{children}</h2>
        <input type="text" onChange={nameChanged} value={name} />
        <hr />
    </Aux>
)
export default Person;