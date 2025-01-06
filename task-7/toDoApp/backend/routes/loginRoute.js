// routes/loginRoute.js
// get the userController
const { loginUser } = require('../controllers/userController');

//Login Route:
const loginRoute = (app) => {
    app.post('/login', loginUser);
    //This route URL will be http://localhost:8080/login
};
// export the login function to be used in "../app.js"
module.exports = loginRoute;
