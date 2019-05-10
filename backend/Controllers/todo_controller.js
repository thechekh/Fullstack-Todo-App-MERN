
const Todo = require('../Models/todo_model');
exports.getTodos = async (req, res, next) => {
    const id = req.params.id;
    const todos = await Todo.find({ user: id })
    return res.json(todos)
}

exports.saveTodo = async (req, res, next) => {
    const text = req.body.task;
    const id = req.params.id;
    const todo = await Todo.create(
        {
            text: text,
            completed: false,
            user: id
        });
    return res.json(todo)
}

exports.deleteTodo = async (req, res, next) => {
    const { taskid } = req.body;
    await Todo.findByIdAndDelete(taskid)

    return res.json({ taskid });
}
exports.toggleTodo = async (req, res, next) => {
    const { taskid } = req.body;
    Todo.findByIdAndUpdate(taskid, body)
    await Todo.findById(taskid, async (err, todo) => {
        if (err) {
            res.send(err);
        } else {
            todo.completed = !todo.completed;
            await todo.save()
        }
        return res.json({ todo })
    })
}
