const ReducedMeal = require('../models/reducedMealModel');

const getReducedMealData = async(req, res) => {
    const reducedMeal = await ReducedMeal.find({ branch: req.params.id});

    res.status(200).json(reducedMeal);
}

const createReducedMealData = async (req, res) => {

    try {
        const reducedmeal = await ReducedMeal.create(req.body);

        res.status(200).json(reducedmeal);
    } catch (error) {
        res.status(400).json({ error : error.message})
    }
}

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