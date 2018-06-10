import React, { Component } from 'react';
import classes from './Person.css';

class Person extends Component {


  constructor(props) {
    super(props);
    console.log('%c constructing Person', 'color: blue');
  }

  componentDidMount() {
    console.log("%c componentDidMount Person", 'color: blue');
  }

  componentWillUnmount() {
    console.log("%c componentWillUnmount Person", 'color: blue');
  }

  componentWillReceiveProps(nextProps) {
    console.log("%c componentWillReceiveProps Person", 'color: blue');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("%c shouldComponentUpdate Person", 'color: blue');
    // return false;
    return nextProps.name !== this.props.name;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("%c componentWillUpdate Person", 'color: blue');
  }

  componentDidUpdate() {
    console.log("%c componentDidUpdate Person", 'color: blue');
  }

  render() {
    console.log("%c rendering Person", 'color: blue');
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