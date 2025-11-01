import ProductCard from "./ProductCard";
import "../css/App.css";

export default function ProductList({ productos, onVerDetalle, anadirFuncion }) {
  return (
    <div className="grid">
      {productos.map((prod) => (
        <ProductCard
          key={prod._id}
          producto={prod}
          onVerDetalle={onVerDetalle}
          anadirFuncion={anadirFuncion}
        />
      ))}
    </div>
  );
}
