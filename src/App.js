import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      {
        name: "Scar",
        age: 30,
        extra: null
      },
      {
        name: "Jo",
        age: 23,
        extra: "My hobbies: football"
      },
      {
        name: "Maud",
        age: 27,
        extra: null
      }
    ]
  }

  increaseAllAgesHandler = () => {
    this.setState(Object.assign(
      this.state,
      {
        persons: this.state.persons.map(p => (
          {
            ...p,
            age: p.age + 1
          }
        ))
      }
    ));
  }

  increaseAgeHandler = (person) => {
    this.setState(Object.assign(
      this.state,
      {
        persons: this.state.persons.map(p => (
          p.name === person.name ?
          {
            ...p,
            age: p.age + 1
          }
          :
          p
        ))
      }
    ));
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.increaseAllAgesHandler}>Increase all ages</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          increaseAgeHandler={this.increaseAgeHandler.bind(this, this.state.persons[0])}>
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          increaseAgeHandler={this.increaseAgeHandler.bind(this, this.state.persons[1])}>
          {this.state.persons[1].extra}
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          increaseAgeHandler={this.increaseAgeHandler.bind(this, this.state.persons[2])}>
        </Person>
      </div>
    );
  }
}

export default App;
