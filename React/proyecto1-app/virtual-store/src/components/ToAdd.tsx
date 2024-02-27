import  "../components/ToAdd.module.css";
import { useEffect, useState } from 'react';

function ToAdd({ product }) {
  // Definir un estado con un número
  const [quantity, setQuantity] = useState(1);
   // Calcular el subtotal del producto
   const subtotal = (product?.price * quantity).toLocaleString();
   // Estado para controlar el estado del botón (añadido al carrito o no)
   const [button, setButton] = useState(false);

    // Cargar datos del localStorage al cargar el componente
    useEffect(() => {
      const storedButton = localStorage.getItem('button');
      if (storedButton) {
          setButton(JSON.parse(storedButton));
      }
  }, []);

  // Actualizar el localStorage cuando cambia el estado del botón
  useEffect(() => {
      localStorage.setItem('button', button.toString());
  }, [button]);

  // Función para añadir o quitar un producto al carrito
  const handleAddToCart = () => {
      setButton(!button); // Cambia el estado del botón
      if (!button) {
          // Si se agrega al carrito, guardar el producto en localStorage
          localStorage.setItem('product', JSON.stringify(product));
      } else {
          // Si se quita del carrito, eliminar el producto del localStorage
          localStorage.removeItem('product');
      }
  };

    
    return <>
        
        <div className="product-checkout-block">
            <div className="checkout-container">
              <span className="checkout-total-label">Precio Unidad:</span>
              <h2 className="checkout-total-price" id="price">${product.price.toLocaleString()}</h2>
              <span className="checkout-total-label">Precio Total:</span>
              <h2 className="checkout-total-price" id="price">${subtotal}</h2>
              <p className="checkout-description">
                Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$
                50711 haciendo la solicitud en AFIP.
              </p>
              <ul className="checkout-policy-list">
                <li>
                  <span className="policy-icon"><img src="../img/truck.png" alt="Truck"/>
                    </span>
                  <span className="policy-desc">
                    Agrega el producto al carrito para conocer los costos de envío</span>
                </li>
                <li>
                  <span className="policy-icon"
                    ><img src="../img/plane.png" alt="Plane"
                  /></span>
                  <span className="policy-desc"
                    >Recibí aproximadamente entre 10 y 15 días hábiles,
                    seleccionando envío normal</span>
                </li>
              </ul>
              <div className="checkout-process">
                <div className="top">

                  <input id="input-quantity" type="number"  min="1"  
                  defaultValue={quantity} onChange={(event) => setQuantity(Number(event.target.value))}/>

                  {/* Botón que cambia de estado al ser clickeado */}
                  <button 
                      onClick={() => {
                          handleAddToCart(); // Lógica para añadir/quitar un producto al carrito
                          setButton(!button); // Cambia el estado del botón
                      }}
                      className={button ? "btn-off" : "btn-outline"} // Cambia la clase del botón según el estado
                      id="btn-add-to-cart">
                      {button ? "Quitar" : "Añadir"} al Carrito {/* Cambia el texto del botón según el estado */}
                  </button>
                </div>


                <div className="bottom">
                  <button className="btn-outline" id="btn-add-to-cart">
                    Comprar
                  </button>
                </div>
              </div>
            </div>
        </div>
    </>
}

export default ToAdd;