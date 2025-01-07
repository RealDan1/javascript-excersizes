// routes/secure/userDataRoute.js
const { getToDos, addToDo, updateToDo, toggleToDo } = require('../../controllers/userController');
const { jwtMiddleware } = require('../../middleware/jwtMiddleware');

const userDataRoute = (app) => {
    // GET request to /todos with JWT auth - to fetch all todos
    app.get('/todos', jwtMiddleware, getToDos);
    //POST request to add a todo
    app.post('/todos/add', jwtMiddleware, addToDo);
    //PUT request to update the toDo
    app.put('/:id', jwtMiddleware, updateToDo);
    //PUT request to toggle the completed stat
    app.put('/toDos/toggle/:id', jwtMiddleware, toggleToDo);
};

module.exports = userDataRoute;
