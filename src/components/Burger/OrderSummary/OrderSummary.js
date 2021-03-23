import React from 'react';
import Aux from '../../../hoc/Auxiliaire';

const orderSummary = (props)=> {
    let ingredients = Object.keys(props.ingredients).map(
        ingrdKey => {
            return (
                <li key={ingrdKey}><span style={{textTransform: 'capitalize'}}>
                    {ingrdKey} : {props.ingredients[ingrdKey]}</span> 
                </li>
            );
        }
    );
    console.log(ingredients);
    
    return (
        <Aux>
            <h3> your delicious burger with the following ingredients : </h3>
            <ul>
                {ingredients}
            </ul>
            <p>Continue to CheckOut !</p>

        </Aux>
    );

}

export default orderSummary;