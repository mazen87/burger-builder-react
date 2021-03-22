import  React , { Component } from "react";
import Aux from '../../hoc/Auxiliaire';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

    state = {
        ingredients : {
            bacon: 0,
            cheese:0,
            meat : 0,
            salad: 0
           
        }
    }
    render () {
        return (
            <Aux>
                <Burger  ingredients={this.state.ingredients} />
                <div> Burger Build controls </div>
            </Aux>
        );
    };
}
export default BurgerBuilder;