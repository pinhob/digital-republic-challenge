const express = require('express');

const router = express.Router();

const paints = require('./paints.route');

router.use('/paints', paints);

module.exports = router;