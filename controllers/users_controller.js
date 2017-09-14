var mongoose = require('mongoose');
var userModel = require('../models/user');

// users controller
exports.users = function(req, res, next) {
	
	userModel.find({},function(err,users){
		if (err) {
			console.log(err);
		}
		console.log('Success!');
		res.json(users);
	});
  
}

// single user controller
exports.user = function(req, res, next) {
 
  userModel.find({name :'Chuck'},function(err,user){
		if (err) {
			console.log(err);
		}
		console.log('Success!');
		res.json(user);
	});
}