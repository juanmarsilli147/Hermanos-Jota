import React from 'react';
import '../css/App.css';
import MediosContacto from './MediosContacto';

function Footer(){
    return(
        <footer>
            {/* Logo footer */}
            <section className='footer-marca'>
                <div className='footer-logo'>
                    <div>
                        <img src='http://localhost:4000/img/logoinvertido.svg' alt='Logo Hermanos Jota'/>
                    </div>
                    <p className='footer-nombre-marca'>Hermanos JOTA</p>
                </div>
                <p>Cada pieza cuenta la historia de manos expertas y materiales nobles</p>
            </section>

            <section className='links-contacto'>
                {/* Navegación */}
                <section className='footer-navegacion'>
                    <h4>Navega</h4>
                    <ul>
                        <li className='footer-link'>Inicio</li>
                        <li className='footer-link'>Productos</li>
                        <li className='footer-link'>Contacto</li>
                    </ul>
                </section>

                {/* Contacto */}
                <section className='footer-contacto'>
                    <h4>Contacto</h4>
                    <MediosContacto />
                </section>
            </section>
            <p className='copy'>Derechos reservados HJ 2025</p>
        </footer>
    )
}

export default Footer