"use strict";

var express = require('express');
var router = express.Router();

var userController = require ('../controller/userController');

router.get('/', function(req, res) {
    res.render('home', {layout: 'main'});
  });

router.get('/tasks/newTask', userController.showLogin);

router.post('/tasks/allTask', loginController.enter);

module.exports = router;