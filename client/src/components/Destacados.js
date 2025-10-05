import React, {useState} from "react";
import useSWR from 'swr';
import FeaturedProduct from "./FeaturedProduct";
import '../css/App.css';
import ProductDetail from './ProductDetail';

const productosDestacados = (url) => {
    return fetch(url).then(async (res) => {
        if (!res.ok){
            throw new Error(await res.text());
        }
        return res.json()
    })
}

function Destacados({setRoute, anadirFuncion}) {
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);

    const {
        data: featuredProducts,
        error,
        isLoading
    } = useSWR('http://localhost:4000/api/productos?limit=3', productosDestacados);

    if (error) return <p className="mensajeswr">Hubo un problema al cargar los productos. Intenta de nuevo más tarde</p>;
    if (isLoading) return <p className="mensajeswr">Cargando...</p>;

    return(
        <>
            {!productoSeleccionado ? (
                <section className="destacados">
                    <section className="destacados-head">
                        <div className="destacados-title">
                            <h2>DESTACADOS</h2>
                            <p className="sub">Novedades y favoritos de la casa</p>
                        </div>
                        <div className="ver-coleccion">
                            <button className="btn-ver-coleccion" onClick={() => setRoute('productos')}>Ver Colección</button>
                        </div>
                    </section>
                    <section className="destacados-productos">
                        {featuredProducts.map(product => (
                            <section key={product.id} className="destacados-producto">
                                <FeaturedProduct imagen={product.imagen} alt={product.alt} nombre={product.nombre} descripcion={product.descripcionDestacado} anadirFuncion={anadirFuncion} onVerDetalle={() => setProductoSeleccionado(product)}/>
                            </section>
                        ))}
                    </section>
                </section>
            ) : (
                <ProductDetail producto={productoSeleccionado} onVolver={() => setProductoSeleccionado(null)}/>
            )}
        </>
    )
}

export default Destacados