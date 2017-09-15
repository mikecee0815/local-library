var mongoose = require('mongoose');
var userModel = require('../models/user');

// users
exports.users = function(req, res, next) {
	
	userModel.find({},function(err,users){
		if (err) {
			console.log(err);
		}
		console.log('Success!');
		res.json(users);
	});
  
}

// single user 
exports.user = function(req, res, next) {
 
  userModel.findOne({email:'Foo@goggle.com'},function(err,user){
		if (err) {
			console.log(err);
		}
		console.log('Success!');
		res.json(user);
	});
}
// single user by id
exports.userDetail = function(req, res, next) {

	var id = req.params.id;	
	
  userModel.findById( id , function(err,data){
		if (err) {
			console.log(err);
		}
		console.log('Success!');
		res.json(data);
	});
}
