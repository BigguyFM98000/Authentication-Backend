//Importing necessary modules and models
require('dotenv').config()
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Authroute = require("./routes/authRoute")

// Database Connection
// Replace <username>, <password>, <cluster>, and <dbname> with your MongoDB Atlas credentials.
mongoose.connect(process.env.CONN_STRING)
    .then(() => console.log("Database connected successfully"))
    .catch((err) => console.log("Database connection failed", err));
// Starting the Application
const port = 8000;
app.listen(port, () => {
    console.log(`App is running at ${port}`);
});
// Middleware Configuration
// Body-parser to parse incoming request bodies as JSON
app.use(bodyParser.json());
// Cookie-parser for handling cookies
app.use(cookieParser());
// CORS for enabling Cross-Origin Resource Sharing
app.use(cors());
// Routing
// Mounting authentication-related routes under the '/api' endpoint
app.use("/api", Authroute);