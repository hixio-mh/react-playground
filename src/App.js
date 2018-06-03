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
    console.log("ih");
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
  render() {
    return (
      <div className="App">
        <button onClick={this.increaseAllAgesHandler}></button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>
        </Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>
          {this.state.persons[1].extra}
        </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>
        </Person>
      </div>
    );
  }
}

export default App;
