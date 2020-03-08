import React from 'react';

import UserInput from '../UserInput/UserInput'
import Aux from '../Aux/Aux';

import './UserOutput.css'

const UserOutput = ({name, userName, clicked}) => (
    <Aux>
        <div className="UserOutput">
            <p>Lorum Ipsum 1</p>
            <p onClick={clicked}>Change your username to James Bond</p>
            <h1>Your name is {name}, your user name is {userName}</h1>
            <UserInput hanldeInput={clicked} userN={userName}/>
        </div>

    </Aux>
)


export default UserOutput;