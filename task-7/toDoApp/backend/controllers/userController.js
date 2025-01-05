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
    const { userName, password } = req.body;

    //check if the user exists in the database - returns a boolean
    const user = userInformation.find((user) => user.userName === userName && user.password === password);
    if (user) {
        return res.status(400).send('User already exists');
    }
    //otherwise create the new user and push it to userInformation
    const newUser = {
        id: userInformation.length + 1,
        userName: userName, // from req.body
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
        res.send(`Registration successful: User ${userName} registered`);
        console.log(`User ${userName} registered`);
    });
};

// Define the login controller functions
//====================================
const userController = (req, res) => {
    //Get the userName and password from the request body
    const { userName, password } = req.body;
    //Find the user in the database - returns a boolean
    const user = userInformation.find((user) => user.userName === userName && user.password === password);
    //If the user is not found, return an error message - end the request
    if (!user) {
        return res.send('Incorrect user credentials');
    }

    // Create a JWT token payload
    const payload = {
        name: userName,
        admin: false,
    };
    // sign(payload, secretOrPrivateKey, [options, callback])
    const token = jwt.sign(JSON.stringify(payload), 'HyperionDev', {
        algorithm: 'HS256',
    });
    //The res.send() function sends a string to the client
    console.log(`User ${userName} logged in`);
    res.send({ message: `Welcome back ${userName}`, token: token });
    //export controller functions to be used on the myLoggerRoute.js/routes
};

// Define the user data controller function (READ)
//========================================
const getToDos = (req, res) => {
    // We get the userName from the token’s payload(no admin required)
    const { name, admin } = req.payload;
    //Find the user in the database - checking if the userName and password
    //matches;
    const user = userInformation.find((user) => user.userName === name);
    // If the user is found, return the user's todos
    if (user) {
        return res.send(user); //send the whole user file instead of just the todos so we can do fun stuff like display the user name later if needed
    } else {
        return res.status(404).send({ error: 'User not found' }); // Handle no user found
    }
};

module.exports = {
    userController,
    getToDos,
    registerUser,
};
