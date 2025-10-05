import '../css/App.css';
import BurgerMenu from './BurgerMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Navbar({route, setRoute, contador}){
    // Menú hamburguesa visibilidad
    const [menuVisible, setVisibilidad] = useState(false);

    // Clases para la nav
    const getClass = (target) => route === target ? 'nav-link in-page' : 'nav-link'

    return (
        <header>
            {/* Logo */}
            <section className='logo' onClick={() => setRoute('index')}>
                <img src='http://localhost:4000/img/logoinvertido.svg' alt="Logo"/>
                <p className='nombre-marca'>Hermanos JOTA</p>
            </section>

            {/* Menú hamburguesa */}
            <BurgerMenu visibilidad={menuVisible} cambiarVisibilidad={setVisibilidad}/>

            {/* nav */}
            <nav className={menuVisible ? 'nav visible' : 'nav'}>
                <ul className='links-nav'>
                    {/* Ir al index */}
                    <li className={getClass('index')} onClick={() => {
                        setRoute('index');
                        setVisibilidad(false)}}>Inicio</li>

                    {/* Ir a productos */}
                    <li className={getClass('productos')} onClick={() => {
                        setRoute('productos');
                        setVisibilidad(false)}}>Productos</li>

                    {/* Ir a contacto */}
                    <li className={getClass('contacto')} onClick={() => {
                        setRoute('contacto');
                        setVisibilidad(false)}}>Contacto</li>

                    <li className='li-botones'>
                        <button className='nav-mi-perfil'>Mi perfil</button>
                        <div className='nav-mi-carrito-container'>
                            <button className='nav-mi-carrito'>Mi carrito</button>
                            <div className={contador > 0 ? 'numero-carrito' : ''}>
                                <p>{contador > 0 ? contador : null}</p>
                            </div>
                        </div>
                    </li>
                </ul>
                
                {/* Íconos de carrito y perfil para desktop */}
                <section className='icons-nav'>
                    <li className='nav-link-icon'><FontAwesomeIcon icon={faUser}/></li>
                    <li className='nav-link-icon nav-cart'>
                        <FontAwesomeIcon icon={faCartShopping}/>
                        <div className={contador > 0 ? 'numero-carrito' : ''}>
                            <p>{contador > 0 ? contador : null}</p>
                        </div>
                    </li>
                </section>
            </nav>
        </header>
    )
}

export default Navbar