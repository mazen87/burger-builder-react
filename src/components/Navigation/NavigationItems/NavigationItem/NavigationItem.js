import React from 'react';
import classesCss from './NavigationItem.css';

const navigationItem = (props) => (
    <li className={classesCss.NavigationItem}> 
        <a href={props.link}  className={props.active ? classesCss.active : null}> {props.children} </a>
    </li>
);
export default navigationItem;