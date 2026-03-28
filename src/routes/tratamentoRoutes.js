const express = require('express');
const router = express.Router();
const tratamentoController = require('../controllers/tratamentoController');

router.post('/', tratamentoController.create)
    .get('/', tratamentoController.findAll)
    .get('/cliente/:clienteId', tratamentoController.findByClienteId)
    .get('/:id', tratamentoController.findById)
    .put('/:id', tratamentoController.update)
    .delete('/:id', tratamentoController.delete);

module.exports = router;
