  require('dotenv').config();

  module.exports = {
    development: {
      username: process.env['DB_USERNAME'], // Ensure this matches your PostgreSQL user
      password: process.env['DB_PASSWORD'], // Ensure this matches your PostgreSQL password
      database: process.env['DB_NAME'], // Ensure this matches your PostgreSQL database name
      host: process.env['DB_HOST'],           // Important: Use the *container name* (not "localhost")
      port: 5432,                 // PostgreSQL default port
      dialect: 'postgres',
    },
  };
