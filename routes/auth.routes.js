const { Router } = require('express');

// Métodos en controlador
const { login, register } = require('../controllers/auth.controller');

const router = Router();

router.post('/login', login);

router.post('/register', register);

module.exports = router;
