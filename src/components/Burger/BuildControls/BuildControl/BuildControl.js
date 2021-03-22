import React from 'react';
import classesCss from './BuildControl.css';

const buildControl = (props) => {
    return (
        <div className={classesCss.BuildControl} >
            <div className={classesCss.Label} >{props.label}</div>
            <button className={classesCss.Less} >Less</button>
            <button className={classesCss.More} >More</button>

        </div>
    );
}

export default buildControl;