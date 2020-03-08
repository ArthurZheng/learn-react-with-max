import React from 'react';

const inputStyle = {
    backgroundColor: 'yellow',
    border: '2px solid red',
    color: 'blue',
}

const UserInput = ({hanldeInput, userN}) => (
    <input onChange={hanldeInput} type="text" placeholder='What is your name?' value={userN} style={inputStyle} />
)

export default UserInput;