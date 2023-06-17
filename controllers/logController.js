const Log = require('../models/logModel');

// Gets logs for every user login
const getLog = async (req, res) => {
    const logs = await Log.find({ user: req.params.id}).sort({ createdAt: -1});

    res.json(logs);
}

module.exports = {
    getLog
};
