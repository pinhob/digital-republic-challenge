const express = require('express');

const router = express.Router();

const paintController = require('../controllers/paint.controller');

router.get('/', paintController.getPaints);

module.exports = router;