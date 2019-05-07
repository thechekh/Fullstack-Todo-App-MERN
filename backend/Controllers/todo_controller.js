
const User = require('../Models/user_model')
exports.create = async (req, res, next) => {

    const { task, id } = req.body;
    console.log(task, id);
    try {
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
        const id = req.params.id;
        User.findById(id, function (err, user) {
            return res.json(user.todo);
        });
    } catch (err) {
        console.log(err)
    }
}

exports.delete = async (req, res, next) => {
    const { id } = req.params;
    const { taskid } = req.body;
    
    console.log("DELid", id, "TASKID", taskid);

    const user= await User.findById(id)
   console.log(user.todo);
   
    /*    const b = User.
        find()
        .where('_id')
        .equals(id)
        .select('todo')
       */
    /* .find()
    .where('id')
   .equals(2)  */
/*     b.exec(function (err, users) {
        console.log(users);

    }) */
}

// 'athletes' содержит список спортсменов, соответствующих критерию.
/*         await todo.remove()
 return res.json({ id: req.params.id }) */





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