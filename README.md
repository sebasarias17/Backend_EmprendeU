# Emprende U - Backend

Este repositorio contiene el backend del proyecto **Emprende U**, una plataforma web responsiva que permite a emprendedores universitarios crear su propia vitrina digital y mostrar sus productos. Los usuarios pueden ver estos productos y contactar a los emprendedores directamente por WhatsApp.

## Tecnologías utilizadas

- Node.js
- Express.js
- MongoDB + Mongoose
- CORS
- dotenv
- nodemon (desarrollo)

## Estructura del Backend

```
Backend_EmprendeU_/
├── src/
│   ├── config/        --> Conexión a la base de datos
│   ├── controllers/   --> Lógica de negocio
│   ├── models/        --> Modelos de datos (Mongoose)
│   ├── routes/        --> Endpoints de la API
│   ├── services/      --> Funciones reutilizables
├── .env               --> Variables de entorno
├── .gitignore
├── nodemon.json
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
   MONGO_URI=mongodb://localhost:27017/emprende-u
   ```

4. Ejecutar el servidor:
   ```bash
   npm run dev
   ```

## Estado actual

✅ Estructura base creada  
🕓 Próximo paso: conexión a MongoDB y definición del modelo Emprendimiento
