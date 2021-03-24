import React from 'react';
import classesCss from './Toolbar.css';
import Logo from '../../Logo/Logo';

const toolbar = (props) => (
        <header className={classesCss.Toolbar}>
            <div>MENU</div>
            <Logo />
            <nav>
                <ul>
                    ...
                </ul>
            </nav>
        </header>
);
export default toolbar;