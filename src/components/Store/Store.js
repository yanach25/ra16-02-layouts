import React from "react";
import products from "../../products";
import IconSwitch from "../IcontSwitch/IconSwitch";
import CardsView from "./CardsView/CardsView";
import ListView from "./ListView/ListView";

class Store extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            icon: 'view_module',
            products,
        }
    }

    onSwitch = (icon) => {
        const newIcon = icon === 'view_module' ? 'view_list' : 'view_module';
        this.setState((prevState) => ({...prevState, icon: newIcon}));
    }

    render() {
        const productsComponent = this.state.icon === 'view_module'
            ? <CardsView cards={this.state.products}/>
            : <ListView cards={this.state.products}/>;
        return (
            <div>
                <IconSwitch icon={this.state.icon} onSwitch={this.onSwitch}/>
                {productsComponent}
            </div>
        )
    }
}

export default Store
