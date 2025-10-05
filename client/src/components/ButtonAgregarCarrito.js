import '../css/App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function ButtonAgregarCarrito({producto, anadirFuncion}) {
    return(
        <>
            <button className="btn-cart" onClick={() => anadirFuncion(producto)}><FontAwesomeIcon icon={faCartShopping}/></button>
        </>
    )
}

export default ButtonAgregarCarrito