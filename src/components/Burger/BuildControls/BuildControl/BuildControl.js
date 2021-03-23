import React from 'react';
import classesCss from './BuildControl.css';

const buildControl = (props) => {
    return (
        <div className={classesCss.BuildControl} >
            <div className={classesCss.Label} >{props.label}</div>
            <button className={classesCss.Less} onClick={props.removeIngredient} disabled={props.toDisable} >Less</button>
            <button className={classesCss.More} onClick={props.addIngredient} >More</button>

        </div>
    );
}

export default buildControl;