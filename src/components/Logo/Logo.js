import React from 'react';
import appLogo from '../../assets/images/burger-logo.png';
import classesCss from './Logo.css';

const logo = (props) => (
    <div className={classesCss.Logo}>
        <img src={appLogo}  alt="My burger" />
    </div>
);
export default logo;