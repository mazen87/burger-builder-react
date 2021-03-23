import React from 'react';
import classesCss from './Modal.css';
//import OrderSummary from '../../Burger/OrderSummary/OrderSummary';

const modal = (props) => (
    <div className={classesCss.Modal} 
         style={{ 
             transform: props.summaryShow ? 'translateY(0)' : 'translateY(-100vh)' ,
             opacity: props.summaryShow ? '1' : '0'
     }} >
     { /* <OrderSummary ingredients={props.ingredients} />*/ }
     {props.children}
    </div>
);

export default modal ;
