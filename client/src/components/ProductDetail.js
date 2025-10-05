import "../css/App.css";


// Prueba product detail (no definitivo)
export default function ProductDetail({ producto, onVolver }) {
  return (
    <section className="detalle-producto">
      <h2>{producto.nombre}</h2>
      <img src={producto.imagen} alt={producto.nombre} />
      <p>Precio: ${producto.precio}</p>
      <p>{producto.descripcion}</p>
      <button onClick={onVolver}>Volver al catálogo</button>
    </section>
  );
}
