import React, { Component } from 'react';

// class Person extends Component {
//   render() {
//     return (
//       <div>I'm a person for real</div>
//     );
//   }
// }

const person = (props) => {
  return (
    <div>
      <p>I'm {props.name} and I am {props.age} years old. {6 + 3}</p> 
      <p>{props.children}</p>
    </div>
  );
}

export default person;