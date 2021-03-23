import React from 'react';
import classesCss from './Modal.css';
//import OrderSummary from '../../Burger/OrderSummary/OrderSummary';
import Aux from '../../../hoc/Auxiliaire';
import BackDrop from '../BackDrop/BackDrop';

const modal = (props) => (
    <Aux>
        <BackDrop  showSummary={props.summaryShow} summaryHide={props.summaryHide} />
        <div className={classesCss.Modal} 
            style={{ 
                transform: props.summaryShow ? 'translateY(0)' : 'translateY(-100vh)' ,
                opacity: props.summaryShow ? '1' : '0'
        }} >
        { /* <OrderSummary ingredients={props.ingredients} />*/ }
            {props.children}
        </div>
    </Aux>
);

export default modal ;
