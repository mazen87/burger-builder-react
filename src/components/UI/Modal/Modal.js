import React from 'react';
import classesCss from './Modal.css';
//import OrderSummary from '../../Burger/OrderSummary/OrderSummary';

const modal = (props) => (
    <div className={classesCss.Modal} >
     { /* <OrderSummary ingredients={props.ingredients} />*/ }
     {props.children}
    </div>
);

export default modal ;
