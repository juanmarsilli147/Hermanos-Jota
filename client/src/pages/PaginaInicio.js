import Hero from '../components/Hero';
import SeparacionSecciones from '../components/SeparacionSecciones';
import Destacados from '../components/Destacados';
import React, {useEffect, useState} from 'react';
import ProductDetail from '../components/ProductDetail';

function PaginaInicio({setRoute, anadirFuncion}){
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }, [])

    return(
        <main>
            {!productoSeleccionado ? (
                <>
                    <Hero setRoute={setRoute}/>
            
                    <SeparacionSecciones/>
                    
                    <Destacados setRoute={setRoute} anadirFuncion={anadirFuncion} onVerDetalle={(producto) => setProductoSeleccionado(producto)}/>
                </>
            ) : (
                <section className='catalogo'>
                    <ProductDetail producto={productoSeleccionado} onVolver={() => setProductoSeleccionado(null)}/>
                </section>
            )}
        </main>
    )
}

export default PaginaInicio