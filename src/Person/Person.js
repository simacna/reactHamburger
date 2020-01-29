import React from 'react';
import { isTSAnyKeyword } from '@babel/types';

//every component manages props and since react 16.8 every component also can manage state (prior to that you could only manage class base components)
const person = (props) => {
    //props is the attributes you pass to your
    //components
    // stateless (also called dumb) since they only get input and output as possible 
    return (
    <div>
        {/* if i remove onClick={props.click} app works normally */}
        <p onClick={props.click}> i'm {props.age} years and my 
        name is {props.name}
        </p>
        {/* how do you know there's an attribute called changed? its supposedly referring to */}
        <input type="text" onChange={props.changed} value={props.name}/>  
        {/* <p> {props.children}</p>  */}
        {/* content between <person></person> tags now show */}
    </div>
    )
    // return(<p> hi</p>) <- returns hi
};

// when using class-based components its 
// this.props
// class Person extends Component {
// render(){ return <p> my name is {this.props} </p>}
// }

export default person;