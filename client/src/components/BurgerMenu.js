import '../css/App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

function BurgerMenu({visibilidad, cambiarVisibilidad}){
    const mostrarMenu = () => {
        cambiarVisibilidad(!visibilidad)
    }

    return (
        <>
            <button className={visibilidad ? 'cerrar-menu' : 'abrir-menu'} onClick={mostrarMenu}>
                <FontAwesomeIcon icon={visibilidad ? faXmark : faBars}/>
            </button>
        </>
    )
}

export default BurgerMenu