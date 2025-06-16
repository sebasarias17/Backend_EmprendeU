const express = require('express');
const connectDB = require('./src/config/db');
const productRoutes = require('./src/routes/product.routes');
const userRoutes = require('./src/routes/user.routes');
const categoryRoutes = require('./src/routes/category.routes');
const reviewRoutes = require('./src/routes/review.routes');
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

//Rutas API Usuario
app.use('/api/users', userRoutes);

//Rutas API Producto
app.use('/api/products', productRoutes);

//Rutas API Categoría
app.use('/api/categories', categoryRoutes);

//Rutas API Reseñas
app.use('/api/reviews', reviewRoutes);

//Iniciamos el servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});