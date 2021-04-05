import React from 'react';
import classesCss from './Order.css';

const order = (props) => {

    const ingredients = [];
    for (let ingredient in props.ingredients){
         ingredients.push({
             name:ingredient,
             amount: props.ingredients[ingredient]
         });
    }

   const outputIngredients = ingredients.map(
       ingr => {
           return (
               <span style={{ 
                   textTransform: 'capitalize',
                   display :'inline-block',
                   margin :'0 8px',
                   border :'1px solid #ccc',
                   padding: '5px'
               }}
               key={ingr.name}> {ingr.name} : ({ingr.amount})</span>
           );
       }
   );

    return (
        <div className={classesCss.Order}>
                <p>Ingredientq : {outputIngredients}</p>   
                <p>Price :<strong> {Number.parseFloat(props.price).toFixed(2)} €</strong></p>
        </div>
    
    );
}

export default order;