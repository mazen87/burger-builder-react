import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classesCss from './NavigationItems.css';

const navigationItems = (props) => (
   
        <ul className={classesCss.NavigationItems} >
            <NavigationItem link="/" exact >Burger</NavigationItem>
            <NavigationItem link="/orders">Orders</NavigationItem>
        </ul>
  
);

export default navigationItems