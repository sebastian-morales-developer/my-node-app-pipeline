require('dotenv').config();

module.exports = {
  development: {
    username: process.env['DB_USERNAME'], // Usuario de la base de datos
    password: process.env['DB_PASSWORD'], // Contraseña del usuario
    database: process.env['DB_NAME'],     // Nombre de la base de datos
    host: process.env['DB_HOST'],         // Nombre del servicio PostgreSQL en Kubernetes
    port: 5432,                           // Puerto por defecto de PostgreSQL
    dialect: 'postgres',                  // Motor de la base de datos
  },
  production: {
    username: process.env['DB_USERNAME'],
    password: process.env['DB_PASSWORD'],
    database: process.env['DB_NAME'],
    host: process.env['DB_HOST'],
    port: 5432,
    dialect: 'postgres',
    dialectOptions: {
      ssl: { require: true, rejectUnauthorized: false } // Configuración SSL (ajústalo según tu necesidad)
    }
  }
};
