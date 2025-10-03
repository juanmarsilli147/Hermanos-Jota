const express = require('express');
const contactoRoutes = require('./routes/contactoRoutes')
const productoRoutes = require('./routes/productoRoutes')
const cors = require('cors')
const productos = require('./productos')

const app = express()

const PORT = process.env.PORT || 4000

//Verifica que la única dirección desde la cual se conecte sea el front corriendo en el puerto 3000
app.use(cors({
  origin: 'http://localhost:3000'
}))

app.use(express.json())
app.use('/api/contacto', contactoRoutes)
app.use('/api/productos', productoRoutes)

app.get('/', (req, res) => {
  res.send('¡Bienvenido al API de Mueblería Jota!');
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
})