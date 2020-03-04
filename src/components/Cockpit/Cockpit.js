import React from 'react';


const cockpit = () => {

    let assignedClasses = [];
    if(props.persons.length <= 2){
      assignedClasses.push('red'); //classes = ['red]
      // assignedClasses.push(classes.red);
    }
    if(props.persons <= 1){
      assignedClasses.push('bold'); //classes = ['red', 'bold']
      // assignedClasses.push(classes.bold);
    }
    return(
        <div>
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
        </div>
        
    );


}

export default cockpit;