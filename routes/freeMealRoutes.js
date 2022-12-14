const express = require('express');
const router = express.Router();
const {
    getFreeMealData,
    createFreeMealData,
    editFreeMealData,
} = require('../controllers/freeMealController');

router.get('/:id', getFreeMealData);
router.post('/', createFreeMealData);
router.put('/:id', editFreeMealData);

module.exports = router;