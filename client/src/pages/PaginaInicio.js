import Hero from '../components/Hero';
import SeparacionSecciones from '../components/SeparacionSecciones';
import Destacados from '../components/Destacados';
import React, {useEffect} from 'react';
import ProductDetail from '../components/ProductDetail';

function PaginaInicio({anadirFuncion, productoSeleccionado, setProductoSeleccionado}){

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }, [])

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
                    <ProductDetail key={productoSeleccionado.id} producto={productoSeleccionado} onVolver={() => setProductoSeleccionado(null)} anadirFuncion={anadirFuncion} onVerDetalle={setProductoSeleccionado}/>
                </section>
            )}
        </main>
    )
}

export default PaginaInicio