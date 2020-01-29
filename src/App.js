// import React from 'react';
import React, {Component} from 'react'
// import React, { useState } from 'react';
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
        {name: 'max', age: 28}
        // {name: 'man', age:12}
      ]
    }


//[convention] function names ending in handler
// are handling event methods

switchNameHandler = (newName) => {
  // console.log('was clicked');
  // this below refers to the class
  // console.log(this.state.persons[0].name);

//   //we shouldn't change state directly but instead usee setState()
//   // this.state.persons[0].name = "khandan";
//   //setState merges old state with new state
  this.setState({
    persons: [
      // {name: newName, age: 2338},
      {name: newName, age:1224}
    ]
  })
//   // console.log(this.state.persons[0].name);
}

nameChangedHandler = (event) => {
  this.setState({
    persons: [
      // {name: event.target.value, age: 2338},
      {name: event.target.value, age: 'hehe'}
    ]
  })
}
  render(){
    return(
      <div className="App" >
        <h1>
          ~ aloha 
        </h1>
      {/* below you see two ways of calling switchNameHandler
      using arrow function on onclick or bind(this, 'string') */}
      <button onClick={()=> this.switchNameHandler('sesssss')}> switch name</button>
        <Person
        name={this.state.persons[0].name} 
        age = {this.state.persons[0].age}
        //below we are passing methods as props
        // click = {this.nameChangedHandler}
        changed = {this.nameChangedHandler}
        />
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