const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  return res.status(200).send('TODO');
});

module.exports = router;