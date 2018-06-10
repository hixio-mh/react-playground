import React from 'react';
import classes from './Header.css';
import Aux from '../../hoc/Aux';

const header = (props) => {
  const personsCountClass =
    props.personsCount > 2 ?
      classes.personscountlarge
      :
      classes.personscountsmall;

  const togglePersonsButtonText =
    props.showPersons ?
      "Hide persons"
      :
      "Show persons";

  const togglePersonsButtonClass =
    props.showPersons ?
      classes.critical
      :
      classes.ok;

  return (
    <Aux>
      <p className={personsCountClass}>
        {props.personsCount} persons
      </p>
      <button
        onClick={props.increaseAllAgesHandler}>
        Increase all ages
      </button>
      <button
        onClick={props.togglePersonsHandler}
        className={togglePersonsButtonClass}>
        {togglePersonsButtonText}
      </button>
    </Aux>
  )
}

export default header;
