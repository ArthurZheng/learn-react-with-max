import React, {Component} from 'react';
import './App.css';

import Person from './components/Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Alex', age: 28, hobby: 'watching movie'},
      {name: 'Bro', age: 12, hobby: 'gong fishing'},
      {name: 'Maru', age: 89, hobby: 'cycling'},
    ]
  }

  render(){
    return(
      <div className="App">
      <h1>Hi, I am a React App</h1>
      {this.state.persons.map(person => (
        <Person name={person.name} age={person.age} >My hobby is: {person.hobby} </Person>
      ))}
  </div>
    )
  }
}

export default App;
