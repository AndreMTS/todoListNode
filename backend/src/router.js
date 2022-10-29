const express = require('express');

const tasksController = require('./controllers/tasksController');

const tasksMiddlewares = require('./middlewares/tasksMiddlewares');



const routes = express.Router();

routes.get('/tasks', tasksController.getAll);

routes.post('/tasks', tasksMiddlewares.validateBody, tasksController.createTask);

routes.delete('/tasks/:id', tasksController.deleteTask);

routes.put('/tasks/:id', tasksController.updateTask);



module.exports = routes;