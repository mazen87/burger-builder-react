import REact from 'react';
import BurgerBuilder from '../../../../containers/BurgerBuilder/BurgerBuilder';
import classesCss from './BurgerIngredients.css';

const BurgerIngredients = (props)=> {
    let ingredients = null;

    switch(props.type) {
        case 'bread-buttom' :
            ingredients = <div className={classesCss.BreadBottom}> </div>;
            break;
        case 'bread-top' :
            ingredients = (
                <div className={classesCss.BreadTop}>
                        <div className={classesCss.Seed1}></div>
                        <div className={classesCss.Seed2}></div>
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
        case 'bacon' : 
            ingredients = <div className={classesCss.Bacon}></div>   
            break;
        default :
            ingredients = null;                    
    };

    return ingredients;

};

export default BurgerIngredients;