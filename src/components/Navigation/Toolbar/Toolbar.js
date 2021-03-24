import React from 'react';
import classesCss from './Toolbar.css';

const toolbar = (props) => (
        <header className={classesCss.Toolbar}>
            <div>LOGO</div>
            <div>MENU</div>
            <nav>
                <ul>
                    ...
                </ul>
            </nav>
        </header>
);
export default toolbar;