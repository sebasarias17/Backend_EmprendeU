
# Emprende U - Backend

Este repositorio contiene el backend del proyecto **Emprende U**, una plataforma web responsiva que permite a emprendedores universitarios crear su propia vitrina digital y mostrar sus productos. Los usuarios pueden ver estos productos y contactar a los emprendedores directamente por WhatsApp.

## Tecnologías utilizadas

- Node.js
- Express.js
- MongoDB + Mongoose
- Jest + mongodb-memory-server (testing)
- CORS
- dotenv
- nodemon (desarrollo)

## Estructura del Backend

```
Backend_EmprendeU/
├── src/
│   ├── config/        
│   ├── controllers/   
│   ├── models/        
│   ├── routes/        
│   ├── services/      
│   ├── tests/         
├── .env               
├── .gitignore
├── index.js
├── nodemon.json
├── package-lock.json
├── package.json
└── README.md
```

## Cómo ejecutar

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/sebasarias17/Backend_EmprendeU.git
   cd Backend_EmprendeU
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Crear archivo `.env` con lo siguiente:
   ```
   PORT=3000
   MONGO_URI=mongodb+srv://<usuario>:<contraseña>@<cluster>.mongodb.net/emprendeu
   USER_ROLES=app_admin,user,entrepreneur
   ```

4. Ejecutar el servidor:
   ```bash
   npm run dev
   ```

## Cómo ejecutar pruebas

```bash
npm test
```

Las pruebas unitarias están disponibles para los modelos:
- `User`
- `Product`
- `Category`
- `Review`

Las pruebas se ejecutan en una base de datos en memoria (`mongodb-memory-server`).

## Modelos implementados

- `User`: con roles `admin`, `user`, `entrepreneur`, incluye validación de correo institucional `.edu`, número de celular obligatorio, verificación de cuenta y foto de perfil opcional.
- `Product`: incluye nombre, precio, descripción, imagen, categoría, emprendedor y etiquetas (`tags`) para clasificar productos de forma flexible.
- `Category`: nombre único y descripción.
- `Review`: evaluación numérica (1–5) y reseña de productos por parte de usuarios.

## Endpoints REST implementados

### Usuarios (`/api/users`)
- `POST /` → Crear usuario
- `GET /` → Listar usuarios
- `GET /:id` → Obtener usuario por ID
- `PUT /:id` → Actualizar usuario
- `DELETE /:id` → Eliminar usuario

### Categorías (`/api/categories`)
- `POST /` → Crear categoría
- `GET /` → Listar categorías
- `GET /:id` → Obtener categoría por ID
- `PUT /:id` → Actualizar categoría
- `DELETE /:id` → Eliminar categoría

### Productos (`/api/products`)
- `POST /` → Crear producto
- `GET /` → Listar productos (filtrable por `tag`)
- `GET /:id` → Obtener producto por ID (con nombre de emprendedor y categoría)
- `PUT /:id` → Actualizar producto
- `DELETE /:id` → Eliminar producto

### Reseñas (`/api/reviews`)
- `POST /` → Crear reseña
- `GET /product/:productId/reviews` → Listar reseñas por producto
- `PUT /:id` → Actualizar reseña
- `DELETE /:id` → Eliminar reseña

### Filtro por tags

Puedes listar productos con un tag específico usando:

```
GET /api/products?tag=vegano
```

## Próximos pasos

- ~~Implementación de rutas (users, products, categories, reviews)~~ ✅ Rutas CRUD implementadas
- Autenticación y autorización con JWT
- Documentación de endpoints con Swagger
- Despliegue a producción

---

> Proyecto creado y mantenido por Sebastián Arias Usma.