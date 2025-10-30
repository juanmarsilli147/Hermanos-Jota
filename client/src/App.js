import './css/App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useState } from 'react';
import PaginaInicio from './pages/PaginaInicio';
import Contacto from './pages/Contacto';
import Catalogo from './pages/Catalogo';
import {Routes, Route} from 'react-router-dom'
import CrearProducto from './pages/CrearProducto';
import AdminPanel from './pages/AdminPanel';


function App() {
  const [carrito, setCarrito] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const anadirAlCarrito = (producto) => {
    setCarrito([...carrito, producto])
  }

  return (
    <>
      <Navbar contador={carrito.length} setProductoSeleccionado={setProductoSeleccionado}/>
      
      <Routes>
          <Route path='/' element={<PaginaInicio anadirFuncion={anadirAlCarrito}/>}/>
          <Route path='/productos' element={<Catalogo anadirFuncion={anadirAlCarrito} productoSeleccionado={productoSeleccionado} setProductoSeleccionado={setProductoSeleccionado}/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
          <Route path='/admin' element={<AdminPanel />}/>
          <Route path='/admin/crear-producto' element={<CrearProducto setProductoSeleccionado={setProductoSeleccionado}/>} />
      </Routes>

      <Footer setProductoSeleccionado={setProductoSeleccionado}/>
    </>
  );
}

export default App;