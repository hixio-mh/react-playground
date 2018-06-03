import React from 'react';

const person = (props) => {
  return (
    <div>
      <h1>{props.name} ({props.age})</h1>
      <div>{props.children}</div>
    </div>
  )
};

export default person;