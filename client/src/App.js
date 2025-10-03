import './css/App.css';
import ContactoTexto from './components/ContactoTexto';
import ContactoFormulario from './components/ContactoFormulario';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Catalogo from './pages/Catalogo';

function App() {
  return (
    <>
      <Navbar />
      <Catalogo />
      <Footer />
    </>
  );
}

export default App;