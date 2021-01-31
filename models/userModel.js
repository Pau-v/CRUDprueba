"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//const { Schema, model } = require ('mongoose');

var UserSchema = new Schema ({
    userName:{
        type: String,
        unique: true,
        required: true
    }
});

module.exports = model('User', UserSchema);