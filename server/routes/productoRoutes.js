const express = require('express')
const routes = express.Router()

const productos = []

// GET /api/productos
routes.get('/', (req, res) => {
    res.json(productos)
})

module.exports = routes