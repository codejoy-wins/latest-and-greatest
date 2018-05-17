// I understand this file
const controller = require('./../controllers/control.js');
module.exports = function(app){
    app.get('/tasks', controller.index);  // Shows all tasks
    app.get('/tasks/:id', controller.task); // Shows a particular task
    app.post('/tasks', controller.new) // Creates a new task
    app.put('/tasks/:id', controller.update) // Updates a particular task
    app.delete('/tasks/:id', controller.delete) // Deletes a particular task
}