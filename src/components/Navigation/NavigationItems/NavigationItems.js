import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classesCss from './NavigationItems.css';

const navigationItems = (props) => (
   
        <ul className={classesCss.NavigationItems} >
            <NavigationItem link="/" active >Burger</NavigationItem>
            <NavigationItem link="/">ChekOut</NavigationItem>
        </ul>
  
);

export default navigationItems