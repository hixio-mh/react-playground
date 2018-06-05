import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      {
        id: 9,
        name: "Scar",
        age: 30,
        extra: null,
      },
      {
        id: 1,
        name: "Jo",
        age: 23,
        extra: "My hobbies: football",
      },
      {
        id: 3,
        name: "Maud",
        age: 27,
        extra: null,
      }
    ],
    showPersons: true
  }

  increaseAllAgesHandler = () => {
    this.setState(
      {
        persons: this.state.persons.map(p => (
          {
            ...p,
            age: p.age + 1
          }
        ))
      }
    );
  }

  increaseAgeHandler = (person) => {
    this.setState({
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
    );
  }

  changeNameHandler = (id, evt) => {
    const newName = evt.target.value;
    this.setState({
      persons: [...this.state.persons].map(p => {
        return (
          p.id === id? 
          {
            ...p,
            name: newName
          }
          :
          p
        );
      })
    });
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  }

  render() {

    const style =
      this.state.showPersons ?
        {
          background: "red"
        }
        :
        {
          background: "green"
        };

    const persons =
      (this.state.showPersons) ?
        this.state.persons.map((p, index) => {
          return (
            <Person
              key={p.id}
              name={p.name}
              age={p.age}
              increaseAgeHandler={this.increaseAgeHandler.bind(this, p)}
              changeNameHandler={this.changeNameHandler.bind(this, p.id)}
              deletePersonHandler={this.deletePersonHandler.bind(this, index)}
            />)
        })
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
