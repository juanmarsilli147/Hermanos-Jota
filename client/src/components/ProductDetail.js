import "../css/App.css";
import React, {useEffect} from 'react';

// Prueba product detail (no definitivo)
export default function ProductDetail({ producto, onVolver }) {

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }, [])

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
