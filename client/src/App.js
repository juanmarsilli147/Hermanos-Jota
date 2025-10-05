import './css/App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useState } from 'react';
import Index from './pages/Index';

function App() {
  const [route, setRoute] = useState('index');
  return (
    <>
      <Navbar route={route} setRoute={setRoute}/>
      
      <main>
        {route === 'index' && <Index setRoute={setRoute}/>}
      </main>

      <Footer setRoute={setRoute}/>
    </>
  );
}

export default App;
