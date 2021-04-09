import React from 'react';
import classesCss from './FormInput.css';

const formInput = (props) => {

    let inputElement = null;
    let classesCssArray = [classesCss.InputElement];
    let errorMessage = null;
    if(props.invalid && props.touched){
        classesCssArray.push(classesCss.Invalid);
        errorMessage= <p style={{color:'red'}}> Please enter a valid value ..!</p>
    }
    switch (props.elementType) {
        case 'input':
            inputElement = <input className={classesCssArray.join(' ')}    {...props.elementAttributes} value={props.value} onChange={props.changed}/>
            break;
        case 'textarea' : 
            inputElement = <textarea className={classesCssArray.join(' ')} {...props.elementAttributes}  value={props.value} onChange={props.changed}/>   
            break; 
        case 'select' : 
            inputElement = (<select className={classesCssArray.join(' ')} value={props.value} onChange={props.changed} >
                    {props.elementAttributes.options.map(
                        option => (
                            <option key={option.value} value={option.value}>
                                {option.displyValue}
                            </option>
                        )   
                    )}

            </select>)
            break;
        default:
            inputElement = <input className={classesCssArray.join(' ')}    {...props.elementAttributes} value={props.value} onChange={props.changed}/>
            break;
    }
    return (
        <div className={classesCss.FormInput}>
            <label className={classesCss.Label}>{props.label}</label>
            {errorMessage}
            {inputElement}
        </div>
    );
}

export default formInput;