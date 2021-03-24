import React from 'react';
import Aux from '../../hoc/Auxiliaire';
import classesCss from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

const Layout = (props)=> (
    <Aux>
        <Toolbar />
        <main className={classesCss.MainContent}>
            {props.children} 
        </main>
    </Aux>    
);

export default Layout;