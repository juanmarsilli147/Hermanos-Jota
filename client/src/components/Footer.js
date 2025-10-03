import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/img/logoinvertido.svg";
import "../css/App.css";

export default function Footer() {
  return (
    <footer>
      {/* Marca */}
      <section className="footer-marca">
        <div className="footer-logo">
          <div>
            <a href="/">
              <img src={logo} alt="Logo Hermanos JOTA" />
            </a>
          </div>
          <a href="/" className="footer-nombre-marca">Hermanos JOTA</a>
        </div>
        <p>Cada pieza cuenta la historia de manos expertas y materiales nobles</p>
      </section>

      {/* Links y contacto */}
      <section className="links-contacto">
        {/* Navegación */}
        <section className="footer-navegacion">
          <h4>Navega</h4>
          <ul>
            <li className="footer-link"><a href="/">Inicio</a></li>
            <li className="in-page"><a href="#">Productos</a></li>
            <li className="footer-link"><a href="/contacto">Contacto</a></li>
          </ul>
        </section>

        {/* Contacto */}
        <section className="footer-contacto">
          <h4>Contacto</h4>
          <p className="contacto" data-mobile="Información" data-desktop="info@hermanosjota.com.ar">
            <a href="mailto:info@hermanosjota.com.ar">
              <span className="texto">info@hermanosjota.com.ar</span>{" "}
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </p>

          <p className="contacto" data-mobile="Ventas" data-desktop="ventas@hermanosjota.com.ar">
            <a href="mailto:ventas@hermanosjota.com.ar">
              <span className="texto">ventas@hermanosjota.com.ar</span>{" "}
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </p>

          <p className="contacto" data-mobile="Instagram" data-desktop="@hermanosjota_ba">
            <a href="https://instagram.com/hermanosjota_ba" target="_blank" rel="noopener noreferrer">
              <span className="texto">@hermanosjota_ba</span>{" "}
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </p>

          <p className="contacto" data-mobile="WhatsApp" data-desktop="+54 11 4567-8900">
            <a href="https://wa.me/541145678900" target="_blank" rel="noopener noreferrer">
              <span className="texto">+54 11 4567-8900</span>{" "}
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </p>
        </section>
      </section>

      {/* Derechos */}
      <p className="copy">Derechos reservados HJ 2025</p>
    </footer>
  );
}
