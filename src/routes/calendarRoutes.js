const express = require('express');
const router = express.Router();
const calendarController = require('../controllers/calendarController');

router.get('/', calendarController.findAll);
router.get('/:id', calendarController.findById);
router.post('/', calendarController.create);
router.put('/:id', calendarController.update);
router.patch('/:id/status', calendarController.updateStatus);
router.delete('/:id', calendarController.delete);

module.exports = router;