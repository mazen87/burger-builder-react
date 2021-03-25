import React from 'react';
import classesCss from './ToggleMenu.css';

const toggleMenu = (props) => (
   <div  className={classesCss.ToggleMenu}
         onClick={props.clicked}>
             <div></div>
             <div></div>
             <div></div>
   </div>
);

export default toggleMenu;