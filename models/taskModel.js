"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskSchema = new Schema ({
    task:{
        type: String,
    },
    state:{
        type: Boolean,
    }
});

module.exports = model('Task', taskSchema);