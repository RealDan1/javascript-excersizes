// routes/userDataRoute.js
const { getTodos } = require('../../controllers/userController');
const { jwtMiddleware } = require('../../middleware/jwtMiddleware');

const userDataRoute = (app) => {
    // GET request to /data with JWT auth
    app.get('/data', jwtMiddleware, getTodos);
};

module.exports = userDataRoute;
