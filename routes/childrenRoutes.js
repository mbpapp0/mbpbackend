const express = require('express');
const router = express.Router();
const {
    getChildren,
    addChild,
    approveChild
} = require('../controllers/childrenController')

router.get('/:id', getChildren);
router.post('/', addChild);
router.put('approve/:id', approveChild)

module.exports = router;
