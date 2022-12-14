const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const Log = require('../models/logModel');

const createToken = (_id) => {
    const token = jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'});

    return token;
}

const getUsers = async(req, res) => {
    const users = await User.find({ branch: req.params.id});

    res.json(users);
}

const getSingleUser = async (req, res) => {
    const singleUser = await User.findById(req.params.id);

    res.status(200).json(singleUser);
}


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

        const log = await Log.create(body);

        res.status(200).json({name, email, branch, role, token});
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    loginUser,
    signupUser,
    getUsers,
    getSingleUser
}