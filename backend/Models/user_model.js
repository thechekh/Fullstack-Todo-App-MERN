
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


module.exports = mongoose.model('User', UserSchema);