// backend//controllers/userController.js
// Require the user data from simulated database
const userInformation = require('./userDb');
const jwt = require('jsonwebtoken');
const fs = require('fs'); //used to write to the userDb.js
const path = require('path');
const userDbPath = path.join(__dirname, './userDb.js');

//Define the registration controller functions:
//===========================================
const registerUser = (req, res) => {
    const { username, password } = req.body;

    //check if the user exists in the database - returns a boolean
    const user = userInformation.find((user) => user.username === username && user.password === password);
    if (user) {
        return res.status(400).send('User already exists');
    }
    //otherwise create the new user and push it to userInformation
    const newUser = {
        id: userInformation.length + 1,
        username: username, // from req.body
        password: password, // from req.body
        todos: [],
    };

    userInformation.push(newUser); // push to the array
    //add the userInformation to the userDb.js file:
    fs.writeFile(userDbPath, `module.exports = ${JSON.stringify(userInformation)}`, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error saving user');
        }
        res.send(`Registration successful: User ${username} registered`);
        console.log(`User ${username} registered`);
    });
};

// Define the login controller functions
//====================================
const userController = (req, res) => {
    //Get the username and password from the request body
    const { username, password } = req.body;
    //Find the user in the database - returns a boolean
    const user = userInformation.find((user) => user.username === username && user.password === password);
    //If the user is not found, return an error message - end the request
    if (!user) {
        return res.send('Incorrect user credentials');
    }

    // Create a JWT token payload
    const payload = {
        name: username,
        admin: false,
    };
    // sign(payload, secretOrPrivateKey, [options, callback])
    const token = jwt.sign(JSON.stringify(payload), 'HyperionDev', {
        algorithm: 'HS256',
    });
    //The res.send() function sends a string to the client
    console.log(`User ${username} logged in`);
    res.send({ message: `Welcome back ${username}`, token: token });
    //export controller functions to be used on the myLoggerRoute.js/routes
};

// Define the user data controller function (READ)
//========================================
const getToDos = (req, res) => {
    // We get the username from the token’s payload(no admin required)
    const { name, admin } = req.payload;
    //Find the user in the database - checking if the username and password
    //matches;
    const user = userInformation.find((user) => user.username === name);
    // If the user is found, return the user's todos
    if (user) {
        return res.send(user.todos);
    } else {
        return res.status(404).send({ error: 'User not found' }); // Handle no user found
    }
};

module.exports = {
    userController,
    getToDos,
    registerUser,
};
