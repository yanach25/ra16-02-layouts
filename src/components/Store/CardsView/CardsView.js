import ShopCard from "./ShopCard/ShopCard";
import './CardsView.css';
import PropTypes from "prop-types";
import cardModel from "../card.model";

function CardView(props) {
    const {cards} = props;
    const cardsItems = cards.map((card, index) => <div key={index} className="card-wrapper"><ShopCard card={card}/></div>)

    return (
        <div className="cards-container">
            {cardsItems}
        </div>
    );
}

CardView.propTypes = {
    cards: PropTypes.arrayOf(
        PropTypes.shape(
            cardModel
        )
    )
}

export default CardView;
