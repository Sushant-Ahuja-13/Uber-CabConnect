const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const express = require('express');
const userRoutes = require('./routes/user.routes.js');
const app = express();
//MongoDB Connection
const connectToDb = require('./db/db.js');
connectToDb();
//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Test-Route
app.get('/', (req, res) => {
    res.send('Hello World!!');
});
//User-Routes
app.use('/users', userRoutes);

module.exports = app;