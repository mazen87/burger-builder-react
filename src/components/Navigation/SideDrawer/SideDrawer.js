import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classesCss from './SideDrawer.css';
import Aux from '../../../hoc/Auxiliaire/Auxiliaire';
import BackDrop from '../../UI/BackDrop/BackDrop';

const sideDrawer = (props) => {
    let animationClass = [classesCss.SideDrawer,classesCss.Close];
    if(props.showSideDrawer){
        animationClass = [classesCss.SideDrawer, classesCss.Open];

    }
    return ( 
        <Aux>
            <BackDrop showSummary={props.showSideDrawer} summaryHide={props.close}/>
            <div className={animationClass.join(' ')}>
                <div className={classesCss.Logo}>
                    <Logo />
                </div>
            
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
        
    );
}

export default sideDrawer;