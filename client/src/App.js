import './css/App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useState } from 'react';
import PaginaInicio from './pages/PaginaInicio';
import Contacto from './pages/Contacto';

function App() {
  const [route, setRoute] = useState('index');
  const [carrito, setCarrito] = useState([]);

  const anadirAlCarrito = (producto) => {
    setCarrito([...carrito, producto])
  }

  return (
    <>
      <Navbar route={route} setRoute={setRoute} contador={carrito.length}/>
      
      <main>
        {route === 'index' && <PaginaInicio setRoute={setRoute} anadirFuncion={anadirAlCarrito}/>}
        {route === 'contacto' && <Contacto setRoute={setRoute}/>}
      </main>

      <Footer setRoute={setRoute}/>
    </>
  );
}

export default App;