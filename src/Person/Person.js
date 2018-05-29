import React, {Component} from 'react';


// class Person extends Component {
//   render() {
//     return (
//       <div>I'm a person for real</div>
//     );
//   }
// }


const person = (props) => {
  return <p>I'm {props.name} and I am {props.age} years old</p>;
}

export default person; 
