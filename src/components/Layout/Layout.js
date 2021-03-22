import React from 'react';
import Aux from '../../hoc/Auxiliaire';
import classesCss from './Layout.css';

const Layout = (props)=> (
    <Aux>
        <div> Toolbar ,SideDrawer , Backdrop </div>
        <main className={classesCss.MainContent}>
            {props.children} 
        </main>
    </Aux>    
);

export default Layout;