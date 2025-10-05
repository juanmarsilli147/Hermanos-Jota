import React, {useState, useEffect} from "react";
import '../css/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faWhatsapp, faInstagram} from '@fortawesome/free-brands-svg-icons'

function MediosContacto(){
    const [info, setInfo] = useState('')
    const [ventas, setVentas] = useState('')
    const [instagram, setInstagram] = useState('')
    const [whatsapp, setWhatsapp] = useState('')

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 767px)');

        const textoInfo = e => {
            if (e.matches){
                setInfo('Información');
            } else {
                setInfo('info@hermanosjota.com.ar')
            }
        }

        const textoVentas = e => {
            if(e.matches){
                setVentas('Ventas')
            } else {
                setVentas('ventas@hermanosjota.com.ar')
            }
        }

        const textoInstagram = e => {
            if(e.matches){
                setInstagram('Instagram')
            } else {
                setInstagram('@hermanosjota_ba')
            }
        }

        const textoWhatsapp = e => {
            if(e.matches){
                setWhatsapp('WhatsApp')
            } else {
                setWhatsapp('+54 11 4567-8900')
            }
        }

        textoInfo(mediaQuery)
        mediaQuery.addEventListener('change', textoInfo);

        textoVentas(mediaQuery)
        mediaQuery.addEventListener('change', textoVentas);
        
        textoInstagram(mediaQuery)
        mediaQuery.addEventListener('change', textoInstagram);
        
        textoWhatsapp(mediaQuery)
        mediaQuery.addEventListener('change', textoWhatsapp);

        return () => {
            mediaQuery.removeEventListener('change', textoInfo);
            mediaQuery.removeEventListener('change', textoVentas);
            mediaQuery.removeEventListener('change', textoInstagram);
            mediaQuery.removeEventListener('change', textoWhatsapp);
        }
    }, []);

    return (
        <>
            {/* Contacto de información */}
            <p className="contacto"><a href="mailto:info@hermanosjota.com.ar" rel="noopener noreferrer" target="_blank"><span className="texto">{info}</span> <FontAwesomeIcon icon={faEnvelope} className="icono-contacto"/></a></p>

            {/* Contacto de ventas */}
            <p className="contacto"><a href="mailto:ventas@hermanosjota.com.ar" rel="noopener noreferrer" target="_blank"><span className="texto">{ventas}</span> <FontAwesomeIcon icon={faEnvelope} className="icono-contacto"/></a></p>

            {/* Instagram */}
            <p className="contacto"><a href="https://instagram.com/hermanosjota_ba" rel="noopener noreferrer" target="_blank"><span className="texto">{instagram}</span> <FontAwesomeIcon icon={faInstagram} className="icono-contacto"/></a></p>
            
            {/* Whatsapp */}
            <p className="contacto"><a href="https://wa.me/541145678900" rel="noopener noreferrer" target="_blank"><span className="texto">{whatsapp}</span> <FontAwesomeIcon icon={faWhatsapp} className="icono-contacto"/></a></p>
        </>
    )
}

export default MediosContacto