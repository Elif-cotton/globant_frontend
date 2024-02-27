import  "../components/Thumbs.module.css";

function Thumbs({ product }) {
    return <>
         <div>
            <div className="product-images-block">
              <div className="thumbnail-container">
                <img className="thumbnail" src={product.images[1]} alt="" />
              </div>
              <div className="thumbnail-container">
                <img className="thumbnail" src={product.images[2]} alt="" />
              </div>
            </div>
          </div>
          <div className="thumbnail-container">
            <img id="selected-thumbnail" src={product.images[0]} alt="" />
          </div>
    </>
}

export default Thumbs;