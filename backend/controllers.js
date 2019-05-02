const Todo = require('./models')

exports.create = async (req,res,next) => {
    console.log("REQ BODY",req.body);
    const  {text}  = req.body;

    try {
        const newTodo = new Todo({
            text
        })
        await newTodo.save()
        return res.json(newTodo)
    } catch (error) {
        console.log(error)
    }
}

exports.getAll = async (req, res, next) => {
    try {
        const todos = await Todo.find()
        return res.json(todos)
    } catch (err) {
        console.log(err)
    }
}

exports.delete = async (req, res, next) => {
    try {
        const todo = await Todo.findById(req.params.todoId)
        await todo.remove()
        return res.json({ todoId: req.params.todoId })
    } catch (err) {
        console.log(err)
    }
}

exports.complete = async (req, res, next) => {
    try {
        const todo = await Todo.findById(req.params.todoId)
        todo.isCompleted = !todo.isCompleted
        await todo.save()
        return res.json({ todoId: req.params.todoId })
    } catch (err) {
        console.log(err)
    }
}