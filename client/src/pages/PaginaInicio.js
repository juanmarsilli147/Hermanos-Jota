import Hero from '../components/Hero';
import SeparacionSecciones from '../components/SeparacionSecciones';
import Destacados from '../components/Destacados';

function PaginaInicio({setRoute, anadirFuncion}){
    return(
        <main>
            <Hero setRoute={setRoute}/>

            <SeparacionSecciones/>
            
            <Destacados setRoute={setRoute} anadirFuncion={anadirFuncion}/>
        </main>
    )
}

export default PaginaInicio