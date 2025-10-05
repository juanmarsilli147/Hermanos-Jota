import ContactoTexto from '../components/ContactoTexto';
import ContactoFormulario from '../components/ContactoFormulario';
import React, {useEffect} from 'react';

const Contacto = () => {

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }, [])

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