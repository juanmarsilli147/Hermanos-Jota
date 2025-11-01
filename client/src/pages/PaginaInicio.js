import Hero from '../components/Hero';
import SeparacionSecciones from '../components/SeparacionSecciones';
import Destacados from '../components/Destacados';
import React, {useEffect} from 'react';
import ProductDetail from '../components/ProductDetail';

function PaginaInicio({anadirFuncion, productoSeleccionado, setProductoSeleccionado}){

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }, [])

    // onVolver ahora acepta un parámetro para refrescar la lista (manteniendo la compatibilidad)
    const onVolver = (shouldRefresh = false) => {
        setProductoSeleccionado(null);
        // El refresco para Destacados y ProductosRelacionados (que usan SWR)
        // se debería manejar con la invalidación de la caché de SWR.
        // Aquí simplemente regresamos a la vista principal.
    };

    return(
        <main>
            {!productoSeleccionado ? (
                <>
                    <Hero/>
            
                    <SeparacionSecciones/>
                    
                    <Destacados anadirFuncion={anadirFuncion} onVerDetalle={(producto) => setProductoSeleccionado(producto)}/>
                </>
            ) : (
                <section className='catalogo'>
                    <ProductDetail key={productoSeleccionado.id} producto={productoSeleccionado} onVolver={onVolver} anadirFuncion={anadirFuncion} onVerDetalle={setProductoSeleccionado}/>
                </section>
            )}
        </main>
    )
}

export default PaginaInicio