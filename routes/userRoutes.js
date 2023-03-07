const express = require('express');
const router = express.Router();
const {
    loginUser,
    signupUser,
    getUsers,
    getSingleUser,
    editUser
} = require('../controllers/userController');

router.get('/:id', getUsers);
router.get('/singleuser/:id', getSingleUser);
router.post('/login', loginUser);
router.post('/signup', signupUser);
router.put('/edit/:id', editUser);


module.exports = router;