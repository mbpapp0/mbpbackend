const mongoose = require('mongoose');

const childrenSchema = new mongoose.Schema({
    branch: {
        type: String,
        required: true
    },
    user: {
        type: String
    },
    month: {

    },
    name: {
        type: String,
        required: true
    }, 
    age: {
        type: Number,
        required: true
    }, 
    status: {
      type: String
    },
    title_xx: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    date_exited: {
        type: String
    },
    ieg_enrolledment_on_file: {
        type: String,
        required: true
    },
    date_ieg_signed: {
        type: String,
        required: true
    },
    eligibility: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('children', childrenSchema);
