const mysql = require('mysql2/promise'); // Importa mysql2 con soporte para promesas

// Configuración de la conexión a la base de datos MySQL
const pool = mysql.createPool({
  host: '10.10.11.126',
  user: 'usuario1',
  password: 'usuario1',
  database: 'Tienda',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;
