import React from 'react';
import classesCss from './BuildControls.css';
import BuildControl from '../BuildControls/BuildControl/BuildControl';

const controls = [
    {label : 'Salad'  , type:'salad' },
    {label : 'Bacon'  , type:'bacon' },
    {label : 'Cheese' , type:'cheese'},
    {label : 'Meat'   , type:'meat'  },
    {label : 'Onion'  , type:'onion'}
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
                         toDisable={props.disableButton[control.type]} ingredientsPrices={props.ingredientsPrices}/>
                    )
                )
                }
                <button className={classesCss.OrderButton}  onClick={props.showSummary} 
                 disabled={!props.OrderButton}> Passing Order</button>
            </div>
        );
}

export default buildControls;