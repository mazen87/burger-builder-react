import React from 'react';
import classesCss from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
        <header className={classesCss.Toolbar}>
            <div>MENU</div>
            <div className={classesCss.Logo}>
                <Logo />
            </div>
           
            <nav className={classesCss.DesktopOnly}>
               <NavigationItems />
            </nav>
        </header>
);
export default toolbar;