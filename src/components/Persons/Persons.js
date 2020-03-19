//we're using class based components for state management
//and functional components for presentation
import React from 'react';
import Person from './Person/Person';


const persons = (props) => {
    console.log('Persons.js - rendering...');

    return props.persons.map((person, index) => {
//   below returning a list - q: how do you know <Person> is a list?
    return (
        <Person  
            click={() => props.clicked(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => props.changed(event, person.id)}

    />
        );
    });
};

export default persons;

   
