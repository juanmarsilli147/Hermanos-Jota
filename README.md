# E-commerce Mueblería Hermanos Jota  
**Consigna Final Sprints 3 y 4**

---

## Integrantes
- Altube, Renata (@renaaltub)  
- Andreassi, Facundo V. (@facu-v01)  
- Cazzulino, Marcos (@MarcosCazzulino)  
- Marsilli, Juan I. (@juanmarsilli147)

---

## Descripción General
Proyecto de e-commerce **Mueblería Hermanos Jota**, desarrollado como parte de los **Sprints 3 y 4**.  
Se realizó la **migración completa** desde un sitio construido con **HTML, CSS y JavaScript puro** a una aplicación escalable con **React (frontend)** y **Node.js + Express (backend)**.  
El nuevo sistema permite visualizar productos, ver sus detalles, simular un carrito de compras y realizar consultas desde un formulario de contacto.

---

## Instalación y Ejecución

### Clonar el repositorio
- git clone https://github.com/facu-v01/Hermanos-Jota.git
- cd Hermanos-Jota

### Incializacion del backend
**Ejecutar los siguientes comandos en orden**
- cd server 
- npm install
- npm start
- Servidor corriendo en el http://localhost:4000

### Incializacion del frontend
**Ejecutar los siguientes comandos en orden**
- cd client 
- npm install
- npm start
- Servidor corriendo en el http://localhost:3000

---

## Descripción de la Arquitectura (Cliente - Servidor)

### Frontend (React)
- Desarrollado como una **Single Page Application** con **React**.  
- Se migró desde HTML, CSS y JS puro hacia componentes reutilizables con JSX.  
- Usa `useState` para manejar el estado y **props** para la comunicación entre componentes.  
- Implementa **renderizado condicional** para alternar entre las vistas:
  - Pagina Inicio
  - Catálogo de productos  
  - Detalle de producto  
  - Formulario de contacto  
- Simulación de carrito con contador global manejado en `App.jsx`.  
- Estilos con diseño **responsive (Mobile First)** usando Flexbox y Grid.

### Backend (Node.js + Express)
- Implementa un **servidor web** con Express.  
- Fuente de datos local (archivo JS con array de productos).  
- Endpoints definidos:
  - `GET /api/productos` : Devuelve todos los productos.
  - `GET /api/productos/:id` : Devuelve el detalle de un producto específico.
- Incluye:
  - **Middleware de logging** para registrar método y URL de cada petición.  
  - **Manejo de rutas modular** con `express.Router`.  
  - **Manejo de errores centralizado** para respuestas 404 y errores de servidor.

---

## Decisiones Técnicas
- Separación clara entre cliente y servidor para facilitar mantenimiento.  
- Comunicación a través de **API** entre el cliente y el servidor.  
- Enfoque **modular y escalable** en Express (rutas, controladores, middlewares).  
- **SPA en React** para mejorar la experiencia del usuario.
