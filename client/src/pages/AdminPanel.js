import { Link } from "react-router-dom"

const AdminPanel = () => {
    return (
        <main className="admin-panel">
            <section className="admin-title">
                <h1>Panel de Administración</h1>
                <div></div>
            </section>
            <section className="admin-bienvenida">
                <h2>¡Bienvenido/a administrador/a!</h2>
                <p>¡Amplía el catálogo de tu tienda añadiendo nuevos productos!</p>
            </section>

            <Link to="/admin/crear-producto"><button>Añadir Producto</button></Link>
        </main>
    )
}

export default AdminPanel