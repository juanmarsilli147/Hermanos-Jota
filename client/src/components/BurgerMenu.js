import React, {useEffect, useState} from 'react';
import '../css/App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

function BurgerMenu(){
    const [menuVisible, setVisibilidad] = useState(false)
    

    useEffect(() => {
        const nav = document.getElementById('nav')
        if (nav){ // Usamos useEffect para asegurarnos que primero esté cargado nav en el dom
            nav.classList.toggle('visible', menuVisible) // si menuVisible es true, agrega visible, sino la quita
        }
    })

    const mostrarMenu = () => {
        setVisibilidad(!menuVisible)
    }

    return (
        <>
            <button className={menuVisible ? 'cerrar-menu' : 'abrir-menu'} onClick={mostrarMenu}>
                <FontAwesomeIcon icon={menuVisible ? faXmark : faBars}/>
            </button>
        </>
    )
}

export default BurgerMenu