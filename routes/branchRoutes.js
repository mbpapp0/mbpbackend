const express = require('express');
const router = express.Router();
const {
    getBranch, 
    getSingleBranch,
    createBranch,
    editBranchName,
    deleteBranch
} = require('../controllers/branchControllers');

router.get('/', getBranch);
router.get('/:id', getSingleBranch);
router.post('/', createBranch);
router.put('/:id', editBranchName);
router.delete('/:id', deleteBranch);

module.exports = router;
