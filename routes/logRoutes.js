const express = require('express');
const router = express.Router();
const { getLog } = require('../controllers/logController');

router.get('/:id', getLog);

module.exports = router;