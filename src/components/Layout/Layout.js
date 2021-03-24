import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliaire';
import classesCss from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
//import BackDrop from '../UI/BackDrop/BackDrop';

class Layout extends Component {
   
    state = {
        showSideDrawer : true
    }

    closeBackDropSideDrawerHandler = ()=> {
            this.setState({showSideDrawer:false});
    }

    render () {
       

        return (
            <Aux>
       
                <Toolbar />
                <SideDrawer  showSideDrawer={this.state.showSideDrawer} close={this.closeBackDropSideDrawerHandler}/>
               {/*  <BackDrop  showSummary={this.state.showSideDrawer} summaryHide={this.closeBackDropSideDrawerHandler} /> */}
                <main className={classesCss.MainContent}>
                    {this.props.children} 
                </main>
            </Aux>    
        );
    }
}
export default Layout;