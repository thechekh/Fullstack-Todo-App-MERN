const mongoose=require('mongoose');

Schema=mongoose.Schema;

const todoSchema = new Schema({
    text: { type: String, required: true },
   isCompleted:{type:Boolean},
    createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Todo', todoSchema)