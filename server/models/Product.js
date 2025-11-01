const { Schema, model } = require('mongoose')

const productoSchema = new Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    descripcionDestacado: { type: String, required: true },
    precio: { type: Number, required: true },
    imagen: { type: String, required: true },
    materiales: { type: String, required: true },
    medidas: { type: String, required: true },
    acabado: { type: String, required: true },
    peso: { type: String, required: true },
    capacidad: { type: String, required: true }
})

const Producto = model('Producto', productoSchema)
    
module.exports = Producto