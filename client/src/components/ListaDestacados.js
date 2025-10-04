import React from "react";
import useSWR from 'swr';
import FeaturedProduct from "./FeaturedProduct";
import '../css/App.css';

const productosDestacados = (url) => {
    return fetch(url).then(async (res) => {
        if (!res.ok){
            throw new Error(await res.text());
        }
        return res.json()
    })
}

function ListaDestacados() {
    const {
        data: featuredProducts,
        error,
        isLoading
    } = useSWR('/api/productos?limit=3', productosDestacados);

    if (error) return <p className="mensajeswr">{error.message}</p>;
    if (isLoading) return <p className="mensajeswr">Cargando...</p>;

    return(
        <section className="destacados-productos">
            {featuredProducts.map(product => (
                <section key={product.id} className="destacados-producto">
                    <FeaturedProduct imagen={product.imagen} alt={product.alt} nombre={product.nombre} descripcion={product.descripcionDestacado}/>
                </section>
            ))}
        </section>
    )
}

export default ListaDestacados