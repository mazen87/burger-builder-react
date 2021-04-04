import React from 'react';
import Button from '../UI/Button/Button';
import Burger from '../Burger/Burger';
import classesCss from './CheckoutSummary.css';

const checkoutSummary = (props) => {
  
    return (
        <div className={classesCss.CheckoutSummary}>
            <h1>we hope it tastes well !</h1>
            <div style={{  width: '100%', margin: 'auto'}}>'
                <Burger ingredients={props.ingredients} />
            </div>
            <Button btnType="Success"> continue</Button>
            <Button btnType="Danger"> Cancel</Button>
        </div>
    );

}

export default checkoutSummary;