import React from 'react';
import Aux from '../../hoc/Auxiliaire';
import classesCss from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const Layout = (props)=> (
    <Aux>
       
        <Toolbar />
        <SideDrawer />
        <main className={classesCss.MainContent}>
            {props.children} 
        </main>
    </Aux>    
);

export default Layout;