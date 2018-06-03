import React from 'react';

const person = (props) => {
  return (
    <div>
      <h1>{props.name} ({props.age})</h1>
      <div>{props.children}</div> 
      <button onClick={props.increaseAgeHandler}>Increase age</button>
      
    </div>
  )
};

export default person;