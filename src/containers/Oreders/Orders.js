import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/WithErrorHandler';

class Orders extends Component {
    state = {
        orders : [],
        loading:true
    }

    componentDidMount () {

        axios.get('/orders.json')
        .then(res => {
            let fetchingData = [];
            for (let key in res.data){
              fetchingData.push({
                  ...res.data[key],
                  id:key
              })
            }
            //console.log(fetchingData);
            this.setState({orders:fetchingData,loading:false});
            //console.log(this.state.orders);
        })
        .catch(error => this.setState({loading:false}));

    }

    render () {

        return (
            <div>
                <Order />
                <Order />

            </div>
        );
    }
}

export default withErrorHandler(Orders,axios) ;