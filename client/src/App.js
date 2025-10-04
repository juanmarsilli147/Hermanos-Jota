import './css/App.css';
import Catalogo from './pages/Catalogo';
import Header from './components/Header';
import Footer from './components/Footer';
import Contacto from './pages/Contacto';
import Index from './pages/Index';
import { useState } from 'react';

function App() {
  const [route, setRoute] = useState("index");
  
  return (
    <>
      {/* Header */}
      <Header setRoute={setRoute} />

      {/* Contenido dinámico */}
      <main className="flex-grow">
        {route === "index" && <Index />}
        {route === "productos" && <Catalogo />}
        {route === "contacto" && <Contacto />}
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;