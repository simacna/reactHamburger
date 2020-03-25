import React, {useEffect} from 'react'; //useEffect 2nd most imp react hook next to useState
//combines functionality of all class based lifecycle hooks in one, it's a react hook and not lifecycle hook
import classes from './Cockpit.css';



//stateless components have usually been functional components
//even though you could with useState
const Cockpit = (props) => {
    //useEffect runs on every render
    useEffect(() => {
      console.log('cockpit.js - useEffect()');
      // componentDidMount and componentDidUpdate in one
      // example of wanting just one
      setTimeout(()=>{
        alert('alert');
      }, 1000);

    }, []); //2nd arg, }, [props.persons]); point at all variables that are actually used in your effect, 'only work when props.person changes'
    // [] empty array means only fire first time and whenever dependencies change
    
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
            æ - i'm a {props.title}
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

export default Cockpit;