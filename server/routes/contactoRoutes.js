const express = require('express')
const routes = express.Router()

const mensajes = []

// GET /api/contacto
routes.get('/', (req, res) => {
    res.json(mensajes)
})

// POST /api/contacto
routes.post('/', (req, res) => {
    const nuevoMensaje = req.body

    console.log('Mensaje recibido:', nuevoMensaje)

    mensajes.push(nuevoMensaje)
    res.status(201).json(
        {
            mensaje: "Mensaje recibido",
            texto: nuevoMensaje
        }
    )
})

module.exports = routes