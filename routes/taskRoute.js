"use strict";

var express = require('express');
var router = express.Router();

var taskController = require ('../controller/taskController');


router.get('/task', function(req, res) {
    res.send('lista de tareas');
  });

module.exports = router;