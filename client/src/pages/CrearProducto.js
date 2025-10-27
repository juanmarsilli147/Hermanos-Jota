import React, {useEffect} from 'react';
import CrearProductoFormulario from '../components/CrearProductoFormulario';

const CrearProducto = () => {

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }, [])

    return (
        <main id='crearProducto-main'>
            <article id='crearProducto-card'>
                <section id='crearProducto-texto'>
                    <h2>Agregado de productos</h2>
                </section>

                <section id='crearProducto-formulario'>
                    <CrearProductoFormulario />
                </section>
            </article>
        </main>
    )
}

export default CrearProducto