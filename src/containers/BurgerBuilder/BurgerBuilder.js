import  React , { Component } from "react";
import Aux from '../../hoc/Auxiliaire/Auxiliaire';
import Burger from '../../components/Burger/Burger';
import BuildCotrols from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/WithErrorHandler';

const INGREDIENTS_PRICES = {
    salad: 0.6,
    bacon: 0.8,
    cheese: 1,
    meat: 1.5,
    onion: 0.4
}

class BurgerBuilder extends Component {

    state = {
        ingredients : null,
        /*
        {
            bacon: 0,
            cheese:0,
            meat : 0,
            salad: 0,
            onion:0
        }
        
        ,
        */
        totalPrice: 0.5,
        orderdisabled : false,
        showSummary: false,
        showSpinner:false,
        orderSaved:false,
    }

    componentDidMount () {

         axios.get('https://react-my-burger-74e2c-default-rtdb.firebaseio.com/ingredients.json')
        .then(response => {
            this.setState({ingredients : response.data});
        })
        .catch(error => this.setState({error: true})); 
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

  /*   continueOrderHandler = () => {
        //alert('continue your order !');
        this.setState({showSpinner: true});
        const order = {
            ingredients : this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                adress: {
                    country:'portugal',
                    street: 'sopreStreet 44',
                    zipCode : '43556',
                },
                email: 'master@email.com',
                name: 'Master grosso'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
        .then(response =>   {
            this.setState({showSpinner:false ,showSummary:false});
            console.log(response);
           if(response){
            this.setState({orderSaved: true})
            this.hideMessageOrderSavedHandler();
           }
         
        
        })
        .catch(error => this.setState({showSpinner: false ,showSummary:false , overSaved:false}));
    }
 */
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

    continueToCheckoutHandler  = ()  => {
        const queryParams = [];
        for (let i in this.state.ingredients){
            queryParams.push(encodeURIComponent(i)+'='+encodeURIComponent(this.state.ingredients[i]));
        }
        queryParams.push('price='+this.state.totalPrice);
        const queryParamsString = queryParams.join('&');
        this.props.history.push({
            pathname : '/checkout',
            search : '?'+queryParamsString
        });
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

        let orderSummary =  null;
        
        {/* <OrderSummary  ingredients={this.state.ingredients} 
                                price={this.state.totalPrice}  
                                orderCancel={this.hideSummaryHandler}  
                                orderContinue={this.continueOrderHandler} />; */}

        if(this.state.showSpinner){
           orderSummary =  <Spinner />
        }
         
       /*  let message =null;
        if(this.state.orderSaved){
         message = <div style={{width:'100%',height:'200px', margin:'auto',color:'green',padding: '10px' , 
                        textAlign:'center', fontWeight:'bold',fontSize:'2em'}}>
                            order has been registered successfully
                          </div>
        }
 */
        let burger = this.state.error ? <p style={{textAlign:'center' ,color:'red', fontWeight:'bold' ,fontSize:'1.5em'}}>
             ingredients can not be loaded ! </p> : <Spinner />
        if(this.state.ingredients){

            orderSummary = <OrderSummary ingredients={this.state.ingredients} 
            price={this.state.totalPrice}  
            orderCancel={this.hideSummaryHandler}  
            //orderContinue={this.continueOrderHandler} 
            goToCheckout={this.continueToCheckoutHandler}
            />;


            burger = (
                
            <Aux>    
                <Burger  ingredients={this.state.ingredients}  />
           {/*      {message} */}
                <BuildCotrols  addIngred={this.addElementHandler}  price={this.state.totalPrice}
                removIngrd={this.removeElementHandler} disableButton={disableInfo} 
                OrderButton={this.state.orderdisabled} showSummary={this.modalSummaryHandler}
                ingredientsPrices={INGREDIENTS_PRICES} /> 
            </Aux>    
            );
        }

        return (
            <Aux>
            
                <Modal summaryShow={this.state.showSummary} summaryHide={this.hideSummaryHandler}>
                  {orderSummary}
                </Modal>
                {/* 
                <Burger  ingredients={this.state.ingredients}  />
                {message}
                <BuildCotrols  addIngred={this.addElementHandler}  price={this.state.totalPrice}
                removIngrd={this.removeElementHandler} disableButton={disableInfo} 
                OrderButton={this.state.orderdisabled} showSummary={this.modalSummaryHandler}
                ingredientsPrices={INGREDIENTS_PRICES} /> */} 
                {burger}

            </Aux>
        );
    };
}
export default withErrorHandler(BurgerBuilder,axios);