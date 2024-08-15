const path = require('path');
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { db } = require('./database/config');

const PORT = process.env.PORT || 3000;
// Crear el servidor de express
const app = express();

// Base de datos
//db();

// CORS
app.use(cors());

// Lectura y parseo del body
app.use(express.json());

// Rutas
app.use('/api', require('./routes/users'));
//app.use('/api/events', require('./routes/events'));

// Escuchar peticiones
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
