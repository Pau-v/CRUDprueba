"use strict";

var mongoose = require ('mongoose');

mongoose.connect("mongodb://localhost:27017/CRUD-mongoose-nodejs", {
    useUnifiedTopology: true, 
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});

mongoose.connection.on("open", () => {
     console.log(`mongoDB conectado`);
 });

//module.exports = mongoose;