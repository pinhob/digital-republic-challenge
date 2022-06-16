const express = require('express');

const router = express.Router();

const paint = require('./paint.route');

router.use('/paint', paint);

module.exports = router;