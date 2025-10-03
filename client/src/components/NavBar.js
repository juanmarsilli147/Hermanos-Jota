import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

import "../css/App.css";
import logo from "../assets/img/logoinvertido.svg";

export default function Navbar() {
  // Estado del menú hamburguesa
  const [menuAbierto, setMenuAbierto] = useState(false);

  // Estado del carrito
  const [contador, setContador] = useState(
    parseInt(sessionStorage.getItem("contadorCarrito")) || 0
  );

  // Actualiza sessionStorage cada vez que cambie el contador
  useEffect(() => {
    sessionStorage.setItem("contadorCarrito", contador);
  }, [contador]);

  // Función para simular agregar productos al carrito
  const agregarAlCarrito = () => {
    setContador((prev) => prev + 1);
  };

  return (
    <header>
      {/* Logo */}
      <section className="logo">
        <img src={logo} alt="Logo" />
        <h1 className="nombre-marca">Hermanos JOTA</h1>
      </section>

      {/* Botón abrir menú (mobile) */}
      <button className="abrir-menu" onClick={() => setMenuAbierto(true)}>
        <FontAwesomeIcon icon={faBars} size="2x" />
      </button>

      {/* Menú de navegación */}
      <nav className={`nav ${menuAbierto ? "visible" : ""}`} id="nav">
        {/* Botón cerrar menú (mobile) */}
        <button className="cerrar-menu" onClick={() => setMenuAbierto(false)}>
          <FontAwesomeIcon icon={faXmark} size="2x" />
        </button>

        <ul className="links-nav">
          <li className="nav-link">
            <a href="/">Inicio</a>
          </li>
          <li className="in-page">
            <a href="/productos">Productos</a>
          </li>
          <li className="nav-link">
            <a href="/contacto">Contacto</a>
          </li>
          <li className="li-botones">
            <button className="nav-mi-perfil">Mi perfil</button>
            <div className="nav-mi-carrito-container">
              <button className="nav-mi-carrito">Mi carrito</button>
              <div className={contador > 0 ? "numero-carrito" : ""}>
                <p>{contador > 0 ? contador : ""}</p>
              </div>
            </div>
          </li>
        </ul>

        {/* Íconos de carrito y perfil (desktop) */}
        <section className="icons-nav">
          <li className="nav-link-icon">
            <FontAwesomeIcon icon={faUser} size="lg" />
          </li>
          <li className="nav-link-icon nav-cart">
            <FontAwesomeIcon icon={faCartShopping} size="lg" />
            <div className={contador > 0 ? "numero-carrito" : ""}>
              <p>{contador > 0 ? contador : ""}</p>
            </div>
          </li>
        </section>
      </nav>
    </header>
  );
}
