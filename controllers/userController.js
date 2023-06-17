const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const Log = require('../models/logModel');
const { default: mongoose } = require('mongoose');

// Token for user authentication
const createToken = (_id) => {
    const token = jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'});

    return token;
}

// Gets all users
const getAllUsers = async(req, res) => {
    const users = await User.find();

    res.json(users);
}

// Gets all users from a specific branch
const getUsers = async(req, res) => {
    const users = await User.find({ branch: req.params.id});

    res.json(users);
}

// Gets a single user
const getSingleUser = async (req, res) => {
    const singleUser = await User.findById(req.params.id);

    res.status(200).json(singleUser);
}

// Signup User
const signupUser = async(req, res) => {
    const { name, email, password, role, branch } = req.body;
    

    try {
        const user = await User.signup(name, email, password, role, branch);
        const token = createToken(user._id);

        res.status(200).json({
            name,
            email,
            role,
            branch,
            token
        });
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
}

// Logins user
const loginUser = async (req, res) => {
    const { email, password} = req.body;

    try {
        const user = await User.login(email, password);
        const token = createToken(user._id);
        const body = {
            user: user._id,
            ip: req.ip
        };
        const name = user.name;
        const role = user.role;
        const branch = user.branch;
        const id = user._id;

        const log = await Log.create(body);
        console.log({id, name, email, branch, role, token})

        res.status(200).json({id, name, email, branch, role, token});
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// edit user information
const editUser = async(req, res) => {
        const {name, email, sameEmail} = req.body;
    
        if(!name || !email){
          return res.status(400).json({error: 'Please fill in the field'});
        }
      
        const exists = User.find({ email: req.body.email });
   
        
        
        
    try {
        const editedUser = await User.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(editedUser)
        
    } catch (error) {
        res.status(400).json({ error: error.message})
    }
}

// Deletes a user
const deleteUser = async(req, res) => {
    try {
        const editedUser = await User.findByIdAndDelete(req.params.id);
        res.status(200).json({message: 'User deleted successfully'})
        
    } catch (error) {
        res.status(400).json({ error: error.message})
    }
}
module.exports = {
    loginUser,
    signupUser,
    getAllUsers,
    getUsers,
    getSingleUser,
    editUser,
    deleteUser
}
