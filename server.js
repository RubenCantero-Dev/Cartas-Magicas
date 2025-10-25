require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api', require('./src/routes/cardRoutes'));

// Ruta de bienvenida
app.get('/', (req, res) => {
  res.json({
    message: 'Bienvenido al Sistema de Cartas Mágicas',
    version: '1.0.0',
    endpoints: {
      cartas: {
        'GET /api/cards': 'Obtener todas las cartas',
        'GET /api/cards/:id': 'Obtener una carta específica',
        'POST /api/cards': 'Crear nueva carta',
        'PUT /api/cards/:id': 'Actualizar carta',
        'DELETE /api/cards/:id': 'Eliminar carta'
      },
      auxiliares: {
        'GET /api/types': 'Obtener tipos de carta',
        'GET /api/cities': 'Obtener ciudades de origen'
      }
    }
  });
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Ruta no encontrada'
  });
});

app.listen(PORT, () => {
  console.log(`Servidor de Cartas Mágicas corriendo en puerto ${PORT}`);
  console.log(`URL: http://localhost:${PORT}`);
  console.log(`Listo para recibir peticiones!`);
});