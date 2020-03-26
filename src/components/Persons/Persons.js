//we're using class based components for state management
//and functional components for presentation
import React, {PureComponent} from 'react';
import Person from './Person/Person';


class Persons extends PureComponent{
    static getDerivedStateFromProps(props, state){
        //should return a state
        console.log('persons.js - getDerivedStateFromProps - num 1 in stack of methods');
        return state;
    }

    shouldComponentUpdate(next){
        //gets upcoming props which happen right after getderivedstae and upcoming state 
        //and now you have to return true or false whether react should continue updating or not
        //you compare current props to your upcoming props

        console.log('persons.js - shouldComponentUpdate - num 2 in stack of methods');
        // below is a way of checking if any part of the props changes, you can not use shouldCompoentUpdate but
        //extend a {PureComponent} instead of Component since it's a normal Component except it automatically
        // runs a shouldComponentUpdate with a full props check
        // if(nextProps.persons !== this.props.persons || nextProps.changed !== this.props.changed || nextProps.clicked !== this.props.clicked){
        //     return true;
        // } else {
        //     return false;
        // }
        
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        //after this method render() gets executed
        console.log('persons.js - getSnapShotBeforeUpdate - num 3 in stack of methods');
    }

    componentDidUpdate(){
        //will run after done updating render() method
        // hook you'll use most often
        console.log(' app.js - componentDidUpdate - num 5');
    }

    componentWillUnmount(){
        //code to be executed right before component is removed
        console.log('persons.js - rendering...');
    }
    render(){
        console.log('Persons.js - rendering... - num 4 in stack of methods');
        return this.props.persons.map((person, index) => {
            //   below returning a list - q: how do you know <Person> is a list?
                return (
                    <Person  
                        click={() => this.props.clicked(index)}
                        name={person.name}
                        age={person.age}
                        key={person.id}
                        changed={(event) => this.props.changed(event, person.id)}
            
                />
                    );
                });

    }
}

// }
// const persons = (props) => {
//     console.log('Persons.js - rendering...');

//     return props.persons.map((person, index) => {
// //   below returning a list - q: how do you know <Person> is a list?
//     return (
//         <Person  
//             click={() => props.clicked(index)}
//             name={person.name}
//             age={person.age}
//             key={person.id}
//             changed={(event) => props.changed(event, person.id)}

//     />
//         );
//     });
// };

export default Persons;
