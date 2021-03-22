import  React , { Component } from "react";
import Aux from '../../hoc/Auxiliaire';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

    render () {
        return (
            <Aux>
                <Burger />
                <div> Burger Build controls </div>
            </Aux>
        );
    };
}
export default BurgerBuilder;