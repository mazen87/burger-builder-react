import React from 'react';
import BurgerIngredients from '../Burger/BurgerIngredients/BurgerIngedients';
import classesCss from './Burger.css';

const burger = (props)=>{

    let ingredientsOfBureger = Object.keys(props.ingredients).map(
        ingredientKey => {
            return [...Array(props.ingredients[ingredientKey])].map(
                (_,i) => {
                    return <BurgerIngredients  key={ingredientKey + i} type={ingredientKey} />
                }
            );
        }
    ).reduce((arr,el)=>{
        return arr.concat(el);
    },[]);
    if(ingredientsOfBureger.length ===0 ){
        ingredientsOfBureger = <p> Please start adding ingredients !</p>
    }
 
   return (
        <div className={classesCss.Burger}>
            <BurgerIngredients type="bread-top"/>
              {ingredientsOfBureger}
            <BurgerIngredients  type="bread-buttom"/>

        </div>
   );
} 
export default burger;
