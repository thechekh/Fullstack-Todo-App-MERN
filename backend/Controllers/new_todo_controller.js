
const Todo = require('../Models/new_todo_model');

exports.getTodos = (req, res, next) => {
    const id = req.params.id;
    Todo.find({ user: id })
        .then(result => res.send(result))
        .catch(err => next(err));
}

exports.saveTodo = (req, res, next) => {
    const text = req.body.task;
    const id = req.params.id;
    if (!text) {
        res.status(400);
        res.json({ "error": "Invalid Data" });
    }
    const todo = new Todo({
        text: text,
        completed: false,
        user: id
    });
    todo.save((err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
}

exports.deleteTodo = (req, res, next) => {
    const id = req.params.id;
    const { taskid } = req.body;
        Todo.remove({ _id: taskid }, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send({ taskid });
        }
    })
}


exports.toggleTodo = (req, res, next) => {
    const id = req.params.id;
    const { taskid } = req.body;
    Todo.findById(taskid, async (err, todo) => {
        if (err) {
            res.send(err);
        } else {
            todo.completed = !todo.completed;
            await todo.save()
            return res.json({ todo })
        }
    })
}