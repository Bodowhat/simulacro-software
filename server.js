const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();

// Protección de cabeceras HTTP
app.use(helmet());

// Mitigación de ataques de fuerza bruta
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // Limita cada IP a 100 peticiones por ventana
  message: "Demasiadas peticiones desde esta IP, intente de nuevo."
});
app.use('/api/auth/', limiter);
app.use(express.json());

// Simulación de puerto activo
// app.listen(3000, () => console.log('Servidor seguro en puerto 3000'));