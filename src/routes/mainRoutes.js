const express = require('express');
const cryptoController = require('../controllers/cryptoController');
const router = express.Router();

router.get('/', cryptoController.showAll);
router.get('/favicon.ico', (req, res) => {
    res.sendStatus(404);
});
router.get('/:id', cryptoController.show);

module.exports = router;