import React, { Component } from 'react';
import classesCss from './Modal.css';
//import OrderSummary from '../../Burger/OrderSummary/OrderSummary';
import Aux from '../../../hoc/Auxiliaire/Auxiliaire';
import BackDrop from '../BackDrop/BackDrop';

class Modal extends Component {

    componentDidUpdate(){
        console.log('[modal] componentDidUpdate !');
    }

    shouldComponentUpdate(nextProps, nextState){
              return (nextProps.summaryShow !== this.props.summaryShow || nextProps.children !== this.props.children);
    }

    render () {
      
        return (
            <Aux>
            <BackDrop  showSummary={this.props.summaryShow} summaryHide={this.props.summaryHide} />
            <div className={classesCss.Modal} 
                style={{ 
                    transform: this.props.summaryShow ? 'translateY(0)' : 'translateY(-100vh)' ,
                    opacity: this.props.summaryShow ? '1' : '0'
            }} >
            { /* <OrderSummary ingredients={props.ingredients} />*/ }
                {this.props.children}
            </div>
        </Aux>
        );
    }
} 

export default Modal ;
