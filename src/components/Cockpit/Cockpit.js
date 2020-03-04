import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    let btnClass = '';
    if(props.showPersons){
        btnClass = classes.Red;
    }
    let assignedClasses = [];
    if(props.persons.length <= 2){
      assignedClasses.push('red'); //classes = ['red]
      // assignedClasses.push(classes.red);
    }
    if(props.persons <= 1){
      assignedClasses.push('bold'); //classes = ['red', 'bold']
      // assignedClasses.push(classes.bold);
    }

    const style = {
        backgroundColor: 'purple',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
      };
    return(
        <div className="Cockpit">
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
          onClick={props.clicked}> switch name</button><br></br>
          <input onChange={props.lenOutput} style={style}/>
          {/* <p>{this.state.personsHW.map(obj => obj.filler)}</p> */}
          <input onChange={props.lenOutPut2}></input>
          {/* <p>{this.state.personsHW2}</p> */}
        </div>
        
    );


}

export default cockpit;