const FreeMeal = require('../models/freeMealModel');

const getFreeMealData = async(req, res) => {
    const freeMeal = await FreeMeal.find({ branch: req.params.id});

    res.status(200).json(freeMeal);
}

const createFreeMealData = async (req, res) => {

    try {
        const freemeal = await FreeMeal.create(req.body);

        res.status(200).json(freemeal);
    } catch (error) {
        res.status(400).json({ error : error.message})
    }
}

const editFreeMealData = async (req, res) => {
    try {
        const edited = await FreeMeal.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(edited)
        
    } catch (error) {
        res.status(400).json({ error: error.message})
    }

    
}


module.exports = {
    getFreeMealData,
    createFreeMealData,
    editFreeMealData,
};