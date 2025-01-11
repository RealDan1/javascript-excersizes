//backend/app.js
const express = require('express');
const cors = require('cors');
const searchRoute = require('./routes/searchRoute');

const app = express();

const corsOptions = {
    origin: 'http://localhost:3000', // Allow requests from this origin
    methods: ['GET', 'POST', 'OPTIONS'], // Allow these HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
    credentials: true, // If cookies or credentials are needed
};

app.use(cors(corsOptions));

app.use(express.json()); // Parse JSON in built in express middleware
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data

searchRoute(app);

//Listening on port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
