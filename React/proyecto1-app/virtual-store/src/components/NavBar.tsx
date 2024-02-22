import "./NavBar.css";
import NavButton from "../components/NavButton";

function NavBar() {
  return <> 
  <header>
        <div className="container">
          <div className="search">
            <div className="logo"><img src="/img/tiendamia-logo.svg" width="218" alt="Logo store" /></div>
            <div className="form">
              <form><input type="text" placeholder="Search" /></form>
            </div>
            <div className="social">
              <ul>
                <li><a href="https://facebook.com"><img src="/img/facebook.png" alt="Logo social" /></a></li>
                <li><a href="https://instagram.com"><img src="/img/instagram.png" alt="Logo social" /></a></li>
              </ul>
            </div>
          </div>
          <div className="nav">
            <ul>
              <li><NavButton  text="Ofertas de la semana"/></li>
              <li><NavButton  text="Cómo comprar"/></li>
              <li><NavButton  text="Costos y tarifas"/></li>
              <li><NavButton  text="Mis pedidos"/></li>
              <li><NavButton  text="Invita y gana"/></li>
              <li><NavButton  text="Garantía de Entrega"/></li>
            </ul>
          </div>
        </div>
      </header>
  
   </>
}
export default NavBar;