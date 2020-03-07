import React from 'react';
import './App.css';

import Person from './components/Person/Person';

function App() {
  return (
    <div className="App">
        <h1>Hi, I am a React App</h1>
        <Person name='jun' age='30'/>
        <Person name='jiangli' age='28'>My hobby is: watching TV soap operas.</Person>
        <Person name='Sophie' age='3'/>
    </div>
  );
}

export default App;
