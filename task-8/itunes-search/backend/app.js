const express = require('express');
const cors = require('cors');
const searchRoute = require('./routes/searchRoute');

const app = express();

app.use(cors());

app.use(express.json()); // Parse JSON in built in express middleware
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data

searchRoute(app);

//Listening on port 8080
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
