import './css/App.css';
import Contacto from './pages/Contacto';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Contacto />
      <Footer />

    </div>
  );
}

export default App;