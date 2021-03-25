import  React , { Component } from "react";
import Aux from '../../hoc/Auxiliaire/Auxiliaire';
import Burger from '../../components/Burger/Burger';
import BuildCotrols from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';


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
        totalPrice: 0.5,
        orderdisabled : false,
        showSummary: false
    }

    orderDisabledHandler = (ingredients)=> {

        const arrayIngredientsValues = Object.keys(ingredients).map(
            ingrdKey => {
                return ingredients[ingrdKey];
            }
        ).reduce((total,element)=>{
              return total+element;
        },0);
          //console.log(arrayIngredientsValues);
          this.setState({orderdisabled: arrayIngredientsValues > 0 });
          /*
          if(arrayIngredientsValues > 0) {
              this.state.orderdisabled = false;
          }
          else{
            this.state.orderdisabled = true;
          }
          */

    }

    modalSummaryHandler = ()=> {
        this.setState({showSummary: true})
    };

    addElementHandler = (type) => {
        const currentIngredients = {...this.state.ingredients};
        const currentIngredientValue = currentIngredients[type];
        const ingredientValueAfterAdding = currentIngredientValue+1;
        currentIngredients[type] = ingredientValueAfterAdding;
        const currentPrice = this.state.totalPrice;
        const priceAfterAdding = currentPrice + INGREDIENTS_PRICES[type];

        this.setState({ ingredients : currentIngredients, totalPrice:priceAfterAdding});
        this.orderDisabledHandler(currentIngredients);
        }

    hideSummaryHandler = ()=> {
        this.setState({showSummary: false})
    }    

    continueOrderHandler = () => {
        alert('continue your order !');
    }

    removeElementHandler = (type) => {
        const currentIngredients = {...this.state.ingredients};
        const currentIngredientValue = currentIngredients[type];
        if(currentIngredientValue > 0) {
            const ingredientValueAfterRemoving = currentIngredientValue - 1;
            currentIngredients[type] = ingredientValueAfterRemoving;
            const currentPrice = this.state.totalPrice;
            const oldPrice = INGREDIENTS_PRICES[type];
            const priceAfterRemoving = currentPrice - oldPrice;
        
            //console.log('preicAfter '+priceAfterRemoving);
            
    
            this.setState({ ingredients : currentIngredients, totalPrice:priceAfterRemoving});
            this.orderDisabledHandler(currentIngredients);
        }
    }
        
    render () {
        let disableInfo = {...this.state.ingredients};
        for(let ingrd in disableInfo) {
            /*
            if(disableInfo[ingrd] > 0){
                disableInfo[ingrd] = false;
            }else{
                disableInfo[ingrd] = true;
            }
            */
            disableInfo[ingrd] = disableInfo[ingrd] <= 0;
            // return  disableInfo{ meat : true,salad:false}
        }
     
        return (
            <Aux>
            
                <Modal summaryShow={this.state.showSummary} summaryHide={this.hideSummaryHandler}>
                    <OrderSummary  ingredients={this.state.ingredients} price={this.state.totalPrice}  
                    orderCancel={this.hideSummaryHandler}  orderContinue={this.continueOrderHandler} />
                </Modal>
   
                <Burger  ingredients={this.state.ingredients}  />
                <BuildCotrols  addIngred={this.addElementHandler}  price={this.state.totalPrice}
                removIngrd={this.removeElementHandler} disableButton={disableInfo} 
                OrderButton={this.state.orderdisabled} showSummary={this.modalSummaryHandler}
                ingredientsPrices={INGREDIENTS_PRICES} />

            </Aux>
        );
    };
}
export default BurgerBuilder;