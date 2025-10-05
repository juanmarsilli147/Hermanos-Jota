import Hero from '../components/Hero';
import SeparacionSecciones from '../components/SeparacionSecciones';
import Destacados from '../components/Destacados';
import React, {useState} from 'react';
import ProductDetail from '../components/ProductDetail';

function PaginaInicio({setRoute, anadirFuncion}){
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);

    return(
        <main>
            {!productoSeleccionado ? (
                <>
                    <Hero setRoute={setRoute}/>
            
                    <SeparacionSecciones/>
                    
                    <Destacados setRoute={setRoute} anadirFuncion={anadirFuncion} onVerDetalle={(producto) => setProductoSeleccionado(producto)}/>
                </>
            ) : (
                <>
                    <ProductDetail producto={productoSeleccionado} onVolver={() => setProductoSeleccionado(null)}/>
                </>
            )}
        </main>
    )
}

export default PaginaInicio