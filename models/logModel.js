const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    ip: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('logs', logSchema);