import Hero from '../components/Hero';
import SeparacionSecciones from '../components/SeparacionSecciones';
import Destacados from '../components/Destacados';

function Index({setRoute}){
    return(
        <>
            <Hero setRoute={setRoute}/>

            <SeparacionSecciones/>
            
            <Destacados setRoute={setRoute}/>
        </>
    )
}

export default Index