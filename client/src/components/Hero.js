import {Link} from 'react-router-dom'

function Hero(){
    return(
        <section className="hero">
            {/* texto */}
            <section className="hero-text">
                <p className="subtitle">Muebles que nutren el alma</p>
                <h1>Hermanos Jota</h1>
                <p className="description">
                    Redescubrimos el arte de crear piezas con madera certificada,
                    uniendo tradición y diseño contemporáneo para logares únicos y significativos.
                </p>
                <section className="hero-buttons">
                    <Link to='productos'><button className="btn-comprar">Comprar Ahora</button></Link>
                    <Link to='contacto'><button className="btn-contactanos">Contactanos</button></Link>
                </section>
            </section>
            {/* Imagen principal */}
            <div className="hero-image">
            </div>
        </section>
    )
}
export default Hero