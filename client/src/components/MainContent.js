import '../css/App.css';
import Destacados from "./Destacados";
import SeparacionSecciones from "./SeparacionSecciones";
import Hero from "./Hero";

function MainContent(){
    return(
        <main>
            <Hero />

            <SeparacionSecciones/>

            <Destacados/>
        </main>
    )
}

export default MainContent