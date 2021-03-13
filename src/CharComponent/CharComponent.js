import React from 'react';
import './CharComponent.css';

const charComponent = (props) => {
  return (
    <div className="charComp" onClick={props.click}>
      <p>{props.arrayChar}</p>
    </div>
  );
}

export default charComponent;
