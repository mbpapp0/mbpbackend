const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const userModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    branch: {
        type: String,
    }
}, {timestamps: true});


userModel.statics.signup = async function(name, email, password, role, branch){
    if(!name || !email || !password || !role || !branch){
        throw Error('Please fill in all fields')
    }

    const exists = await this.findOne({ email });

    if(exists){
        throw Error('Email already in use');
    }

    if(!validator.isEmail(email)){
        throw Error('Please enter a valid email');
    }

    if(!validator.isStrongPassword(password)){
        throw Error('Please enter a Strong password');
    }
    
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    password = hash;

    const user = await this.create({name, email, password, role, branch});
    return user;
}

userModel.statics.login = async function(email, password){
    if(!email || !password){
        throw Error('Please fill in all fields');
    }

    const user = await this.findOne({ email });

    if(!user){
        throw Error('Incorrect email or password')
    }

    const match = await bcrypt.compare(password, user.password);

    if(!match){
        throw Error('Incorrect email or password');
    }

    return user;
}

module.exports = mongoose.model('users', userModel);
