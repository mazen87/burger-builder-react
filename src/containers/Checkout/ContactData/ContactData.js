import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classesCss from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import FormInput from '../../../components/UI/FormInput/FormInput';

class ContactData extends Component {
    state = {
        name :'',
        email :'',
        adress : {
            street:'',
            postalCode : ''
        },
        showSpinner:false,
        totalPrice:0.5,
        orderSaved:false
    }

    hideMessageOrderSavedHandler = () => {
        setTimeout(()=>{
            this.setState({orderSaved:false});
            this.props.history.push('/');
        },2200);
    };

    orderHandler = () => {
        this.setState({showSpinner: true});
        const order = {
            ingredients : this.props.ingredients,
            price: this.props.price,
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

    render () {
        let form = (
            <form>
            <FormInput inputtype="input" type="text" placeholder="your Name" />
            <FormInput inputtype="input" type="email" placeholder="your Email" />
            <FormInput inputtype="input" type="text" placeholder="your Street" />
            <FormInput inputtype="input" type="text" placeholder="Postal code " />
            <Button btnType="Success" clicked={this.orderHandler}> Order</Button>
        </form>
        );

        if(this.state.showSpinner){
            form = <Spinner />
        }
        

        let message =null;
        if(this.state.orderSaved){
         message = <div style={{width:'100%',height:'200px', margin:'auto',color:'green',padding: '10px' , 
                        textAlign:'center', fontWeight:'bold',fontSize:'2em'}}>
                            order has been registered successfully
                          </div>
        }


        return (
            <div className={classesCss.ContactData}>
                <h4>Please insert your contact data ! </h4>
                {message}
                {form}
            </div>
        );
    }
}
export default ContactData;