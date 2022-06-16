const express = require('express');

const router = express.Router();

const paintsController = require('../controllers/paints.controller');

router.get('/', paintsController.getPaints);

module.exports = router;