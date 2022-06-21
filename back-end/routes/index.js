const express = require('express');

const router = express.Router();

const paints = require('./paints.route');

router.use('/v1/paints', paints);

module.exports = router;