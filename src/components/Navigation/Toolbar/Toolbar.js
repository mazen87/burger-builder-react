import React from 'react';
import classesCss from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import ToggleMenu from '../SideDrawer/ToggleMenu/ToggleMenu';

const toolbar = (props) => (
        <header className={classesCss.Toolbar}>
           <ToggleMenu clicked={props.toggle}/>
           <div className={classesCss.Logo}>
                <Logo />
            </div>
           
            <nav className={classesCss.DesktopOnly}>
               <NavigationItems />
            </nav>
        </header>
);
export default toolbar;