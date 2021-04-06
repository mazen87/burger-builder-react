import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classesCss from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import FormInput from '../../../components/UI/FormInput/FormInput';

class ContactData extends Component {
    state = {
        orderForm : {
            name : {
                elementType : 'input',
                elementAttributes : {
                    type: 'text',
                    placeholder :'your Name'
                },
                value : ''
            },
            email : {
                elementType : 'input',
                elementAttributes : {
                    type: 'email',
                    placeholder :'your Email'
                },
                value : ''
            },
            adress : {
                elementType : 'input',
                elementAttributes : {
                    type: 'text',
                    placeholder :'your Adress'
                },
                value : ''
            },
            postaCode : {
                elementType : 'input',
                elementAttributes : {
                    type: 'text',
                    placeholder :'your postalCode'
                },
                value : ''
            },
            contry : {
                elementType : 'input',
                elementAttributes : {
                    type: 'text',
                    placeholder :'Country'
                },
                value : ''
            },
            deliveryMethod : {
                elementType : 'select',
                elementAttributes : {
                   options : [
                    {
                       value:'fastest',displyValue : 'Fastest'
                    },
                    {
                        value:'cheapest', displyValue : 'Cheapest'
                    }

                    ]
                },
                value : ''
            },
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

            /* customer: {
                adress: {
                    country:'portugal',
                    street: 'sopreStreet 44',
                    zipCode : '43556',
                },
                email: 'master@email.com',
                name: 'Master grosso'
            },
            deliveryMethod: 'fastest' */

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

    onChangeHandler = (event,elemntIdentifier)=> {
        const orderFormUpdate = {... this.state.orderForm};
        const formElementUpadate = {...this.state.orderForm[elemntIdentifier]}

        formElementUpadate.value = event.target.value;
        orderFormUpdate[elemntIdentifier] = formElementUpadate;

        this.setState({ 
            orderForm : orderFormUpdate
        })

       
    }

    render () {
        let formArray = [];
        for (let key in this.state.orderForm){
            formArray.push({
                id:key,
                elementConfig : this.state.orderForm[key]
            })
        };


        let form = (
            <form>
                {formArray.map(
                    formArrayElement => 
                    (
                        <FormInput  changed={(event)=> this.onChangeHandler(event,formArrayElement.id )}
                                    elementType={formArrayElement.elementConfig.elementType} 
                                    key={formArrayElement.id}
                                    elementAttributes={formArrayElement.elementConfig.elementAttributes}
                                    /* value={formArrayElement.elementConfig.value} */
                        />
                    )
                )}
       {/*  <FormInput inputtype="input" type="text" placeholder="your Name" />
            <FormInput inputtype="input" type="email" placeholder="your Email" />
            <FormInput inputtype="input" type="text" placeholder="your Street" />
            <FormInput inputtype="input" type="text" placeholder="Postal code " /> */}


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