import React from 'react';
import './App.css';

import Person from './components/Person/Person';

function App() {
  return (
    <div className="App">
        <h1>Hi, I am a React App</h1>
        <Person name='jun' age='30'/>
    </div>
  );
}

export default App;
