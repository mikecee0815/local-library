var mongoose = require('mongoose');
var userModel = require('../models/user');

// index controller
exports.index = function(req, res, next) {
	
	userModel.find({},function(err,all){
		if (err) {
			console.log(err);
		}
		res.json(all);
	});
  
}