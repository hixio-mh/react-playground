import React, { Component } from 'react';
import classes from './Person.css';

class Person extends Component {

  render() {
    return (
      <div className={classes.bluecolored}>
        <h1>{this.props.name} ({this.props.age})</h1>
        <div>{this.props.children}</div>
        <button onClick={this.props.increaseAgeHandler}>Increase age</button>
        <button onClick={this.props.deletePersonHandler}>Delete me</button>
        <input type="text" name="" onChange={this.props.changeNameHandler} defaultValue={this.props.name} />
      </div>
    );
  }
};

export default Person;