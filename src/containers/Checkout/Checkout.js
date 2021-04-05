import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import {Route} from 'react-router-dom';

class Checkout extends Component {

    state= {
        ingredients : null
    }

 /*    constructor (props) {
        super(props);
        const query = new URLSearchParams(this.props.location.search);
        const paramIngredients = {};
        for (let param of query.entries()){
            paramIngredients[param[0]] = +param[1];
        }

        this.setState({ingredients:paramIngredients});

    } */
     componentWillMount () {
        const query = new URLSearchParams(this.props.location.search);
        const paramIngredients = {};
        let price =0;
        for (let param of query.entries()){
            if(param[0] === 'price'){
                price = +param[1];
            }else {
                paramIngredients[param[0]] = +param[1];
            }
         
        }

        this.setState({ingredients:paramIngredients , totalPrice:price});
    }  
    cancelCheckoutHandler = ()=> {
       /*  const queryParams = [];
        for (let i in this.state.ingredients){
            queryParams.push(encodeURIComponent(i)+'='+encodeURIComponent(this.state.ingredients[i]));
        }
        const queryParamsString = queryParams.join('&'); */
        this.props.history.goBack();
    }

    continueCheckoutHandler = ()=> {
        this.props.history.replace('/checkout/contact-data');
    }

    
    
    render () {

        return (
            <div>
                <CheckoutSummary  ingredients={this.state.ingredients} 
                continueCheckout={this.continueCheckoutHandler}
                cancelCheckout={this.cancelCheckoutHandler} />
                <Route path={this.props.match.path+'/contact-data'}  
                    render={(props) => (<ContactData  ingredients={this.state.ingredients}  price={this.state.totalPrice}  {...props} /> )}
                />
            </div>
         
        );
    }
}

export default Checkout;