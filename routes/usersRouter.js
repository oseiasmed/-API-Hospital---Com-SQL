const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/usuarios-controller');

router.post('/cadastro', UsersController.cadastrarUsuario);
router.post('/login', UsersController.Login)

module.exports = router;