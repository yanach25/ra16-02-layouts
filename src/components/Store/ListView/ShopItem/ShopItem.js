import './ShopItem.css';
import cardModel from "../../card.model";

function ShopItem(props) {
    const {card} = props;
    return (
        <div className="shop-item">
            <div className="card-col">
                <img src={card.img} alt={card.img}/>
            </div>
            <div className="card-col">
                <div className="card-name">{card.name}</div>
            </div>
            <div className="card-col">
                <div className="card-color">{card.color}</div>
            </div>
            <div className="card-col price">
                <span>${card.price}</span>
            </div>
            <div className="card-col">
                <button>Add to cart</button>
            </div>
        </div>
    );
}

ShopItem.propType = cardModel;

export default ShopItem;
