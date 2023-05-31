const express = require('express');
const router = express.Router();
const {
    loginUser,
    signupUser,
    getAllUsers,
    getUsers,
    getSingleUser,
    editUser,
    deleteUser
} = require('../controllers/userController');

router.get('/', getAllUsers);
router.get('/:id', getUsers);
router.get('/singleuser/:id', getSingleUser);
router.post('/login', loginUser);
router.post('/signup', signupUser);
router.put('/edit/:id', editUser);
router.delete('/delete/:id', deleteUser);


module.exports = router;
