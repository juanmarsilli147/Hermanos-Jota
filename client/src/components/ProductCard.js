import "../css/App.css";

export default function ProductCard({ producto, onVerDetalle }) {
  return (
    <div className="card" onClick={() => onVerDetalle(producto)}>
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
        </div>
      </div>
    </div>
  );
}
