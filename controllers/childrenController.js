const Child = require('../models/childrenModel');

const getChildren = async (req, res) => {
    const children = await Child.find({ branch: req.params.id});

    res.status(200).json(children);
}

const addChild = async(req, res) => {
    const child = await Child.create(req.body);

    try{
        res.status(200).json(child);
        
    } catch(err){
        res.status(400).json({ error: error.message})
    }
}

const approveChild = async(req, res) => {
       
    try {
        const approvedChild = await Child.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(approvedChild)
        
    } catch (error) {
        res.status(400).json({ error: error.message})
    }
}


module.exports = {
    getChildren,
    addChild,
    approveChild
}
