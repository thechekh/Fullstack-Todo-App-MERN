const Todo = require('../Models/todo_model')
const User = require('../Models/user_model')
exports.create = async (req, res, next) => {

    const { task, id } = req.body;
    console.log(task, id);
    try {
        /*         const NewUser = await User.findById(id)
        console.log(NewUser);
        NewUser.todo.push(text); */
        // await newTodo.save()
        //return res.json(newTodo)
        const newTodo = {
            id: Math.random(),
            task,
            isCompleted: false,
        }
        User.findById(id, function (err, user) {
            if (err) throw err;

         
            user.todo.push(newTodo);

            user.save(function (err) {
                if (err) throw err;

                console.log('Todo added sucessfly');
            });
        });
     return res.json(newTodo)
    } catch (error) {
        console.log(error)
    }
    
}
exports.getAll = async (req, res, next) => {
    try {
        id=req.params.id;
       console.log(id);
       User.findById(id, function (err, user) {
    console.log(user.todo);
    return res.json(user.todo);
    });
    } catch (err) {
        console.log(err)
    }
}

exports.delete = async (req, res, next) => {


    try {
        const todo = await Todo.findById(req.params.id)
        await todo.remove()

        return res.json({ id: req.params.id })
    } catch (err) {
        console.log(err)
    }
}

exports.complete = async (req, res, next) => {
    try {
        console.log(req.params.id);
        const todo = await Todo.findById(req.params.id)
        todo.isCompleted = !todo.isCompleted
        await todo.save()
        return res.json({ todoId: req.params.todoId })
    } catch (err) {
        console.log(err)
    }
}