import React from 'react';
import Person from './Person/Person';

const persons = (props) => props.persons.map(
  (p, index) => {
    return (
      <Person
        key={p.id}
        name={p.name}
        age={p.age}
        increaseAgeHandler={props.increaseAgeHandler.bind(this, p)}
        changeNameHandler={props.changeNameHandler.bind(this, p.id)}
        deletePersonHandler={props.deletePersonHandler.bind(this, index)}
      />);
  });

export default persons;
