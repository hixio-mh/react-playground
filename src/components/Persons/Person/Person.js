import React from 'react'; 
import classes from './Person.css';

const person = (props) => {

  // if (Math.random() > 0.5) {
  //   throw new Error("Something went wrong");
  // }

  return (
    <div className={classes.bluecolored}>
      <h1>{props.name} ({props.age})</h1>
      <div>{props.children}</div> 
      <button onClick={props.increaseAgeHandler}>Increase age</button>
      <button onClick={props.deletePersonHandler}>Delete me</button>
      <input type="text" name="" onChange={props.changeNameHandler} defaultValue={props.name}/>
    </div>
  )
};

export default person;