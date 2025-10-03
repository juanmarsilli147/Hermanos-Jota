const express = require('express')
const productos = require('../productos')
const routes = express.Router()

// GET /api/productos
routes.get('/', (req, res) => {
    res.json(productos)
})

module.exports = routes