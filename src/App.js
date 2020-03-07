import React, {Component} from 'react';
import './App.css';

import Person from './components/Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Alex', age: 28, hobby: 'watching movie'},
      {name: 'Bro', age: 12, hobby: 'gong fishing'},
      {name: 'Maru', age: 89, hobby: 'cycling'},
    ],
    isSold: false,
  }

  switchNameHandler = () => {
    console.log("Inside switchNameHandler, button was clicked");
    this.setState({
      persons: [
        {name: 'Alexima', age: 88, hobby: 'watching movie'},
        {name: 'Brod', age: 27, hobby: 'gong fishing'},
        {name: 'Maruooo', age: 99, hobby: 'cycling'},
      ]
    })
  }

  render(){
    return(
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <button onClick={this.switchNameHandler}>Switch name button</button>
        {this.state.persons.map((person, index) => (
          <Person key={index} name={person.name} age={person.age} >My hobby is: {person.hobby} </Person>
        ))}
      </div>
    )
  }
}

export default App;
