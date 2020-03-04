// import React from 'react';
// import React, { useState } from 'react';

import React, {Component} from 'react'
import './App.css';
import Person from '../components/Persons/Person/Person';
// import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'


class App extends React.Component {
  //state and setState is only class based component, this
  // was before react 16.8, but now there's also functional
  //component called reactHooks
  // stateful components, you only wanna have a couple unless you have thousands of components
  // you have way more functional components and have a clear flow of data
  //components that manage state shouldn't also manage UI usually  
  state = {
      persons: [
        {id: 'A1', name: 'person1', age: 1},
        {id:'B2', name: 'person2', age: 2 }
        // {name: 'man', age:12}
      ],
      personsHW: [
        {
          filler: ''
        }
      ],
      personsHW2: 'alo',
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
  //below has 1 flaw: in js, obj/arrays are reference types
  //so when we gets persons = this.sta... we point to the original 
  //while it does wo throwing error, can lead to unpredicable behavior
  //we should copy the this.state.persons -- calling just .slice()
  //or using dot operator [...]
  const persons = [...this.state.persons];
  // const persons = this.state.persons;
  persons.splice(personIndex, 1); //removes 1 element from array
  this.setState({persons: persons});
  
  // this.setState({

  // })
}
// togglePersonHandler = () => {
//   const doesShow = this.state.showPersons; //this just shows current state
//   console.log(doesShow);
//   this.setState({showPersons: !doesShow});
// }

//why doesn't putting parameter as (...args) work below?
nameChangedHandler = (event, id) => {

  //how can there be a situation where the p.id != id?
  const personIndex = this.state.persons.findIndex(p => {
    return p.id === id;
  });
  //below was my attempt but apparently need to pass a callback to findindex find
  // const personIndex = this.state.persons.findIndex(id);
  // console.log('id', personIndex);
  const person = {
    ...this.state.persons[personIndex]
  };
  
  person.name = event.target.value;

  const persons = [...this.state.persons];
  persons[personIndex] = person;

  this.setState({persons: persons});
  //below is commented out bc directly working on object
  // const person = this.state.persons[personIndex];
  // this.setState({
  //   persons: [
  //     // {name: event.target.value, age: 2338},
  //     {name: event.target.value, age: this.state.persons.age},
  //     {name: event.target.value, age: this.state.persons.age}

  //   ]
  // })
}
lenOutput = (event) => {
  // event.persist();
  // const persons = [...this.state.persons];
  // // const persons = this.state.persons;
  // persons.splice(personIndex, 1); //removes 1 element from array
  // this.setState({persons: persons});


  // console.log('things are happening in MY INPUT BABAY');
  const inputFieldText = event.target.value;
  this.setState((prevState)=>{
    const newPersonsHW = prevState.personsHW.map((obj)=>{
      obj.filler = inputFieldText.length;
      return obj;
    });
    return {personsHW:newPersonsHW}
  })
  // this.setState({personsHW.: inputFieldText})
  // this.setState.personsHW.filler = inputFieldText;  
}
lenOutPut2 = (event) => {
  console.log('this.state;', this.state.persons);
  console.log('this.state.persons', this.state);
  console.log('this.state.personsHW2', this.state.personsHW2);
  const inputField = event.target.value;
  const p = this.state.personsHW2;
  //this.state.personsHW2 is not getting updated
  console.log('p', inputField);
  this.setState({p: inputField});

}

toggleName = () => {
  const currentStatus = this.state.showPersons;
  this.setState({showPersons: !currentStatus});
}


//everything inside render gets rendered when 
// react thinks something needs to get updated
  render(){
    // console.log(typeof(this.state));
    const style = {
      backgroundColor: 'purple',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    const inp = {
      backgroundColor: 'white',
      marginTop: '10px',
      padding: '10px'
    }

    let persons = null;
    

    if((this.state.showPersons)){
      persons = (
        // <div>
        //   {/* map() function takes two arguments, index of each item in array */}
        //   {this.state.persons.map((person, index) => {
        //     // ErrorBoundary is a higher order comp, i.e. it wraps around another comp
        //     // key always has to be on outer element in map method
        //     //only use errorboundaries in cases it might fail and you can't control it, else figure it out and not a
        //     return <Person
        //     // <ErrorBoundary>
              
        //     // other option below would be index.bind()
        //     click={() => this.deletePersonHandler(index)}
        //     name={person.name} 
        //     age={person.age}
        //     key={person.id}
        //     //chances are keys come from db
        //     changed={(event) => this.nameChangedHandler(event, person.id)}
        //     />
            
        //   })}
        // </div>  
      )
      style.backgroundColor = 'red';
    }

    let assignedClasses = [];
    if(this.state.persons.length <= 2){
      assignedClasses.push('red'); //classes = ['red]
      // assignedClasses.push(classes.red);
    }
    if(this.state.persons <= 1){
      assignedClasses.push('bold'); //classes = ['red', 'bold']
      // assignedClasses.push(classes.bold);
    }

    //below this is jsx, above is normal js code
    return(
// css loader transforms css class name into a unique one 
// where classname we tweaked in webpack
        <div className= "App" >
          <h1>
            æ
          </h1>
          <p className={assignedClasses.join(' ')}>
            this be a paragraph
          </p>
        {/* below you see two ways of calling switchNameHandler
        using arrow function on onclick or bind(this, 'string') */}
        <button 
          style={style}
          onClick={this.toggleName}> switch name</button><br></br>
          <input onChange={this.lenOutput} style={inp}/>
          <p>{this.state.personsHW.map(obj => obj.filler)}</p>
          <input onChange={this.lenOutPut2}></input>
          <p>{this.state.personsHW2}</p>
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