import React, {Component, useState} from 'react';
import './App.css';

import Person from './components/Person/Person';
import UserOutput from './components/UserOutput/UserOutput';

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

  const [userNameState, setUserNameState] = useState({userName: 'Jenny Smith'})
  const [toggleShowState, setToggleShowState] = useState({show: false});

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

    const nameChangeHandler =(event) => {
      console.log("Inside nameChangeHandler, input changed");
      setPersonsState({
        persons: [
          {name: event.target.value, age: 88, hobby: 'watching movie'},
          {name: event.target.value, age: 27, hobby: 'gong fishing'},
          {name: event.target.value, age: 99, hobby: 'cycling'},
        ]
      })
    }

    const userNameChangeHandler = (event) => {
      console.log("Inside userNameChangeHandler, paragraph clicked");
      console.log("event.target.value", event.target.value);
      setUserNameState({
        // userName: '007 James Bond',
        userName: event.target.value,
      })
    }

    // const userInputHandler = (event) => {
    //   console.log("Inside userInputHandler, paragraph clicked");
      
    // }

    const toggleShowStateHandler = (event) => {
      console.log("Inside toggleShowStateHandler, paragraph clicked");
      console.log("toggleShowState", toggleShowState);
      setToggleShowState({
        show: !toggleShowState.show
      })
    }

    const deletePersonHandler = (index) => {
      console.log("Inside deletePersonHandler");
      // const newPersons = personsState.slice();
      const newPersons = [...personsState.persons];
      console.log("newPersons", newPersons);
      newPersons.splice(index, 1);
      setPersonsState({ persons: newPersons})

    }

  return(
    <div className="App">
      <button onClick={toggleShowStateHandler}>Toggle Show Persons</button>
      {toggleShowState.show && <div>
      <UserOutput name="John Doe" userName={userNameState.userName} clicked={userNameChangeHandler}/>
      <h1>Hi, I am a React App</h1>
      <button onClick={switchNameHandler}>Switch name button</button>
      {personsState.persons.map((person, index) => (
        // <Person key={index} name={person.name} age={person.age} click={() => switchNameHandler()}>My hobby is: {person.hobby} </Person>
        // <Person key={index} name={person.name} age={person.age} click={ switchNameHandler.bind(this, 'BooHoo!!') }>My hobby is: {person.hobby} </Person>
        // <Person key={index} name={person.name} age={person.age} click={ switchNameHandler }>My hobby is: {person.hobby} </Person> // the function will be passed as is if there's no args to pass around
        <Person
        key={index}
        name={person.name}
        age={person.age}
        click={ (event) => switchNameHandler('Wooba!')}
        nameChanged={nameChangeHandler}
        deletePerson={deletePersonHandler.bind(this, index)}
        >My hobby is: {person.hobby} </Person>
      ))}
      </div>}
    </div>
  )
}

export default App;