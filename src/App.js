// import React from 'react';
// import React, { useState } from 'react';

import React, {Component} from 'react'
import './App.css';
import Person from './Person/Person';


class App extends React.Component {
  //state and setState is only class based component, this
  // was before react 16.8, but now there's also functional
  //component called reactHooks
  // stateful components, you only wanna have a couple unless you have thousands of components
  // you have way more functional components and have a clear flow of data
    state = {
      persons: [
        {name: 'person1', age: 1},
        {name: 'person2', age: 2 }
        // {name: 'man', age:12}
      ],
      otherState: 'some other value',
      showPersons: false //if false, don't want to show person
    }

//[convention] function names ending in handler
// are handling event methods


//2.14.20 - why is this.setState in a function?
// switchNameHandler = (newName) => {
//   // this below refers to the class
// //   //we shouldn't change state directly but instead usee setState()
// //   // this.state.persons[0].name = "khandan";
// //   //setState merges old state with new state
//   this.setState({
//     persons: [
//       // {name: newName, age: 2338},
//       {name: newName, age:1224}
//     ],
//     otherState: 'some other value',
//     showPersons: true
//   })
// }
deletePersonHandler = (personIndex) => {
  const persons = this.state.persons;
  persons.splice(personIndex, 1); //removes 1 element from array
  console.log('persons', persons);
  this.setState({persons: persons});
  
  // this.setState({

  // })
}

nameChangedHandler = (event) => {
  this.setState({
    persons: [
      // {name: event.target.value, age: 2338},
      {name: event.target.value, age: 'hehe'}
    ]
  })
}

// togglePersonHandler = () => {
//   const doesShow = this.state.showPersons; //this just shows current state
//   console.log(doesShow);
//   this.setState({showPersons: !doesShow});
// }

toggleName = () => {
  const currentStatus = this.state.showPersons;
  this.setState({showPersons: !currentStatus});
}

clickButtonConsoleLog = () => {
  console.log('button pressed');
}

//everything inside render gets rendered when 
// react thinks something needs to get updated
  render(){
    // console.log(typeof(this.state));
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    };

    let persons = null;

    if((this.state.showPersons)){
      persons = (
        <div>
          {/* map() function takes two arguments, index of each item in array */}
          {this.state.persons.map((person, index) => {
            return <Person 
            // other option below would be index.bind()
            click={() => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age}/>
          })}
        </div>
        
      )
    }

    //below this is jsx, above is normal js code
    return(
      <div className="App" >
        <h1>
          ~ aloha 
        </h1>
      {/* below you see two ways of calling switchNameHandler
      using arrow function on onclick or bind(this, 'string') */}
      <button 
      style={style}
      onClick={this.toggleName}> switch name</button>
      {/* <button onClick={this.clickButtonConsoleLog}>alo</button> */}
      {persons}
      {/* { */}
        {/* //terneray operator not the greatest because it can be hard
        // to know what's responsible for what
        // this.state.showPerson ? */}
        
        {/* : null } */}
      {/* we're going to conditionally display <Person> below */}
        {/* {
        // can't do if statements only block in this dynamic syntax
        this.state.showPersons ?
        <div>
          <Person
          name={this.state.persons[0].name} 
          age = {this.state.persons[0].age}
          //below we are passing methods as props
          // click = {this.nameChangedHandler}
          changed = {this.nameChangedHandler}
          />
        </div> : null} */}
      </div>
    )
    
//     //below and above are the same when compiled

//     // return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'aloha'));
  }
}

//you typically name the component
//with the name of the file

export default App;

//react hooks below. useState is most important react hook

// const App = props => {

//  const [ personsState, setPersonsState] = useState({ //use state retuns an array with exactly 2 elements
//     //since 'this.state' doesn't exist, we'll use personState
//   persons: [
//       {name: 'max', age: 28},
//       {name: 'man', age:12}
//     ], 
//     otherState: 'something else'}); //first element is current element
//     console.log(personsState);


//     // useState({}) -> since useState replaces,need to 
//     //add manually
//     const [otherState, setOtherState] = useState('testing');
//   const switchNameHandler = () => {
//     setPersonsState({
//       persons: [
//         {name: 'khandan', age: 2338},
//         {name: 'man', age:122}
//       ]
//     });
//   };

//   return(
//     <div className="App">
//       <h1>
//         ~ aloha
//       </h1>
//     <button onClick={switchNameHandler}> switch name</button>
//       <Person name={personsState.persons[0].name} age = {personsState.persons[0].age}/>
//     </div>
//     )
//   }

  
// function App() {
  
//   return (
//     <div className="App">
      
//         <p>~ aloha ~</p>
//         <button> switch name</button>
//         <Person name="sina" age="29"> My hobby sessy </Person>  
//     </div>
//   );
// }