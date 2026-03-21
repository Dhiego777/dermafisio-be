const express = require('express');
const router = express.Router();
const financeiroController = require('../controllers/financeiroController');

router.post('/', financeiroController.create)
.get('/', financeiroController.findAll)
.get('/:id', financeiroController.findById)
.put('/:id', financeiroController.update)
.delete('/:id', financeiroController.delete);

module.exports = router;
