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
                value : '',
                valdation :{
                    required :true
                },
                valid : false,
                touched : false

            },
            email : {
                elementType : 'input',
                elementAttributes : {
                    type: 'email',
                    placeholder :'your Email'
                },
                value : '',
                valdation :{
                    required :true
                },
                valid : false,
                touched : false
            },
            adress : {
                elementType : 'input',
                elementAttributes : {
                    type: 'text',
                    placeholder :'your Adress'
                },
                value : '',
                valdation :{
                    required :true
                },
                valid : false,
                touched : false
            },
            postalCode : {
                elementType : 'input',
                elementAttributes : {
                    type: 'text',
                    placeholder :'your postalCode'
                },
                value : '',
                valdation :{
                    required :true,
                    minLength : 5,
                    maxLength : 5
                },
                valid : false,
                touched : false
            },
            contry : {
                elementType : 'input',
                elementAttributes : {
                    type: 'text',
                    placeholder :'Country'
                },
                value : '',
                valdation :{
                    required :true
                },
                valid : false,
                touched : false
            },
            deliveryMethod : {
                elementType : 'select',
                elementAttributes : {
                   options : [
                    {
                        value:'',displyValue : 'Choose a delivery method'
                     },
                    {
                       value:'fastest',displyValue : 'Fastest'
                    },
                    {
                        value:'cheapest', displyValue : 'Cheapest'
                    }

                    ]
                },
                value : '',
                valdation :{
                    required :true
                },
                valid : true,
                touched : false
            },

            
        },
        formIsValid :false,
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
/*         event.preventDefault();
 */      
        let formData = {};
        for (let identifier in this.state.orderForm){
           
            formData[identifier] = this.state.orderForm[identifier].value;
        }
        this.setState({showSpinner: true});
        const order = {
            ingredients : this.props.ingredients,
            price: this.props.price,
            orderData : formData
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
        event.preventDefault();
        const orderFormUpdate = {... this.state.orderForm};
        const formElementUpadate = {...orderFormUpdate[elemntIdentifier]}
        
        let orderFormIsValid = true;
        for (let identifier in orderFormUpdate){
            orderFormIsValid = orderFormUpdate[identifier].valid && orderFormIsValid;
        }
        formElementUpadate.value = event.target.value;
        formElementUpadate.touched = true;
        formElementUpadate.valid = this.formValidation(formElementUpadate.value,formElementUpadate.valdation);
        console.log (formElementUpadate);
        orderFormUpdate[elemntIdentifier] = formElementUpadate;
        this.setState({ 
            orderForm : orderFormUpdate,
            formIsValid : orderFormIsValid
        })

       
    }

    formValidation = (value ,rules)=> {
        let isValid =true;
        if(rules.required && isValid){
            isValid = value.trim() !== '';
        } 

        if(rules.maxLength && isValid) {
            isValid  = value.length <= rules.maxLength;
        }

        if(rules.minLength && isValid) {
            isValid  = value.length >= rules.minLength;
        }
     
        return isValid;
    }
    render () {
        const formArray = [];
        for (let key in this.state.orderForm){
            formArray.push({
                id:key,
                elementConfig : this.state.orderForm[key]
            })
        };


        let form = (
            <form onSubmit={this.orderHandler}>
                {formArray.map(
                    formArrayElement => 
                    (
                        <FormInput  changed={(event)=> this.onChangeHandler(event,formArrayElement.id )}
                                    elementType={formArrayElement.elementConfig.elementType} 
                                    key={formArrayElement.id}
                                    elementAttributes={formArrayElement.elementConfig.elementAttributes}
                                    value={formArrayElement.elementConfig.value} 
                                    invalid={!formArrayElement.elementConfig.valid}
                                    touched={formArrayElement.elementConfig.touched}
                                    
                        />
                    )
                )}
       {/*  <FormInput inputtype="input" type="text" placeholder="your Name" />
            <FormInput inputtype="input" type="email" placeholder="your Email" />
            <FormInput inputtype="input" type="text" placeholder="your Street" />
            <FormInput inputtype="input" type="text" placeholder="Postal code " /> */}


            <Button btnType="Success" disabled={!this.state.formIsValid}> Order</Button>
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