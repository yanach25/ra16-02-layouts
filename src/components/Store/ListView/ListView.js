import ShopItem from "./ShopItem/ShopItem";
import './ListView.css';
import PropTypes from "prop-types";
import cardModel from "../card.model";

function ListView(props) {
    const {cards} = props;
    const cardsItems = cards.map((card, index) => <div key={index} className="item-wrapper"><ShopItem card={card}/></div>)

    return (
        <div className="list-container">
            {cardsItems}
        </div>
    );
}

ListView.propTypes = {
    cards: PropTypes.arrayOf(
        PropTypes.shape(
            cardModel
        )
    )
}

export default ListView;
