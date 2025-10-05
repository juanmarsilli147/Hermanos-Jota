import "../css/App.css";
import ButtonAgregarCarrito from "./ButtonAgregarCarrito";

export default function ProductCard({ producto, onVerDetalle, anadirFuncion }) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={producto.imagen} alt={producto.nombre} />
      </div>
      <div className="card-info">
        <h3>{producto.nombre}</h3>
        <p>${producto.precio}</p>
        <div className="botones-producto">
          <a href="#" onClick={(e) => { e.preventDefault(); onVerDetalle(producto); }}>
            Ver detalle
          </a>
          <ButtonAgregarCarrito producto={producto} anadirFuncion={anadirFuncion} />
        </div>
      </div>
    </div>
  );
}
