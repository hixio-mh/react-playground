import React, { Component } from 'react'; 
import Person from './Person/Person';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi</h1>
        <Person name="Scar" age="9"></Person>
        <Person name="Jo" age="10"></Person>
        <Person name="Maud" age="3"></Person>
      </div>
    );
    // return React.createElement("div", { className: "App" },
    //   React.createElement("p", null,
    //     React.createElement("button", null, "Click me I'm lazy")
    //   )
    // );
  }
}

export default App;
