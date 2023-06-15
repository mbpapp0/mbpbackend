const Client = require('../models/clientModel');

const getClients = async (req, res) => {
    const clients = await Client.find({ branch: req.params.id});

    res.status(200).json(clients);
}

const getClientByUser = async (req, res) => {
    try {
        const client = await Client.find({ userID: req.params.id });

        res.status(200).json(client);   
    } catch (error) {
        res.status(400).json({ error: error.message})
    }
    
}

const getClient = async (req, res) => {
    try {
        const clients = await Client.find({ _id: req.params.id });

        res.status(200).json(clients);   
    } catch (error) {
        res.status(400).json({ error: error.message})
    }
    
}

const addClient = async (req, res) => {
    try {
        const newClient = await Client.create(req.body);

        res.status(200).json(newClient);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const editClient = async(req, res) => {
      
    try {
        const editedClient = await Client.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(editedClient)
        
    } catch (error) {
        res.status(400).json({ error: error.message})
    }
}

const testClient = async (req, res, next) => {
    console.log(req.body);
    next();
}

       
module.exports = {
    getClients,
    getClient,
    addClient,
    getClientByUser,
    editClient,
    testClient
}
