import "./ProductCard.module.css";
import { Link } from "react-router-dom";

function ProductCard(props) {
    const { id, title, color, price, image, description, quantity } = props;
    return (
    <Link to={"/product/" + id} className="product-card">
        <img className="product-img" src={image} alt={id}/>
            <div className="product-info">
              <span className="product-title">{title}</span>
              <p className="product-description">{description}</p>
              <p className="product-description">Cantidad: {quantity}</p>
              <span className="product-description">Color: {color}</span><br />
              <div className="product-price-block">
                <span className="price">${price}</span>
                <span className="discount">50% Off</span>
              </div>
              <div className="product-tax-policy">Incluye impuesto País y percepción AFIP</div>
            </div>
    </Link>
           
   );
    
}

export default ProductCard;