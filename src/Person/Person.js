import React from 'react';

const person = (props) => {
  const style = {
    backgroundColor: "rgb(255, 255, 255)"
  };

  // if (Math.random() > 0.5) {
  //   throw new Error("Something went wrong");
  // }

  return (
    <div style={style}>
      <h1>{props.name} ({props.age})</h1>
      <div>{props.children}</div> 
      <button onClick={props.increaseAgeHandler}>Increase age</button>
      <button onClick={props.deletePersonHandler}>Delete me</button>
      <input type="text" name="" onChange={props.changeNameHandler} defaultValue={props.name}/>
    </div>
  )
};

export default person;