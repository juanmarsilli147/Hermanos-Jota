import React from "react";
import '../css/App.css';
import ListaDestacados from "./ListaDestacados";



function MainContent(){
    return(
        <section className="destacados">
            <section className="destacados-head">
                <div className="destacados-title">
                    <h2>DESTACADOS</h2>
                    <p className="sub">Novedades y favoritos de la casa</p>
                </div>
                <div className="ver-coleccion">
                    <button className="btn-ver-coleccion">Ver Colección</button>
                </div>
            </section>
            <ListaDestacados/>
        </section>
    )
}

export default MainContent