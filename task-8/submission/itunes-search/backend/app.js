const express = require('express');
const cors = require('cors');
const searchRoute = require('./routes/searchRoute');

const app = express();

app.use(cors());

app.use(express.json()); // Parse JSON in built in express middleware
app.use(express.urlencoded({ extended: true }));

searchRoute(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
