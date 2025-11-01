import Hero from '../components/Hero';
import SeparacionSecciones from '../components/SeparacionSecciones';
import Destacados from '../components/Destacados';
import React, {useEffect} from 'react';

function PaginaInicio({anadirFuncion}){

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }, [])

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