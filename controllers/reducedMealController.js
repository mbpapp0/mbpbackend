const ReducedMeal = require('../models/reducedMealModel');

// Gets reduced meal guidelines for a specific branch
const getReducedMealData = async(req, res) => {
    const reducedMeal = await ReducedMeal.find({ branch: req.params.id});

    res.status(200).json(reducedMeal);
}

// Creates reduced meal guidelines for a specific branch
const createReducedMealData = async (req, res) => {

    try {
        const reducedmeal = await ReducedMeal.create(req.body);

        res.status(200).json(reducedmeal);
    } catch (error) {
        res.status(400).json({ error : error.message})
    }
}

// Esits reduced meal guidelines for a specific branch
const editReducedMealData = async (req, res) => {
    try {
        const edited = await ReducedMeal.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(edited)
        
    } catch (error) {
        res.status(400).json({ error: error.message})
    }

    
}

module.exports = {
    getReducedMealData,
    createReducedMealData,
    editReducedMealData
};
