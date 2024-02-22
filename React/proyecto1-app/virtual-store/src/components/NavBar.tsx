import "./NavBar.module.css";
import NavButton from "../components/NavButton";
import { Link } from "react-router-dom";

function NavBar() {
  return <> 
  <header>
        <div className="container">
          <div className="search">
            <div className="logo">
            <Link to="/">
              <img src="/img/tiendamia-logo.svg" width="218" alt="Logo store" />
            </Link>
            </div>
            <div className="form">
              <form><input type="text" placeholder="Search" /></form>
            </div>
            <div className="social">
              <ul>
                <li><a href="https://facebook.com"><img src="/img/facebook.png" alt="Logo social" /></a></li>
                <li><a href="https://instagram.com"><img src="/img/instagram.png" alt="Logo social" /></a></li>
                <li>
                  <Link to="/cart">
                    <img src="/img/cart.png" alt="Carrito de compras" style={{ width: '24px', height: '24px' }}/>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="nav">
            <ul>
              <li><NavButton  text="Ofertas de la semana" to="/oferta" /></li>
              <li><NavButton  text="Cómo comprar" to="/comprar"/></li>
              <li><NavButton  text="Costos y tarifas" to="/costos"/></li>
              <li><NavButton  text="Mis pedidos" to="/pedidos" /></li>
              <li><NavButton  text="Invita y gana" to="/invitar"/></li>
              <li><NavButton  text="Garantía de Entrega" to="/garantia"/></li>
            </ul>
          </div>
        </div>
      </header>
  
   </>
}
export default NavBar;