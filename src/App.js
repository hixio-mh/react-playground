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
    ],
    showPersons: true
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

  changeNameHandler = (event) => {
    this.setState(Object.assign(
      this.state,
      {
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
            name: event.target.value,
            age: 27,
            extra: null
          },
        ]
      }
    ));
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  }

  render() {

    const persons = (this.state.showPersons) ?
      <div>
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
          increaseAgeHandler={this.increaseAgeHandler.bind(this, this.state.persons[2])}
          changeNameHandler={this.changeNameHandler}>
        </Person>
      </div>
      :
      null;

    return (
      <div className="App">
        <button onClick={this.increaseAllAgesHandler}>Increase all ages</button>
        <button onClick={this.togglePersonsHandler}>
          {
            this.state.showPersons ?
              <span>Hide persons</span>
              :
              <span>Show persons</span>
          }
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
