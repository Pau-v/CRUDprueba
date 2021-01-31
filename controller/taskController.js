"use strict";

const { request, response } = require('express');
var Task = require('../models/taskModel');

var taskController = {
    formTasks: (request, response) => {
        response.render('tasks/newTask')
    },

    createTask: async (request, response) => {
        var {task, state} = request.body;
        var newTask = new Task ({task, state});
        await newTask.save();
        response.redirect('/tasks');
    },

    showTask: async (request, response) => {
        var task = await Task.find().sort({createdAt:'desc'}).lean();
        response.render('tasks/allTasks', { todo });
    },

    // updateState: async (request, response) => {
    //     var 
    // }

};

module.exports = taskController;