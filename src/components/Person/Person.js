import React from 'react';

// const Person = () => {
//     return (
//         <p>I am a person!</p>
//     )
// }

const Person = (props) => <p>I am a person! My name is {props.name} and I am {props.age} years old.</p>
export default Person;