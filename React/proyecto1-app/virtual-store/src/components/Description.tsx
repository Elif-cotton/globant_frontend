import  "../components/Description.module.css"

function Description({ product }) {
    return <>
         <div className="product-description-block">
            <h1 className="title" id="title">
              {product.title}
            </h1>
            <form className="selector">
              <fieldset>
                <label className="label" htmlFor="color">Color</label>
                <select id="color">
                <option value="" disabled selected>Selecciona un color</option>
                      {product.colors.map((color, index) => (
                        <option key={index} value={color}>{color}</option>
                      ))}
                </select>
              </fieldset>
              <fieldset>
                <label className="label" htmlFor="size">Tamaño</label>
                <select id="size">
                  <option value="" disabled selected>Selecciona un tamaño</option>
                  <option value="a">Mediano</option>
                  <option value="a">Grande</option>
                </select>
              </fieldset>
            </form>
            <div className="description">
              <span className="label">Descripción</span>
              <p id="description">
                {product.description}
              </p>
            </div>
          </div>
    </>
}

export default Description;