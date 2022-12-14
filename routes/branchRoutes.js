const express = require('express');
const router = express.Router();
const {
    getBranch, 
    getSingleBranch,
    createBranch,
    deleteBranch
} = require('../controllers/branchControllers');

router.get('/', getBranch);
router.get('/:id', getSingleBranch);
router.post('/', createBranch);
router.delete('/:id', deleteBranch);

module.exports = router;