import React, {useEffect} from 'react';
import CrearProductoFormulario from '../components/CrearProductoFormulario';

function CrearProducto ({setProductoSeleccionado}) {

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }, [])

    return (
        <main id='crearProducto-main'>
            <article id='crearProducto-card'>
                <section id='crearProducto-texto'>
                    <h1>Crea un nuevo producto</h1>
                    <div></div>
                </section>

                <section id='crearProducto-formulario'>
                    <CrearProductoFormulario setProductoSeleccionado={setProductoSeleccionado}/>
                </section>
            </article>
        </main>
    )
}

export default CrearProducto