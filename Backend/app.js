const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
//MongoDB Connection
const connectToDb = require('./db/db.js');
connectToDb();
//Middlewares
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRoutes = require('./routes/user.routes.js');
//Test-Route
app.get('/', (req, res) => {
    res.send('Hello World!!');
});
//User-Routes
app.use('/users', userRoutes);

module.exports = app;