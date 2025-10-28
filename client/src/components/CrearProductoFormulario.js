import React, { useState } from "react"
import {validacionCampos, alertas, enviarFormulario} from "./funcionesProductoNuevo"
import { OverlayForm } from "./OverlayForm"

function CrearProductoFormulario() {

    // --ESTADOS -- //
    //Estado de los datos del form
    const [datos, setDatos] = useState({
        id: "",
        nombre: "",
        descripcion: "",
        descripcionDestacado: "",
        precio: null,
        imagen: "",
        materiales: "",
        medidas: "",
        acabado: "",
        peso: "",
        capacidad: "",
        enlace: ""
    })

    //Estado que almacenará los errores de validación de los campos
    const [errores, setErrores] = useState({
        id: "",
        nombre: "",
        descripcion: "",
        descripcionDestacado: "",
        precio: null,
        imagen: "",
        materiales: "",
        medidas: "",
        acabado: "",
        peso: "",
        capacidad: "",
        enlace: ""
    })

    //Estado que controla si el usuario trató de enviar el formulario o no (usado para validación dinámica de campos)
    const [intento, setIntento] = useState(false)

    //Estado que establece si el form fue enviado correctamente
    const [envioExitoso, setExitoso] = useState(false)


    // -- FUNCIÓN ACTUALIZACIÓN DE DATOS -- //
    //Se define la función encargada de actualizar en tiempo real los campos con lo que el usuario escribe y los mensajes de error
    const actualizarDatos = (d) => {
        const {name, value} = d.target

        const datosNuevos = { ...datos, [name]: value }
        setDatos(datosNuevos)

        if (intento) {
            const validaciones = validacionCampos(datosNuevos)
            const mensajes = alertas(validaciones)
            setErrores(mensajes)
        }     
    }

    // -- DEVOLUCIÓN DE FORMULARIO -- //
    return (
        <form id="productoNuevo-form" onSubmit={(evento) => enviarFormulario({evento, datos, setDatos, setErrores, setIntento, setExitoso})} noValidate>
            <div>
                <label htmlFor="nombre" className="productoNuevo-label">Nombre</label><br></br>
                <input 
                    id="nombre"
                    type="text"                 
                    name="nombre" 
                    className="productoNuevo-input" 
                    value={datos.nombre}
                    onChange={actualizarDatos}
                    placeholder="Ej.: Aparador Uspallata"
                    required
                />
                {errores.nombre && <p className="error-validacion">{errores.nombre}</p>}
            </div>

            <div>
                <label htmlFor="descripcion-form" className="productoNuevo-label">Descripción</label><br></br>
                <textarea 
                    id="descripcion-form" 
                    name="descripcion" 
                    rows="6" 
                    value={datos.descripcion}
                    onChange={actualizarDatos}
                    placeholder="Ej.: Aparador de seis puertas fabricado en nogal sostenible con tiradores metálicos en acabado latón. Su silueta minimalista realza el veteado natural de la madera, creando una pieza que combina funcionalidad y elegancia atemporal para espacios contemporáneos."
                    required
                />
                {errores.descripcion && <p className="error-validacion">{errores.descripcion}</p>}
            </div>

            <div>
                <label htmlFor="descripcionDestacado-form" className="productoNuevo-label">Descripción para destacados</label><br></br>
                <textarea 
                    id="descripcionDestacado-form" 
                    name="descripcionDestacado" 
                    rows="6" 
                    value={datos.descripcionDestacado}
                    onChange={actualizarDatos}
                    placeholder="Ej.: Nogal sostenible con detalles en latón"
                    required
                />
                {errores.descripcionDestacado && <p className="error-validacion">{errores.descripcionDestacado}</p>}
            </div>

            <div>
                <label htmlFor="precio" className="productoNuevo-label">Precio ($)</label><br></br>
                <input 
                    id="precio"
                    type="number"                 
                    name="precio" 
                    className="productoNuevo-input" 
                    value={datos.precio}
                    onChange={actualizarDatos}
                    placeholder="Ej.: 190000"
                    required
                />
                {errores.precio && <p className="error-validacion">{errores.precio}</p>}
            </div>

            <div>
                <label htmlFor="materiales" className="productoNuevo-label">Materiales</label><br></br>
                <input 
                    id="materiales"
                    type="text"                 
                    name="materiales" 
                    className="productoNuevo-input" 
                    value={datos.materiales}
                    onChange={actualizarDatos}
                    placeholder="Ej.: Nogal macizo FSC®, herrajes de latón"
                    required
                />
                {errores.materiales && <p className="error-validacion">{errores.materiales}</p>}
            </div>

            <div>
                <label htmlFor="medidas" className="productoNuevo-label">Medidas</label><br></br>
                <input 
                    id="medidas"
                    type="text"                 
                    name="medidas" 
                    className="productoNuevo-input" 
                    value={datos.medidas}
                    onChange={actualizarDatos}
                    placeholder="Ej.: 100 x 35 x 200 cm"
                    required
                />
                {errores.medidas && <p className="error-validacion">{errores.medidas}</p>}
            </div>

            <div>
                <label htmlFor="acabado" className="productoNuevo-label">Acabado</label><br></br>
                <input 
                    id="acabado"
                    type="text"                 
                    name="acabado" 
                    className="productoNuevo-input" 
                    value={datos.acabado}
                    onChange={actualizarDatos}
                    placeholder="Ej.: Aceite natural ecológico"
                    required
                />
                {errores.acabado && <p className="error-validacion">{errores.acabado}</p>}
            </div>

            <div>
                <label htmlFor="peso" className="productoNuevo-label">Peso</label><br></br>
                <input 
                    id="peso"
                    type="text"                 
                    name="peso" 
                    className="productoNuevo-input" 
                    value={datos.peso}
                    onChange={actualizarDatos}
                    placeholder="Ej.: 68 kg"
                    required
                />
                {errores.peso && <p className="error-validacion">{errores.peso}</p>}
            </div>

            <div>
                <label htmlFor="capacidad" className="productoNuevo-label">Capacidad</label><br></br>
                <input 
                    id="capacidad"
                    type="text"                 
                    name="capacidad" 
                    className="productoNuevo-input" 
                    value={datos.capacidad}
                    onChange={actualizarDatos}
                    placeholder="Ej.: 6 compartimentos interiores"
                    required
                />
                {errores.capacidad && <p className="error-validacion">{errores.capacidad}</p>}
            </div>

            <div>
                <button id="productoNuevo-button" type="submit">Agregar producto</button>
            </div>
            {envioExitoso && <OverlayForm />}
        </form>
    )
}

export default CrearProductoFormulario