// Still need to review this file
const mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({
    title: {type: String, require: true},
    description: {type: String, require: true, default: ""},
    completed: {type: Boolean, require: true, default: false},
}, {timestamps: true});

module.exports = mongoose.model('tasks', taskSchema);