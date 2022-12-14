const mongoose = require('mongoose');

const branchSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
        unique: true
    }
}, { timestamps: true });

module.exports = mongoose.model('branches', branchSchema);