// routes/registerRoute.js
// get the registerUser Controller from userController
const { registerUser } = require('../controllers/userController');
const { validateUsername } = require('../middleware/validateUsername');

//Login Route:
const registerRoute = (app) => {
    app.post('/register', validateUsername, registerUser);
    //This route URL will be http://localhost:8080/login
};
// export the login function to be used in "../app.js"
module.exports = registerRoute;
