// routes/secure/userDataRoute.js
const { getToDos, addToDo, updateToDo } = require('../../controllers/userController');
const { jwtMiddleware } = require('../../middleware/jwtMiddleware');

const userDataRoute = (app) => {
    // GET request to /todos with JWT auth
    app.get('/todos', jwtMiddleware, getToDos);
    //POST request to /todos/add
    app.post('/todos/add', jwtMiddleware, addToDo);
    //PUT request to /todos/:id
    app.put('/:id', jwtMiddleware, updateToDo);
};

module.exports = userDataRoute;
