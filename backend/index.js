const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

// Endpoint para obtener datos de cualquier tabla
app.get('/api/tabla/:nombreTabla', async (req, res) => {
  const { nombreTabla } = req.params;
  
  try {
    const connection = await pool.getConnection();
    const [rows, fields] = await connection.query(`SELECT * FROM ${nombreTabla}`);
    connection.release(); // Liberar la conexión

    res.json(rows);
  } catch (err) {
    console.error(`Error al obtener datos de la tabla ${nombreTabla}:`, err);
    res.status(500).send(`Error al obtener datos de la tabla ${nombreTabla}`);
  }
});

// Endpoint para filtrar productos
app.post('/api/tabla/productos/filtrar', async (req, res) => {
  const filtros = req.body;
  
  try {
    const connection = await pool.getConnection();

    let sql = 'SELECT * FROM productos WHERE 1=1';
    const values = [];

    if (filtros.precio !== undefined) {
      sql += ' AND precio <= ?';
      values.push(filtros.precio);
    }
    if (filtros.cantidad !== undefined) {
      sql += ' AND cantidad >= ?';
      values.push(filtros.cantidad);
    }
    if (filtros.disponibilidad !== undefined) {
      sql += ' AND disponibilidad = ?';
      values.push(filtros.disponibilidad);
    }

    const [rows, fields] = await connection.query(sql, values);
    connection.release(); // Liberar la conexión

    res.json(rows);
  } catch (err) {
    console.error('Error al filtrar productos:', err);
    res.status(500).send('Error al filtrar productos');
  }
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
