import React from 'react';
import classesCss from './BackDrop.css';

const backDrop = (props) => {
   return props.showSummary ? <div className={classesCss.BackDrop}  onClick={props.summaryHide}></div> : null
}

export default backDrop;