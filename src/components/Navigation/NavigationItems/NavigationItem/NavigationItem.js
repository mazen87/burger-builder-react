import React from 'react';
import classesCss from './NavigationItem.css';
import {NavLink} from 'react-router-dom';

const navigationItem = (props) => (
    <li className={classesCss.NavigationItem}> 
        <NavLink  activeClassName={classesCss.active} to={props.link} exact={props.exact}> {props.children} </NavLink>
    </li>
);
export default navigationItem;