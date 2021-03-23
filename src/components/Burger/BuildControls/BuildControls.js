import React from 'react';
import classesCss from './BuildControls.css';
import BuildControl from '../BuildControls/BuildControl/BuildControl';

const controls = [
    {label : 'Salad'  , type:'salad' },
    {label : 'Bacon'  , type:'bacon' },
    {label : 'Cheese' , type:'cheese'},
    {label : 'Meat'   , type:'meat'  }
]

const buildControls = (props) => {
        return (
            <div className={classesCss.BuildControls} >
                <p> Price : <strong>{props.price.toFixed(2)} €</strong></p>
                {
                controls.map(
                    control => (
                         <BuildControl  key={control.label} label={control.label} 
                         addIngredient={()=>props.addIngred(control.type)}  
                         removeIngredient={()=> props.removIngrd(control.type)} 
                         toDisable={props.disableButton[control.type]} />
                    )
                )
                
                }
            </div>
        );
}

export default buildControls;