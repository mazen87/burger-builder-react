import React from 'react';
import Aux from '../../../hoc/Auxiliaire';
import Button from '../../UI/Button/Button';

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
   // console.log(ingredients);
    
    return (
        <Aux>
            <h3> your delicious burger with the following ingredients : </h3>
            <ul>
                {ingredients}
            </ul>
            <p><strong>Total :  {props.price.toFixed(2)} € </strong></p>
            <p>Continue to CheckOut !</p>
            <Button  btnType= "Success" clicked={props.orderContinue} >CONTINUE</Button>
            <Button  btnType= "Danger" clicked={props.orderCancel}>CANCEL</Button>

        </Aux>
    );

}

export default orderSummary;