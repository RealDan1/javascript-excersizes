const express = require('express');
const loginRoute = require('./routes/loginRoute');
const userDataRoute = require('./routes/secure/userDataRoute');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// import the myLoggerRoute
const myLoggerRoute = require('./routes/myLoggerRoute');

// Step 1: call the myLoggerRoute function and pass in the app object as an argument

myLoggerRoute(app);
// ==> From here go to routes/myLoggerRoute.js

//use the loginRoute in the app
loginRoute(app);

userDataRoute(app);

//Listening on port 8080
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

// The server will run on port 8080 / http://localhost:8080

/*
 ** Getting started: Installation
 ** Step 1: Open the current directory in your terminal
 ** Step 2: Run the command: npm install
 ** Step 3: Run the command: npm start
 */
