const mysql = require('mysql');

const db = mysql.createConnection({
  host: '10.10.11.125',
  port: '3306',
  user: 'usuario1',
  password: 'usuario1',
  database: 'Tienda'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Conectado a la base de datos MySQL');
});

module.exports = db;
