/* const router = require('express').Router()
const controllers = require('../Controllers/todo_controller')


router.post('/:user',controllers.create)
router.get('/:id',controllers.getAll)
router.post('/',controllers.create)

router.post('/:id/delete',controllers.delete)
router.post('/:id/complete',controllers.complete);

module.exports=router; */
const express = require('express');
const router = express.Router();
const Todo = require('../Controllers/new_todo_controller');


router.get('/:id',  Todo.getTodos);
router.post('/:id', Todo.saveTodo);
router.delete('/todo/:id', Todo.deleteTodo);
router.put('/todo/:id',  Todo.editTodo);
router.put('/completetodo/:id', Todo.complete);


module.exports = router;



