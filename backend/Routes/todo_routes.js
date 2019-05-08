
const express = require('express');
const router = express.Router();
const Todo = require('../Controllers/new_todo_controller');


router.get('/:id', Todo.getTodos);
router.post('/:id', Todo.saveTodo);
router.post('/toggle/:id', Todo.toggleTodo);
router.delete('/:id', Todo.deleteTodo);



module.exports = router;



