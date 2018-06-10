import React from 'react'; 

const withClass = (props) => {
  return (
    <div className={props.mainClass}>
      {props.children}
    </div>
  );
}

export default withClass;