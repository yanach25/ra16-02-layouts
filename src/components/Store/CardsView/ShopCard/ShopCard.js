import './ShopCard.css'
import cardModel from "../../card.model";

function ShopCard(props) {
    const {card} = props;
    return (
        <div className="card">
            <div className="card-header">
                <div className="card-name">{card.name}</div>
                <div className="card-color">{card.color}</div>
            </div>
            <div className="card-img">
                <img src={card.img} alt={card.img}/>
            </div>
            <div className="card-footer">
                <span>${card.price}</span>
                <button>Add to cart</button>
            </div>
        </div>
    );
}

ShopCard.propType = cardModel;

export default ShopCard;
