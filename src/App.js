import React, { Component } from 'react'; 
import Person from './Person/Person';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi</h1>
        <Person name="Scar" age="9"></Person>
        <Person name="Jo" age="10"><h1>My hobbies: football</h1></Person>
        <Person name="Maud" age="3"></Person>
      </div>
    );
  }
}

export default App;
