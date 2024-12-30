// routes/secure/userDataRoute.js
const { getToDos } = require('../../controllers/userController');
const { jwtMiddleware } = require('../../middleware/jwtMiddleware');

const userDataRoute = (app) => {
    // GET request to /data with JWT auth
    app.get('/todos', jwtMiddleware, getToDos);
};

module.exports = userDataRoute;
