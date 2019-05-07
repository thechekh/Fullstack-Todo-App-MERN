
const mongoose = require('mongoose');
const tasks=require('./tasks');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    login: { type: String, unique: true, required: true },
    hash: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    createdDate: { type: Date, default: Date.now },
    todo:{type:Array,default:tasks},
});
/* Schema=mongoose.Schema;

const todoSchema = new Schema({
    text: { type: String, required: true },
   isCompleted:{type:Boolean},
    createdAt: { type: Date, default: Date.now }
}) */

module.exports = mongoose.model('User', UserSchema);