const express = require('express');

const router = express.Router();

const paintsController = require('../controllers/paints.controller');

router.post('/', paintsController.getPaints);

module.exports = router;