const express = require('express');
const fs = require('fs');
const app = express();

//read person.json external file
const person = JSON.parse(fs.readFileSync('person.json', 'utf8'));

//send welcome message on root page
app.get('/', function (req, res) {
    res.send(`Welcome ${person.name}!`);
});

//serve static files in public folder
app.use(express.static('public'));

// send error message if page is not found
app.get('*', function (req, res, next) {
    let err = new Error('Sorry! Can’t find that resource. Please check your URL.');
    err.statusCode = 404;
    next(err);
});

//start server on port 3000
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
