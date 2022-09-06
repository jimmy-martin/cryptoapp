const express = require('express');
const cryptoController = require('../controllers/cryptoController');
const router = express.Router();

router.get('/', cryptoController.showAll);
router.get('/:id', cryptoController.show);

module.exports = router;