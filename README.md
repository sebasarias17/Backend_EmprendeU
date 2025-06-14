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

- `User`: con roles `admin`, `user`, `seller`, validación de correo institucional `.edu`.
- `Product`: incluye nombre, precio, descripción, imagen, categoría y emprendedor.
- `Category`: nombre único y descripción.
- `Review`: evaluación numérica (1–5) y reseña de productos por parte de usuarios.

## Próximos pasos

- Implementación de rutas (users, products, categories, reviews)
- Autenticación y autorización con JWT
- Documentación de endpoints con Swagger
- Despliegue a producción

---

> Proyecto creado y mantenido por Sebastián Arias Usma.