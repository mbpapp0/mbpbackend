const Client = require('../models/clientModel');
const Child = require('../models/childrenModel');

// Gets all the IEG Forms from a specific Branch
const getClients = async (req, res) => {
    const clients = await Client.find({ branch: req.params.id});

    res.status(200).json(clients);
}

// Get From depending on the user who submitted
const getClientByUser = async (req, res) => {
    try {
        const client = await Client.find({ userID: req.params.id });

        res.status(200).json(client);   
    } catch (error) {
        res.status(400).json({ error: error.message})
    }
    
}

// Get a specific form by its unique identifer
const getClient = async (req, res) => {
    try {
        const clients = await Client.find({ _id: req.params.id });

        res.status(200).json(clients);   
    } catch (error) {
        res.status(400).json({ error: error.message})
    }
    
}

// Creates a new form
const addClient = async (req, res, next) => {
    try {
        const newClient = await Client.create(req.body);

        res.status(200).json(newClient);
        
    } catch (error) {2
        res.status(400).json({error: error.message});
    }
}


// Approves a submitted form
const editClient = async(req, res) => {
    
      
    try {

        const editedClient = await Client.findOneAndUpdate({ _id: req.params.id }, req.body);

        
        const editChild = await Child.updateMany({ user: req.params.id }, { status: 'Approved' });
        console.log(req.params.id);
        console.log(editChild);
        console.log(req.body);
        res.status(200).json(editedClient)
        
    } catch (error) {
        res.status(400).json({ error: error.message})
    }
}

// Test function
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
