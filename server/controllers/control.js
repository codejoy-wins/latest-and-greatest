// I understand this file
const mongoose = require('mongoose');
const Task = require('./../models/task');

module.exports = {
    //show all tasks
    index: (req, res)=>{
        Task.find({}, (err, tasks)=> {
            if(err) {
                res.json({message: "Erroneous", error: err})
            } else {
                res.json({message: "Success", magic: tasks});
            }
        })
    },
    // show particular task
    task: (req, res)=>{
        Task.findOne({_id : req.params.id}, (err, task)=>{
            if(!task){
                res.json({message: "Erroneous", error: "Task not found"})
            }
            else{
                res.json({message: "Success", magic: task});
            }
        })
    },
    //create new task
    new: (req, res)=>{
        Task.create({title: req.body.title, description: req.body.description, completed: req.body.completed}, (err, newTask)=>{
            if(err){
                res.json({message: "Erroneous", error: err});
            } else {
                res.json({message: "Success", magic: newTask});
            }
        })
    },
    update: (req, res)=> {
        Task.findOne({_id: req.params.id}, (err, task)=>{
            if (!task){
                res.json({message: "Erroneous", error: "Task not found"});
            }else{
                Task.update(task, {title: req.body.title, description: req.body.description, completed: req.body.completed}, (err, updatedTask)=>{
                    if(err){
                        res.json({message: "Erroroneous", error: err})
                    } else {
                        res.json({message: "Success", magic: updatedTask});
                    }
                })
            }
        })
    },
    delete: (req,res)=>{
        Task.findOne({_id: req.params.id}, (err,task)=>{
            if(!task){
                res.json({message: "Erroneous", error: "Task not found"})
            } else {
                Task.remove(task, (err)=>{
                    res.json({message: "Successful Removal"});
                })
            }
        })
    }
}