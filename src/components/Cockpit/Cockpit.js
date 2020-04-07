import React, {useEffect, useRef} from 'react'; //useEffect 2nd most imp react hook next to useState
//combines functionality of all class based lifecycle hooks in one, it's a react hook and not lifecycle hook
import classes from './Cockpit.css';



//stateless components have usually been functional components
//even though you could with useState
const Cockpit = (props) => {
    const toggleBtnRef = useRef(null); //you could pass initial value

    //useEffect runs on every render
    useEffect(() => {

      console.log('cockpit.js - useEffect()');
      // componentDidMount and componentDidUpdate in one
      // example of wanting just one
      // const timer = setTimeout(()=>{
      //   console.log('alert');
      // }, 1000);
      toggleBtnRef.current.click();
      return() => {
        // clearTimeout(timer); //clears up timer when unmounted
        console.log('cockpit.js - cleanup work in useEffect');
      }
    }, []); //2nd arg, }, [props.persons]); point at all variables that are actually used in your effect, 'only work when props.person changes'
    // [] empty array means only fire first time and whenever dependencies change. so only render when component rendered and unmounted
    
    useEffect(() => {
      console.log('cockpit.js - 2nd useEffect()');

      return () => {
        //below runs before above console.log - useful for when some operation would should be cancelled when component re-renders
        console.log('cockpit.js - return(cleanup 2nd useEffect)') 
      }
    })
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
          ref={toggleBtnRef}
          style={style}
          onClick={props.clicked}> switch name</button><br></br>
          <input onChange={props.lenOutput} style={style}/>
          {/* <p>{this.state.personsHW.map(obj => obj.filler)}</p> */}
          <input onChange={props.lenOutPut2}></input>
          <button onClick={props.login}>log in </button>
          {/* <p>{this.state.personsHW2}</p> */}
        </div>
        
    );


}

export default React.memo(Cockpit); //memoiziation is a snapshop of Cockpit, only when 
//inputs changes -- memo is used for optimizing for functional components