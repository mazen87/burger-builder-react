import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classesCss from './SideDrawer.css';

const sideDrawer = (props) => {
    return ( 
    <div className={classesCss.SideDrawer}>
        <div className={classesCss.Logo}>
                <Logo />
        </div>
        
        <nav>
            <NavigationItems />
        </nav>
    </div>
    );
}

export default sideDrawer;