import '../css/App.css';
import BurgerMenu from './BurgerMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar({contador, setProductoSeleccionado}){
    // Menú hamburguesa visibilidad
    const [menuVisible, setVisibilidad] = useState(false);

    // Clases para la nav
    const getNavLinkClass = ({ isActive }) => isActive ? 'nav-link in-page' : 'nav-link';

    return (
        <header>
            {/* Logo */}
            <Link to="/" className='logo' onClick={() => {setVisibilidad(false); setProductoSeleccionado(null)}}>
                <img src='http://localhost:4000/img/logoinvertido.svg' alt="Logo"/>
                <p className='nombre-marca'>Hermanos JOTA</p>
            </Link>

            {/* Menú hamburguesa */}
            <BurgerMenu visibilidad={menuVisible} cambiarVisibilidad={setVisibilidad}/>

            {/* nav */}
            <nav className={menuVisible ? 'nav visible' : 'nav'}>
                <ul className='links-nav'>
                    {/* Ir al index */}              
                    <NavLink to="/" className={getNavLinkClass} onClick={() => {setVisibilidad(false); setProductoSeleccionado(null)}}>
                        Inicio
                    </NavLink>
                    

                    {/* Ir a productos */}
                    <NavLink to="/productos" className={getNavLinkClass} onClick={() => {setVisibilidad(false); setProductoSeleccionado(null)}}>
                        Productos
                    </NavLink>
                    

                    {/* Ir a contacto */}
                    
                    <NavLink to="/contacto" className={getNavLinkClass} onClick={() => {setVisibilidad(false); setProductoSeleccionado(null)}}>
                        Contacto
                    </NavLink>
                    

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