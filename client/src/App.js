import './css/App.css';
import ContactoTexto from './components/ContactoTexto';
import ContactoFormulario from './components/ContactoFormulario';

function App() {
  return (
    <div className="App">

      <main id='contacto-main'>
        <article id='contacto-card'>
          <section id='contacto-texto'>
            <ContactoTexto />
          </section>

          <section id='contacto-formulario'>
            <ContactoFormulario />
          </section>
        </article>
      </main>

    </div>
  );
}

export default App;