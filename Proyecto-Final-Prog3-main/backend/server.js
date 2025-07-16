const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const { sequelize } = require('./models');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware de seguridad
app.use(helmet());

// CORS
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true
}));

// Middleware de parsing
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Logging
if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('combined'));
}

// Rutas
app.use('/api/juegos', require('./routes/juego.routes'));

// Health check en la raíz
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Seeder automático
async function runSeeders() {
  try {
    const { up } = require('./seeders/20250712215334-demo-tasks');
    await up(sequelize.getQueryInterface(), sequelize.Sequelize);
    console.log('✅ Seeders ejecutados correctamente');
  } catch (error) {
    console.error('❌ Error al ejecutar seeders:', error);
  }
}

// Sincronizar base de datos y arrancar el servidor
sequelize.sync().then(async () => {
  console.log('🟢 Base de datos sincronizada');

  await runSeeders(); // se ejecuta el seeder automáticamente

  app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  });
});
