import ContactoTexto from '../components/ContactoTexto';
import ContactoFormulario from '../components/ContactoFormulario';

const Contacto = () => {
    return (
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
    )
}

export default Contacto