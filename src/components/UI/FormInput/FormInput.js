import React from 'react';
import classesCss from './FormInput.css';

const formInput = (props) => {

    let inputElement = null;
    switch (props.inputtype) {
        case 'input':
            inputElement = <input className={classesCss.InputElement}  {...props}/>
            break;
        case 'textarea' : 
            inputElement = <textarea className={classesCss.InputElement} {...props} />    
    
        default:
            inputElement = <input className={classesCss.InputElement} {...props} />
            break;
    }
    return (
        <div className={classesCss.FormInput}>
            <label className={classesCss.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
}

export default formInput;