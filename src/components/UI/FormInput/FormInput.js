import React from 'react';
import classesCss from './FormInput.css';

const formInput = (props) => {

    let inputElement = null;
    switch (props.elementType) {
        case 'input':
            inputElement = <input className={classesCss.InputElement}    {...props.elementAttributes} value={props.value}/>
            break;
        case 'textarea' : 
            inputElement = <textarea className={classesCss.InputElement} {...props.elementAttributes}  value={props.value}/>   
            break; 
        case 'select' : 
            inputElement = <select className={classesCss.InputElement}  value={props.value}>
                    {props.elementAttributes.options.map(
                        option => (
                            <option key={option.value} value={option.value}>
                                {option.displyValue}
                            </option>
                        )
                    )}

            </select>
            break;
        default:
            inputElement = <input className={classesCss.InputElement}    {...props.elementAttributes} value={props.value} />
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