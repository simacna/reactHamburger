import React, {Component} from 'react';
import Radium from 'radium';
import './Person.css';
import { isTSAnyKeyword } from '@babel/types';
import Aux from '../../../hoc/Aux';
import PropTypes from 'prop-types';


// Converting functional component to class based to use lifecycle hook methods

class Person extends Component{
  componentWillUpdate(){
    //or below commented out if you're using constructor method
    
    this.inputElement.focus();
  }
    render() {
        console.log('Person.js - rendering...');

        
        //the return should only have one root jsx
        //below we could also do <Aux> <p>... just to have wrapper
        //return(React.createElement())
        //there's also a built in valid jsx component and you can use React.Fragment or just import {Component, Fragment} and use <Fragment>
        //since Fragment does the same as Aux
        return(
            <Aux>

        <p onClick={this.props.click}> i'm {this.props.age} year and my 
            name is {this.props.name}</p>
        <input 
        key="i2" 
        type="text" 
        onChange={this.props.changed} 
        value={this.props.name}
        //below name of inputElement oculd be anything
        //we gain access to the input element then storing it in global property
        //so that we can use anywhere in our app, and since componentDidMount runs after render
        //it'll update
        ref={(inputEl)=> {this.inputElement = inputEl}}
        />   
            </Aux>
            // <div className="Person">
          
//  </div>
    ) 
  }
}

//below is a js object, proptypes you can add to any js component
//object and react will watch out for in dev mode and give a warning
//if you pass incorrect props and which type of data each component should be

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func

}

//every component manages props and since react 16.8 every component also can manage state (prior to that you could only manage class base components)
// const person = (props) => {
    //props is the attributes you pass to your components
    // stateless (also called dumb) since they only get input and output as possible 
    // console.log('props in Person.js', props);


    // return (
    //     <div className="Person">
    //         {/* if i remove onClick={props.click} app works normally */}
    //         <p onClick={props.click}> i'm {props.age} year and my 
    //         name is {props.name}
    //         </p>
    //         {/* how do you know there's an attribute called changed? its supposedly referring to */}
    //         {/* we're going to change onChange so it points directly to a method */}
    //         <input type="text" onChange={props.changed} value={props.name}/>  
    //         {/* <p> {props.children}</p>  */}
    //         {/* content between <person></person> tags now show */
    //         }
    //         {/* <p>test</p> */}
    //     </div>
    // )
    // return(<p> hi</p>) <- returns hi
// };

// when using class-based components its 
// this.props
// class Person extends Component {
// render(){ return <p> my name is {this.props} </p>}
// }

export default Person;