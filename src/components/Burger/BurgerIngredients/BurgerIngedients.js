import React from 'react';
import classesCss from './BurgerIngredients.css';
import PropTypes from 'prop-types';

const burgerIngredients = (props)=> {
    let ingredients = null;

    switch(props.type) {
        case 'bread-buttom' :
            ingredients = <div className={classesCss.BreadBottom}> </div>;
            break;
        case 'bread-top' :
            ingredients = (
                <div className={classesCss.BreadTop}>
                        <div className={classesCss.Seeds1}></div>
                        <div className={classesCss.Seeds2}></div>
                </div>
                );    
            break;
        case 'meat'  :
            ingredients = <div className={classesCss.Meat}></div>
            break;
        case 'cheese' : 
            ingredients = <div className={classesCss.Cheese}></div>
            break;
        case 'salad' : 
            ingredients = <div className={classesCss.Salad}></div> 
            break;
            case 'onion' : 
            ingredients = <div className={classesCss.Onion}></div> 
            break;
        case 'bacon' : 
            ingredients = <div className={classesCss.Bacon}></div>   
            break;
        default :
            ingredients = null;                    
    };

    return ingredients;
};

burgerIngredients.propTypes = {
    type : PropTypes.string.isRequired
};

export default burgerIngredients;