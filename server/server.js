console.log('Entering through server.js');

const bookRoutes = require('./routes/bookRoutes');
const connectDB = require('./config/db');
const dotenv = require('dotenv').config();
const express = require('express');
const app = express();

const { errorHandler } = require('./Middleware/errorHandler');


const port = process.env.PORT || 5000;
//connect to Database-DB
connectDB();

//Middlewere
app.use(express.json());

//setup routes
app.use("/api/books", bookRoutes)


app.listen(port, () => console.log(`listening to port ${port}`));