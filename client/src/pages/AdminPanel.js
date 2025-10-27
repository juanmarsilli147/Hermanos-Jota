import { Link, Outlet } from "react-router-dom"

const AdminPanel = () => {
    return (
        <>
            <h1>Panel de aministración</h1>
            <h3>¡Bienvenido/a administrador/a!</h3>

            <Link to="/admin/crear-producto">Crear producto</Link>

            <Outlet />
        </>
    )
}

export default AdminPanel