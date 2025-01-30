//PASO 4_BIS: Después en la carpeta de routes creamos el archivo index.js con el siguiente codígo:

// routes/index.js

const express = require('express');
const router = express.Router();
const usersRoutes = require('./users');

router.use('/', usersRoutes);

module.exports = router;