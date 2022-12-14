const mongoose = require('mongoose');

const freeMealSchema = new mongoose.Schema({
    branch: {
        type: String,
        required: true,
        unique: true
    }, 
    houseHoldOne: {
        type: Number,
        required: true
    },
    houseHoldTwo: {
        type: Number,
        required: true
    },
    houseHoldThree: {
        type: Number,
        required: true
    },
    houseHoldFour: {
        type: Number,
        required: true
    },
    houseHoldFive: {
        type: Number,
        required: true
    },
    houseHoldSix: {
        type: Number,
        required: true
    },
    houseHoldSeven: {
        type: Number,
        required: true
    },
    houseHoldEight: {
        type: Number,
        required: true
    },
    AdditionalHousehold: {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model('freemeals', freeMealSchema);