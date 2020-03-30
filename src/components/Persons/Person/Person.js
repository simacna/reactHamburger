import React, {Component} from 'react';
import Radium from 'radium';
import './Person.css'
import { isTSAnyKeyword } from '@babel/types';


// Converting functional component to class based to use lifecycle hook methods

class Person extends Component{

    render() {
        console.log('Person.js - rendering...');
        
        //the return should only have one root jsx
        return(
            <div className="Person">
            <p onClick={this.props.click}> i'm {this.props.age} year and my 
            name is {this.props.name}
            </p>
            <input key="i2" type="text" onChange={this.props.changed} value={this.props.name}/>  
        
  </div>
        )
        
    }
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