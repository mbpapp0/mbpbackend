const express = require('express');
const router = express.Router();
const {
    loginUser,
    signupUser,
    getUsers,
    getSingleUser
} = require('../controllers/userController');

router.get('/:id', getUsers);
router.get('/singleuser/:id', getSingleUser);
router.post('/login', loginUser);
router.post('/signup', signupUser);


module.exports = router;