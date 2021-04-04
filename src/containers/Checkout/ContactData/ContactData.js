import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classesCss from './ContactData.css';

class ContactData extends Component {
    state = {
        name :'',
        email :'',
        adress : {
            street:'',
            postalCode : ''
        }
    }

    render () {
        return (
            <div className={classesCss.ContactData}>
                <h4>Please insert your contact data ! </h4>
                <form>
                    <input type="text" placeholder="your Name" />
                    <input type="email" placeholder="your Email" />
                    <input type="text" placeholder="your Street" />
                    <input type="text" placeholder="Postal code " />
                    <Button btnType="Success"> Order</Button>
                </form>
            </div>
        );
    }
}
export default ContactData;