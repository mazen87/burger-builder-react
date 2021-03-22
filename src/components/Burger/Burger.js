import React from 'react';
import BurgerIngredients from '../Burger/BurgerIngredients/BurgerIngedients';
import classesCss from './Burger.css';

const burger = (props)=>{

    const ingredientsOfBureger = Object.keys(props.ingredients).map(
        ingredientKey => {
            return [...Array(props.ingredients[ingredientKey])].map(
                (_,i) => {
                    return <BurgerIngredients  key={ingredientKey + i} type={ingredientKey} />
                }
            );
        }
    );
   return (
        <div className={classesCss.Burger}>
            <BurgerIngredients type="bread-top"/>
              {ingredientsOfBureger}
            <BurgerIngredients  type="bread-buttom"/>

        </div>
   );
} 
export default burger;
