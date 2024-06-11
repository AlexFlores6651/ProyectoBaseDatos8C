const express = require('express');
const db = require('./db');
const app = express();
const port = 3000;


app.get('/productos', (req, res) => {
  db.query('SELECT * FROM productos', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get('/api/datos/:tabla', (req, res) => {
    const tabla = req.params.tabla;
    db.query(`SELECT * FROM ${tabla}`, (err, results) => {
        if(err) throw err;
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
  });