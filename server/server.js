console.log('Entering through server.js');

const bookRoutes = require('./routes/bookRoutes');
const connectDB = require('./config/db');
const dotenv = require('dotenv').config();
const borrowingRoutes = require('./routes/borrowingRoutes');
const userRoutes = require('./routes/userRoutes');
const cookieParser = require('cookie-parser');


const express = require('express');
const app = express();

const  errorHandler  = require('./Middleware/errorHandler');
const { auth } = require('./Middleware/authMiddleware');


const port = process.env.PORT || 5000;
//connect to Database-DB
connectDB();

//Middlewere
app.use(cookieParser());
app.use(express.json());

//setup routes
app.use("/auth", auth)
app.use("/api/books", bookRoutes)
app.use("/api/borrowings", borrowingRoutes)
app.use("/api/users", userRoutes);


app.use(errorHandler);
app.listen(port, () => console.log(`listening to port ${port}`));