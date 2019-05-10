
const express = require('express');
const router = express.Router();
const Todo = require('../Controllers/todo_controller');


router.get('/:id', Todo.getTodos);
router.post('/:id', Todo.saveTodo);
router.put('/:id', Todo.toggleTodo);
router.delete('/delete', Todo.deleteTodo);



module.exports = router;



