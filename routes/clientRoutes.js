const express = require('express');
const router = express.Router();
const {
    getClients,
    getClient,
    addClient
} = require('../controllers/clientController');

router.get('/:id', getClients);
router.get('/client/:id', getClient);
router.post('/', addClient);

module.exports = router;