import Hero from '../components/Hero';
import SeparacionSecciones from '../components/SeparacionSecciones';
import Destacados from '../components/Destacados';
import React, {useEffect} from 'react';

function PaginaInicio({anadirFuncion}){

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
                <>
                    <Hero/>
                    <SeparacionSecciones/>      
                    <Destacados anadirFuncion={anadirFuncion}/>
                </>
            
        </main>
    )
}

export default PaginaInicio