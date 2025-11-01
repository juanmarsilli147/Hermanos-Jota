const express = require('express')
const routes = express.Router()
const Producto = require('../models/Product')
const multer = require('multer')
const cloudinary = require('cloudinary').v2
const streamifier = require('streamifier')

require('dotenv').config()

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const storage = multer.memoryStorage();
const upload = multer({storage: storage})

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
        const producto = await Producto.findOne({_id: id})

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
routes.post("/", upload.single('imagen'), async (req, res, next) => {
    try{

        if (!req.file) {
            throw new Error('No se subió ningún archivo de imagen')
        }

        streamifier.createReadStream(req.file.buffer).pipe(
            cloudinary.uploader.upload_stream(
                {folder: "productos-MuebleriaJota"},
                async (error, result) => {
                    if (error) {
                        return next(error)
                    }

                    const urlImagen = result.secure_url

                    const nuevoProducto = new Producto({
                        ...req.body, imagen: urlImagen
                    })

                    const productoGuardado = await nuevoProducto.save()
                    res.status(201).json(productoGuardado)
                }
            )
        )
        
    } catch (error) {
        next(error)
    }
})


// PUT /api/productos/:id
routes.put("/:id", async (req, res, next) => {
    try{
        const { id } = req.params
        const producto = await Producto.findOneAndUpdate({_id: id}, req.body, {new: true})

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
        
        const productoEliminado = await Producto.findOneAndDelete({_id: id})

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