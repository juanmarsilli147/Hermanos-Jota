import '../css/App.css';
import ButtonAgregarCarrito from "./ButtonAgregarCarrito";

function FeaturedProduct({imagen, alt, nombre, descripcion, anadirFuncion, onVerDetalle}){
    return (
        <>
            <div className="destacados-img">
                <img src={imagen} alt={alt}/>
            </div>
            <section className="destacados-description">
                <h4>{nombre}</h4>
                <div className="destacados-separacion"></div>
                <p>{descripcion}</p>
                <div className="destacados-botones-card">
                    <button className="ver-detalle-indexCards" onClick={() => onVerDetalle()}>Ver detalle</button>
                    <ButtonAgregarCarrito producto={{imagen, alt, nombre, descripcion}} anadirFuncion={anadirFuncion} onVerDetalle={onVerDetalle}/>
                </div>
            </section>
        </>
    )
}

export default FeaturedProduct