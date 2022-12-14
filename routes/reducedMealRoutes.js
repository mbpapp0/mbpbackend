const express = require('express');
const router = express.Router();
const {
    getReducedMealData,
    createReducedMealData,
    editReducedMealData
} = require('../controllers/reducedMealController');

router.get('/:id', getReducedMealData);
router.post('/', createReducedMealData);
router.put('/:id', editReducedMealData);

module.exports = router;