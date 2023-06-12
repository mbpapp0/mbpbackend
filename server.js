const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const db = process.env.DB;

mongoose.connect(db).then(() => {
    console.log(`Connected to DB`);
    app.listen(port, () => {
        console.log(`App is listening on Port: ${port}`);
    });
}).catch((error) => {
    console.log(error.message)
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());

app.use('/api/branches', require('./routes/branchRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/logs', require('./routes/logRoutes'));
app.use('/api/freemeals', require('./routes/freeMealRoutes'));
app.use('/api/reducedmeals', require('./routes/reducedMealRoutes'));
app.use('/api/clients', require('./routes/clientRoutes'));
app.use('/api/children', require('./routes/childrenRoutes'));

app.post('/connect', (req, res) => {
   res.json(req.body);
})
