const express = require('express')
const routes = express.Router()
const Producto = require('../models/Product')



// GET /api/productos
routes.get('/', async (req, res) => {
    const {limit} = req.query;
    let queryLimit = 0; // 0 significa sin límite

    if (limit) {
        // Intenta convertir el 'limit' a un entero.
        const parsedLimit = parseInt(limit);
        
        // Verifica que sea un número positivo válido
        if (!isNaN(parsedLimit) && parsedLimit > 0) {
            queryLimit = parsedLimit;
        }
    }
    try {
        let consultaMongoose = Producto.find({});
        if (queryLimit > 0) {
            consultaMongoose = consultaMongoose.limit(queryLimit);
        }

        const productosMostrados = await consultaMongoose.exec();
        res.json(productosMostrados);
        
    } catch (error) {
        next(error)
    }

})

// GET /api/productos/:id
routes.get("/:id", async (req, res, next) => {
    try{
        const { id } = req.params
        const parsedId = parseInt(id)
        const producto = await Producto.findOne({id: parsedId})

        if (!producto) {
            return res.status(404).json({ 
                mensaje: 'Producto no encontrado con ese ID'
            });
        }
        res.json(producto)
    } catch (error) {
        next(error)
    }
    
})

// POST /api/productos
routes.post("/", async (req, res, next) => {
    try{
        const nuevoProducto = new Producto(req.body)
        const productoGuardado = await nuevoProducto.save()
        res.status(201).json(productoGuardado)
    } catch (error) {
        next(error)
    }
})


// PUT /api/productos/:id
routes.put("/:id", async (req, res, next) => {
    try{
        const { id } = req.params
        const parsedId = parseInt(id)
        const producto = await Producto.findOneAndUpdate({id: parsedId}, req.body, {new: true})

        if (!producto) {
            return res.status(404).json({ 
                mensaje: 'Producto no encontrado con ese ID'
            });
        }
        res.json(producto)
    } catch (error) {
        next(error)
    }
})

// DELETE /api/productos/:id
routes.delete("/:id", async (req, res, next) => {
    try{
        const { id } = req.params
        const parsedId = parseInt(id)
        const productoEliminado = await Producto.findOneAndDelete({id: parsedId})

        if (!productoEliminado) {
            return res.status(404).json({ 
                mensaje: 'Producto no encontrado con ese ID'
            });
        }
        res.json(productoEliminado)
    } catch (error) {
        next(error)
    }
})



module.exports = routes