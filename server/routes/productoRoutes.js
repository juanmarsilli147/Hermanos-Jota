const express = require('express')
const productos = require('../productos')
const routes = express.Router()

// GET /api/productos
routes.get('/', (req, res) => {
    res.json(productos)
})

routes.get("/:id", (req, res, next) => {
    const { id } = req.params
    const producto = productos.find(p => p.id === parseInt(id))

    if (!producto) {
        const error = new Error(`Producto no encontrado`);
        error.status = 404;
        return next(error); 
  }

    res.json(producto)
})

module.exports = routes