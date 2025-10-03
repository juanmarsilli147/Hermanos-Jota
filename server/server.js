const express = require('express');
const contactoRoutes = require('./routes/contactoRoutes')
const productoRoutes = require('./routes/productoRoutes')
const logger = require('./logger')
const cors = require('cors')
const path = require("path");



const app = express()

// Servir la carpeta de imágenes
app.use("/img", express.static(path.join(__dirname, "public/img")));

const PORT = process.env.PORT || 4000

//Verifica que la única dirección desde la cual se conecte sea el front corriendo en el puerto 3000
app.use(cors({
  origin: 'http://localhost:3000'
}))

app.use(express.json())
app.use(logger)
app.use('/api/contacto', contactoRoutes)
app.use('/api/productos', productoRoutes)

app.get('/', (req, res) => {
  res.send('¡Bienvenido al API de Mueblería Jota!');
})

//MIDDLEWARE PARA RUTAS NO ENCONTRADAS
app.use((req, res, next) => {
  const error = new Error(`Ruta no encontrada: ${req.originalUrl}`);
  error.status = 404;
  next(error);
});

// MIDDLEWARE CENTRALIZADO DE ERRORES
app.use((err, req, res, next) => {
  // Se determina el código de estado, si no tiene se le asigna el 500 al ser un error interno del servidor
  const statusCode = err.status || 500;
  
  // Se devuelve el error en consola para depurar efectivamente
  console.error(err.message, err.stack);
  
  // Se le envía una respuesta JSON al cliente
  res.status(statusCode).json({
    message: err.message || 'Ha ocurrido un error en el servidor.',
    // El error completo (con información sensible del server) se mostrará sólo si se está en desarrollo, si no solo devuelve 🚩
    stack: process.env.NODE_ENV === 'production' ? '🚩' : err.stack,
  });
});


app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
})