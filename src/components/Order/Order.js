import React from 'react';
import classesCss from './Order.css';

const order = (props) => (
    <div className={classesCss.Order}>
        <p>Ingredients : Salad (1)</p>
        <p>Price :<strong> 4.44 €</strong></p>

    </div>
);

export default order;