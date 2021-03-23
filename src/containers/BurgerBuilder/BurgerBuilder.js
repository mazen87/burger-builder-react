import  React , { Component } from "react";
import Aux from '../../hoc/Auxiliaire';
import Burger from '../../components/Burger/Burger';
import BuildCotrols from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENTS_PRICES = {
    salad: 0.6,
    bacon: 0.8,
    cheese: 1,
    meat: 1.5
}

class BurgerBuilder extends Component {

    state = {
        ingredients : {
            bacon: 0,
            cheese:0,
            meat : 0,
            salad: 0
        },
        totalPrice: 0
    }

    addElementHandler = (type) => {
        const currentIngredients = {...this.state.ingredients};
        const currentIngredientValue = currentIngredients[type];
        const ingredientValueAfterAdding = currentIngredientValue+1;
        currentIngredients[type] = ingredientValueAfterAdding;
        const currentPrice = this.state.totalPrice;
        const priceAfterAdding = currentPrice + INGREDIENTS_PRICES[type];

        this.setState({ ingredients : currentIngredients, totalPrice:priceAfterAdding});
        }

    render () {
        return (
            <Aux>
                <Burger  ingredients={this.state.ingredients}  />
                <BuildCotrols  addIngred={this.addElementHandler} />
            </Aux>
        );
    };
}
export default BurgerBuilder;