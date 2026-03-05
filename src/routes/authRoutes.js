const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/auth');

router.post('/login', authController.login);

// Rota protegida - apenas usuários autenticados podem criar novos usuários
router.post('/usuarios', authMiddleware, authController.createUser);

module.exports = router;
