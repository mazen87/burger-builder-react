import React, { Component } from 'react';
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import {Route} from 'react-router-dom';

class Checkout extends Component {

    state= {
        ingredients : {
            salad:1,
            cheese:1,
            meat:1,
            bacon:1,
            onion:1
        }
    }

    componentDidMount () {
        const query = new URLSearchParams(this.props.location.search);
        const paramIngredients = {};
        for (let param of query.entries()){
            paramIngredients[param[0]] = +param[1];
        }

        this.setState({ingredients:paramIngredients});
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
                <Route path={this.props.match.path+'/contact-data'} component={ContactData} />
            </div>
         
        );
    }
}

export default Checkout;