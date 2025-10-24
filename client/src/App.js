import './css/App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useState } from 'react';
import PaginaInicio from './pages/PaginaInicio';
import Contacto from './pages/Contacto';
import Catalogo from './pages/Catalogo';
import {Routes, Route} from 'react-router-dom'


function App() {
  const [route, setRoute] = useState('index');
  const [carrito, setCarrito] = useState([]);

  const anadirAlCarrito = (producto) => {
    setCarrito([...carrito, producto])
  }

  return (
    <>
      <Navbar contador={carrito.length}/>
      
      <Routes>
          <Route path='/' element={<PaginaInicio anadirFuncion={anadirAlCarrito}/>}/>
          <Route path='/productos' element={<Catalogo anadirFuncion={anadirAlCarrito}/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
      </Routes>

      <Footer/>
    </>
  );
}

export default App;