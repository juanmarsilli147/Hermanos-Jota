import React from 'react';
import '../css/App.css';
import logo from '../assets/img/logoinvertido.svg';
import BurgerMenu from './BurgerMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Navbar(){
    return (
        <header>
            {/* Logo */}
            <section className='logo'>
                <img src={logo} alt="Logo"/>
                <p className='nombre-marca'>Hermanos JOTA</p>
            </section>

            {/* Menú hamburguesa */}
            <BurgerMenu />

            {/* nav */}
            <nav className='nav' id='nav'>
                <ul className='links-nav'>
                    <li className='nav-link'>Inicio</li>
                    <li className='nav-link'>Productos</li>
                    <li className='nav-link'>Contacto</li>
                    <li className='li-botones'>
                        <button className='nav-mi-perfil'>Mi perfil</button>
                        <div className='nav-mi-carrito-container'>
                            <button className='nav-mi-carrito'>Mi carrito</button>
                            <div>
                                <p></p>
                            </div>
                        </div>
                    </li>
                </ul>
                
                {/* Íconos de carrito y perfil para desktop */}
                <section className='icons-nav'>
                    <li className='nav-link-icon'><FontAwesomeIcon icon={faUser}/></li>
                    <li className='nav-link-icon nav-cart'>
                        <FontAwesomeIcon icon={faCartShopping}/>
                        <div>
                            <p></p>
                        </div>
                    </li>
                </section>
            </nav>
        </header>
    )
}

export default Navbar