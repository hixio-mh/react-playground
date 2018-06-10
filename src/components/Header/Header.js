import React, { Fragment } from 'react';
import classes from './Header.css';

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
    <Fragment>
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
    </Fragment>
  )
}

export default header;
