// routes/secure/userDataRoute.js
const { getToDos, addToDo } = require('../../controllers/userController');
const { jwtMiddleware } = require('../../middleware/jwtMiddleware');

const userDataRoute = (app) => {
    // GET request to /todos with JWT auth
    app.get('/todos', jwtMiddleware, getToDos);
    //POST request to /todos/add
    app.post('/todos/add', jwtMiddleware, addToDo);
};

module.exports = userDataRoute;
