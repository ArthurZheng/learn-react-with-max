import React, {Component, useState} from 'react';
import './App.css';

import Person from './components/Person/Person';

function App() {
  const [personsState, setPersonsState] = useState(
    {
      persons: [
        {name: 'Alex', age: 28, hobby: 'watching movie'},
        {name: 'Bro', age: 12, hobby: 'gong fishing'},
        {name: 'Maru', age: 89, hobby: 'cycling'},
      ],
      isSold: false,
    }
  )

  const switchNameHandler = (newName) => {
      console.log("Inside switchNameHandler, button was clicked");
      setPersonsState({
        persons: [
          {name: newName, age: 88, hobby: 'watching movie'},
          {name: newName, age: 27, hobby: 'gong fishing'},
          {name: newName, age: 99, hobby: 'cycling'},
        ]
      })
    }

  return(
    <div className="App">
      <h1>Hi, I am a React App</h1>
      <button onClick={switchNameHandler}>Switch name button</button>
      {personsState.persons.map((person, index) => (
        // <Person key={index} name={person.name} age={person.age} click={() => switchNameHandler()}>My hobby is: {person.hobby} </Person>
        // <Person key={index} name={person.name} age={person.age} click={ switchNameHandler.bind(this, 'BooHoo!!') }>My hobby is: {person.hobby} </Person>
        // <Person key={index} name={person.name} age={person.age} click={ switchNameHandler }>My hobby is: {person.hobby} </Person> // the function will be passed as is if there's no args to pass around
        <Person key={index} name={person.name} age={person.age} click={ (event) => switchNameHandler('Wooba!') }>My hobby is: {person.hobby} </Person>
      ))}
    </div>
  )
}

export default App;