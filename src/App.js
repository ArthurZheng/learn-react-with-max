import React, {Component} from 'react';
import './App.css';

import Person from './components/Person/Person';

class App extends Component {
  render(){
    return(
      <div className="App">
      <h1>Hi, I am a React App</h1>
      <Person name='John' age='20'/>
      <Person name='Rose' age='18'>My hobby is: watching TV soap operas.</Person>
      <Person name='Gigi' age='3'/>
  </div>
    )
  }
}

export default App;
