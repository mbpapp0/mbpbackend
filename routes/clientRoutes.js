const express = require('express');
const router = express.Router();
const {
    getClients,
    getClient,
    addClient,
    testClient
} = require('../controllers/clientController');

router.get('/:id', getClients);
router.get('/client/:id', getClient);
router.post('/', addClient);
router.post('/test', testClient);

module.exports = router;
