// Data for each individual child entered in all IEG Forms

const Child = require('../models/childrenModel');

// Get all children from a specific branch
const getChildren = async (req, res) => {
    const children = await Child.find({ branch: req.params.id});

    res.status(200).json(children);
}

const getChildrenByUser = async (req, res) => {
    const children = await Child.find({ user: req.params.id});

    res.status(200).json(children);
}

// Add a single child data 
const addChild = async(req, res) => {
    const child = await Child.create(req.body);

    try{
       res.status(200).json(child);
        
    } catch(err){
        res.status(400).json({ error: error.message})
    }
}




module.exports = {
    getChildren,
    addChild,
    getChildrenByUser
}
