const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./src/config/db');
require('dotenv').config();

//Creamos la app
const app = express();

//Configuramos el puerto por defecto
const PORT = process.env.PORT || 3000;

//Conectamos a la base de datos
connectDB();

//Middleware para JSON
app.use(express.json());

//Ruta de prueba
app.get('/', (req, res) => {
  res.send('EmprendeU API is running...');
}); 

//Iniciamos el servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});