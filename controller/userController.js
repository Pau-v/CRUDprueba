"use strict";

var User = require('../models/userModel');

var userController = {
    showLogin: (request, response) => {
        response.render('home', {layout: 'main', userInvalid: false});
    },
    enter: async (request, response) => {
        var userName = request.body.userName;
        var userFind = await userModel.find({ userName: userName });
        if(userFind.length == 1) {
			response.redirect('/task');
		} else {
			response.render('home', {layout:'main', loginInvalid: true});
		}
    }
};

module.exports = userController;