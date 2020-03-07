import React from 'react';

import Aux from '../Aux/Aux';

const Person = ({name, age, children}) => (
    <Aux>
        <p>I am a person! My name is {name} and I am {age} years old.</p>
        <h2>{children}</h2>
        <hr />
    </Aux>
)
export default Person;