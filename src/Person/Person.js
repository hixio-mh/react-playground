import React from 'react';
import './Person.css';

const person = (props) => {
  return (
    <div className="Person">
      <h1>{props.name} ({props.age})</h1>
      <div>{props.children}</div> 
      <button onClick={props.increaseAgeHandler}>Increase age</button>
      <input type="text" name="" onChange={props.changeNameHandler} defaultValue={props.name}/>
    </div>
  )
};

export default person;