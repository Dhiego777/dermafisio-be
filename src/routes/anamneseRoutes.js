const express = require('express');
const router = express.Router();
const anamneseController = require('../controllers/anamneseController');

router.post('/', anamneseController.create)
.get('/', anamneseController.findAll)
.get('/:id', anamneseController.findById)
.put('/:id', anamneseController.update)
.delete('/:id', anamneseController.delete);

module.exports = router;