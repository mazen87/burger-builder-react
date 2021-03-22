import React from 'react';
import BurgerIngredients from '../Burger/BurgerIngredients/BurgerIngedients';
import classesCss from './Burger.css';

const burger = (props)=>{
   return (
        <div className={classesCss.Burger}>
            <BurgerIngredients type="bread-top"/>
            <BurgerIngredients type="cheese"/>
            <BurgerIngredients type="bacon"/>
            <BurgerIngredients type="salad"/>
            <BurgerIngredients type="meat"/>
            <BurgerIngredients  type="bread-buttom"/>

        </div>
   );
} 
export default burger;
