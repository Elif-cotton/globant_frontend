import "./ProductCard.module.css";

function ProductCard(props) {
    const { id, title, color, price, image } = props
    return <>
        <article className="product-card">
            <img className="product-img" src={image} alt={id}/>
            <div className="product-info">
              <span className="product-title">{title}</span>
              <span className="product-description">{color}</span>
              <div className="product-price-block">
                <span className="price">{price}</span>
                <span className="discount">50% Off</span>
              </div>
              <div className="product-tax-policy">Incluye impuesto País y percepción AFIP</div>
            </div>
          </article>
    </>
    
}

export default ProductCard;