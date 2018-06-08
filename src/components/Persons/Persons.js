import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  render() {
    return this.props.persons.map(
      (p, index) => {
        return (
          <Person
            key={p.id}
            name={p.name}
            age={p.age}
            increaseAgeHandler={this.props.increaseAgeHandler.bind(this, p)}
            changeNameHandler={this.props.changeNameHandler.bind(this, p.id)}
            deletePersonHandler={this.props.deletePersonHandler.bind(this, index)}
          />);
      });
  }
}

export default Persons;
