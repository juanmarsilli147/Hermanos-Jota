import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import ProductDetail from "../components/ProductDetail";
import SearchBar from "../components/SearchBar";
import "../css/App.css";

export default function Catalogo({ anadirFuncion, productoSeleccionado, setProductoSeleccionado }) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [busqueda, setBusqueda] = useState("");
  const [refreshToggle, setRefreshToggle] = useState(false); // forzar actualizacion desp de eliminar

  useEffect(() => {
    const fetchProductos = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("http://localhost:4000/api/productos");
        if (!response.ok) throw new Error("Error al cargar productos");
        const data = await response.json();
        setProductos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProductos();
  }, [setProductos, refreshToggle]);


  const productosFiltrados = productos.filter((p) =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }, [])

  // onVolver ahora acepta un parámetro para refrescar la lista
  const onVolver = (shouldRefresh = false) => {
    setProductoSeleccionado(null);
    // Si se recibe una señal de refresco (tras una eliminación exitosa), alterna el estado para re-ejecutar fetchProductos
    if (shouldRefresh) {
        setRefreshToggle(prev => !prev);
    }
  };

  return (
    <main className="main-productos">
      <section className="catalogo">
        <h2 className="catalogo-h2">Catálogo de Productos</h2>
        <p>Explora nuestra selección de muebles para tu hogar y oficina.</p>
        <SearchBar onBuscar={setBusqueda}/>

        {loading && <p>Cargando...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
      

        {!productoSeleccionado ? (
          <ProductList
            productos={productosFiltrados}
            onVerDetalle={setProductoSeleccionado}
            anadirFuncion={anadirFuncion}
          />
        ) : (
          <ProductDetail
            key={productoSeleccionado.id}
            producto={productoSeleccionado}
            productos={productos}
            onVolver={onVolver} 
            anadirFuncion={anadirFuncion}
            onVerDetalle={setProductoSeleccionado}
          />
        )}
      </section>
    </main>
  );
}
