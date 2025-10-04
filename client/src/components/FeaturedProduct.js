import React from "react";
import '../css/App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function FeaturedProduct({imagen, alt, nombre, descripcion}){
    return (
        <>
            <div className="destacados-img">
                <img src={imagen} alt={alt}/>
            </div>
            <section className="destacados-description">
                <h4>{nombre}</h4>
                <div className="destacados-separacion"></div>
                <p>{descripcion}</p>
                <div className="destacados-botones-card">
                    <button className="ver-detalle-indexCards">Ver detalle</button>
                    <button className="btn-cart" id="agregarCarrito"><FontAwesomeIcon icon={faCartShopping}/></button>
                </div>
            </section>
        </>
    )
}

export default FeaturedProduct