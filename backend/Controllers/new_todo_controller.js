const Todo = require('../Models/new_todo_model');


exports.getTodos = (req, res, next) => {
    console.log(req.params.id);
    const id=req.params.id;

	Todo.find({ user: id})
	.then(result => res.send(result))
	.catch(err => next(err));
}

exports.saveTodo = (req, res, next) => {
    const text = req.body.task;
    const id=req.params.id;
    console.log(text,id);
	if(!text){
		res.status(400);
		res.json({ "error": "Invalid Data" });
	}
	
	const todo = new Todo({
		text: text,
		completed: false,
		user:id
	});
console.log(todo);
	todo.save((err, result) => {
		if(err){
			res.send(err);
		} else {
			res.send(result);
		}
	})
}

exports.deleteTodo = (req, res, next) => {
    const id = req.params.id;
    const {taskid}=req.body;
console.log("userid",id,"taskid",taskid);
	Todo.remove({ _id : taskid}, (err, result) => {
		if(err){
			res.send(err);
		} else {
			res.send({taskid});
		}
	})
}

exports.editTodo = (req, res, next) => {
	const id = req.params.id;
	const text = req.body.text;

	Todo.findById(id, (err, todo) => {
		if(err){
			res.send(err);
		} else {
			todo.text = text;

			todo.save((err, result) => {
				if(err){
					res.send(err);
				}
				res.send(result);
			});
		}
	})
}

exports.complete = (req, res, next) => {
	const id = req.params.id;
	const completed = req.body.complete;

	Todo.findById(id, (err, todo) => {
		if(err){
			res.send(err);
		} else {
			todo.completed = !completed;

			todo.save((err, result) => {
				if(err){
					res.send(err);
				}
				res.send(result);
			})
		}
	})
}