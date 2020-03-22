//we're using class based components for state management
//and functional components for presentation
import React, {Component} from 'react';
import Person from './Person/Person';


class Persons extends Component{
    static getDerivedStateFromProps(props, state){
        //should return a state
        console.log('persons.js - getDerivedStateFromProps');
        return state;
    }

    shouldComponentUpdate(next){
        //gets upcoming props which happen right after getderivedstae and upcoming state 
        //and now you have to return true or false whether react should continue updating or not
        //you compare current props to your upcoming props

        console.log('persons.js - shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        //after this method render() gets executed
        console.log('persons.js - getSnapShotBeforeUpdate');
    }
    render(){
        console.log('Persons.js - rendering...');
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
