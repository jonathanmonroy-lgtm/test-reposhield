const express = require('express');
const router = express.Router();
const db = require('./database');

router.post('/login', async (req, res) => {
    // ❌ VULNERABILIDAD CRÍTICA: Concatenación directa de datos del usuario
    const query = "SELECT * FROM users WHERE email = '" + req.body.email + "' AND password = '" + req.body.password + "'";

    db.query(query, (err, result) => {
        if (result.length > 0) res.send("Bienvenido");
    });
});
