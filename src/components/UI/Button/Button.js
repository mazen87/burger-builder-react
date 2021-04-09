import React from 'react';
import classesCss from './Button.css';

const button = (props) => (
  <button onClick={props.clicked} className={ [classesCss.Button, classesCss[props.btnType]].join(' ')}   disabled={props.disabled}> 
        {props.children}
  </button>
);

export default button;