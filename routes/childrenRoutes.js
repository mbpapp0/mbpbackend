const express = require('express');
const router = express.Router();
const {
    getChildren,
    addChild
} = require('../controllers/childrenController')

router.get('/:id', getChildren);
router.post('/', addChild);

module.exports = router;
